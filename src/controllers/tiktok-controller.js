const prisma = require("../config/prima");
const { exportToGoogleSheet } = require("../utils/googleSheets");

module.exports.getTagsList = async (req, res, next) => {
  try {
    const tags = await prisma.tiktokTag.findMany({
      select: {
        id: true,
        name: true,
        post_number: true,
        created_at: true,
        updated_at: true,
      },
    });

    res.json(tags);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.listUsersByTag = async (req, res, next) => {
  try {
    const { tags } = req.body;
    const checkTags = await prisma.tiktokTag.findFirst({
      where: {
        name: tags,
      },
    });

    if (!checkTags) {
      return res.status(404).json({ message: "Tag not found" });
    }

    const users = await prisma.tiktokUser.findMany({
      where: {
        TiktokUserTag: {
          some: {
            tag_id: checkTags.id,
          },
        },
      },
    });
    res.json(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.updateTagUsers = async (req, res, next) => {
  try {
    const { tags, users } = req.body;
    if (!tags || !users) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const checkTags = await prisma.tiktokTag.findFirst({
      where: {
        name: tags,
      },
    });
    if (!checkTags) {
      const newTags = await prisma.tiktokTag.create({
        data: {
          name: tags,
          post_number: "0",
        },
      });
    } else {
      await prisma.tiktokTag.update({
        where: {
          id: checkTags.id,
        },
        data: {
          post_number: "0",
        },
      });
    }

    const TAG = await prisma.tiktokTag.findFirst({
      where: {
        name: tags,
      },
    });

    //check all users
    users.forEach(async (user) => {
      const checkUser = await prisma.tiktokUser.findFirst({
        where: {
          username: user.username,
        },
      });
      if (!checkUser) {
        const newUser = await prisma.tiktokUser.create({
          data: {
            username: user.username,
            tiktok_src: "https://www.tiktok.com/@" + user.username,
            avatar: user.userAvatar,
          },
        });
        const newUserTag = await prisma.tiktokUserTag.create({
          data: {
            user_id: newUser.id,
            tag_id: TAG.id,
          },
        });
      } else {
        const checkUserTag = await prisma.tiktokUserTag.findFirst({
          where: {
            user_id: checkUser.id,
            tag_id: TAG.id,
          },
        });
        if (!checkUserTag) {
          const newUserTag = await prisma.tiktokUserTag.create({
            data: {
              user_id: checkUser.id,
              tag_id: TAG.id,
            },
          });
        }
      }
    });

    //fetch all user of tag
    const Alluser = await prisma.tiktokUser.findMany({
      where: {
        TiktokUserTag: {
          some: {
            tag_id: TAG.id,
          },
        },
      },
    });

    res.json({
      message: "Update tag users success",
      Alluser,
      totalUser: Alluser.length,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.createTagSyncHistory = async (req, res, next) => {
  try {
    const { tag } = req.body;

    const checkTag = await prisma.tiktokTag.findFirst({
      where: {
        name: tag,
      },
    });
    if (!checkTag) {
      return res.status(404).json({ message: "Tag not found" });
    }

    // create total user of tag history
    const Alluser = await prisma.tiktokUser.findMany({
      where: {
        TiktokUserTag: {
          some: {
            tag_id: checkTag.id,
          },
        },
      },
    });

    const totalUser = Alluser.length;

    const updateHistory = await prisma.tiktokTagTotalUserHistory.create({
      data: {
        tag_id: checkTag.id,
        total_user: totalUser,
      },
    });

    // console.log("all user", Alluser);
    console.log("total user", totalUser);
    console.log(updateHistory);

    res.json({
      message: "Create tag sync history success",
      updateHistory,
      totalUser,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.getTagSyncHistory = async (req, res, next) => {
  try {
    const { tag } = req.body;

    const checkTag = await prisma.tiktokTag.findFirst({
      where: {
        name: tag,
      },
    });
    if (!checkTag) {
      return res.status(404).json({ message: "Tag not found" });
    }

    const checkHistory = await prisma.tiktokTagTotalUserHistory.findMany({
      where: {
        tag_id: checkTag.id,
      },
    });
    if (!checkHistory) {
      return res.status(404).json({ message: "History not found" });
    }
    res.json(checkHistory);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.listUserBySelectTags = async (req, res, next) => {
  try {
    const { tags } = req.body;
    if (!tags) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    // console.log(tags);
    tags.forEach(async (tag) => {
      // console.log(tag);
      const checkTag = await prisma.tiktokTag.findFirst({
        where: {
          name: tag,
        },
      });
      if (!checkTag) {
        return res.status(404).json({ message: "Tag not found" });
      }
    });

    const tagIds = await Promise.all(
      tags.map(async (tag) => {
        const checkTag = await prisma.tiktokTag.findFirst({
          where: { name: tag },
        });
        return checkTag?.id; // use optional chaining in case it's null
      })
    );

    // Optional: filter out null/undefined IDs to avoid invalid query
    const validTagIds = tagIds.filter(Boolean);

    const users = await prisma.tiktokUser.findMany({
      where: {
        TiktokUserTag: {
          some: {
            tag_id: {
              in: validTagIds,
            },
          },
        },
      },
    });

    res.json(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.getDataSync = async (req, res, next) => {
  try {
    const tiktokTags = await prisma.tiktokTag.findMany();
    const tiktokUsers = await prisma.tiktokUser.findMany();
    const tiktokUserTags = await prisma.tiktokUserTag.findMany({
      include: {
        tag: {
          select: {
            name: true,
          },
        },
        user: {
          select: {
            username: true,
          },
        },
      },
    });
    const tiktokTagTotalUserHistoryRaw =
      await prisma.tiktokTagTotalUserHistory.findMany();
    const tiktokTagTotalUserHistory = tiktokTagTotalUserHistoryRaw.map(
      (history) => {
        const tag = tiktokTags.find((tag) => tag.id === history.tag_id)?.name;
        return {
          ...history,
          tag_name: tag,
        };
      }
    );

    res.json({
      tiktokTags,
      tiktokUsers,
      tiktokUserTags,
      tiktokTagTotalUserHistory,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.putDataSync = async (req, res, next) => {
  try {
    const {
      tiktokTags,
      tiktokUsers,
      tiktokUserTags,
      tiktokTagTotalUserHistory,
    } = req.body;

    if (
      !tiktokTags ||
      !tiktokUsers ||
      !tiktokUserTags ||
      !tiktokTagTotalUserHistory
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Use for...of with await to prevent DB connection overload
    for (const tag of tiktokTags) {
      const checkTag = await prisma.tiktokTag.findFirst({
        where: { name: tag.name },
      });
      if (!checkTag) {
        await prisma.tiktokTag.create({
          data: {
            name: tag.name,
            post_number: tag.post_number,
            created_at: tag.created_at,
            updated_at: tag.updated_at,
          },
        });
      }
    }

    for (const user of tiktokUsers) {
      const checkUser = await prisma.tiktokUser.findFirst({
        where: { username: user.username },
      });
      if (!checkUser) {
        await prisma.tiktokUser.create({
          data: {
            username: user.username,
            avatar: user.avatar,
            post_number: user.post_number,
            created_at: user.created_at,
            updated_at: user.updated_at,
            tiktok_src: `https://www.tiktok.com/@${user.username}`,
          },
        });
      }
    }

    for (const userTag of tiktokUserTags) {
      const checkUser = await prisma.tiktokUser.findFirst({
        where: { username: userTag.user.username },
      });
      const checkTag = await prisma.tiktokTag.findFirst({
        where: { name: userTag.tag.name },
      });

      if (!checkUser || !checkTag) continue; // skip if either is missing

      await prisma.tiktokUserTag.create({
        data: {
          user_id: checkUser.id,
          tag_id: checkTag.id,
          created_at: userTag.created_at,
          updated_at: userTag.updated_at,
        },
      });
    }

    for (const history of tiktokTagTotalUserHistory) {
      const checkTag = await prisma.tiktokTag.findFirst({
        where: { name: history.tag_name },
      });
      if (!checkTag) continue;

      await prisma.tiktokTagTotalUserHistory.create({
        data: {
          tag_id: checkTag.id,
          total_user: history.total_user,
          created_at: history.created_at,
          updated_at: history.updated_at,
        },
      });
    }

    res.json({ message: "Data synced successfully" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.updateUserData = async (req, res, next) => {
  try {
    const { userData } = req.body;
    if (!userData) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const user = await prisma.tiktokUser.findFirst({
      where: { username: userData.username },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await prisma.tiktokUser.update({
      where: { id: user.id },
      data: {
        followers: userData.followers,
        following: userData.following,
        likes: userData.likes,
        avatar: userData.avatar,
        updated_at: new Date(),
      },
    });

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.updateAllUserData = async (req, res, next) => {
  try {
    const { allUserData } = req.body;
    if (!allUserData) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    res.json(allUserData);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.testTag = async (req, res, next) => {
  try {
    const { tag } = req.body;
    const allUser = await prisma.tiktokUser.findMany({
      where: {
        TiktokUserTag: {
          some: {
            tag_id: 6,
          },
        },
      },
    });
    res.json(allUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.listAllUsers = async (req, res, next) => {
  try {
    const allUser = await prisma.tiktokUser.findMany({
      select: {
        id: true,
        username: true,
      },
    });
    res.json(allUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

function convertToNumber(inputValue) {
  let result = 0;
  if (inputValue) {
    const num = parseFloat(inputValue.replace(/[KMB]/g, ""));
    if (inputValue.includes("K")) {
      result = num * 1000;
    } else if (inputValue.includes("M")) {
      result = num * 1000000;
    } else if (inputValue.includes("B")) {
      result = num * 1000000000;
    } else {
      result = num;
    }
  }
  return result;
}

module.exports.getDataForExport = async (req, res, next) => {
  try {
    const allTags = await prisma.tiktokTag.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    const allUserData = [];

    for (const tag of allTags) {
      const allUser = await prisma.tiktokUser.findMany({
        where: {
          TiktokUserTag: {
            some: {
              tag_id: tag.id,
            },
          },
        },
      });

      const formattedUserData = allUser.map((user) => ({
        ...user,
        followers: convertToNumber(user.followers),
        following: convertToNumber(user.following),
        likes: convertToNumber(user.likes),
      }));
      allUserData.push({
        tag: tag.name,
        users: formattedUserData,
      });
    }

    //filter out users with less than 3000 followers
    allUserData.forEach((tagData) => {
      tagData.users = tagData.users.filter((user) => {
        const followers = user.followers;
        return followers >= 3000;
      });
    });

    await exportToGoogleSheet(allUserData);

    res.json({ message: "Data exported successfully" });
    // res.json(allUserData);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
