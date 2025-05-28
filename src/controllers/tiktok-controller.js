// const puppeteer = require("puppeteer-extra");
// const StealthPlugin = require("puppeteer-extra-plugin-stealth");
// puppeteer.use(StealthPlugin());

const puppeteer = require("puppeteer");
const prisma = require("../config/prima");

// const { chromium } = require("playwright");

const addToDatabase = async (posts, tags, userInfo) => {
  // console.log("userInfo: " + userInfo);
  // console.log("posts: " + posts);
  // console.log("tags: " + tags);

  //filter out duplicate userInfo
  const uniqueUserInfo = [
    ...new Map(userInfo.map((item) => [item.username, item])).values(),
  ];

  const postNumber = posts.split(" ")[0];
  const tagExist = await prisma.tiktokTag.findFirst({
    where: {
      name: tags,
    },
  });

  if (!tagExist) {
    const tiktokTag = await prisma.tiktokTag.create({
      data: {
        name: tags,
        post_number: postNumber,
      },
    });
  }

  const tiktokTag = await prisma.tiktokTag.findFirst({
    where: {
      name: tags,
    },
  });

  // userInfo.forEach(async (user) => {
  //   let tiktokUser = await prisma.tiktokUser.findFirst({
  //     where: {
  //       username: user.username,
  //     },
  //   });

  //   if (!tiktokUser) {
  //     console.log(user);
  //     tiktokUser = await prisma.tiktokUser.create({
  //       data: {
  //         username: user.username,
  //         avatar: user.userAvatar,
  //         tiktok_src: `https://www.tiktok.com/@${user.username}`,
  //       },
  //     });
  //   } else {
  //     tiktokUser = await prisma.tiktokUser.update({
  //       where: {
  //         id: tiktokUser.id,
  //       },
  //       data: {
  //         avatar: user.userAvatar,
  //       },
  //     });
  //   }

  //   //check user Tag exist
  //   const userTagExist = await prisma.tiktokUserTag.findFirst({
  //     where: {
  //       user_id: tiktokUser.id,
  //       tag_id: tiktokTag.id,
  //     },
  //   });

  //   if (!userTagExist) {
  //     await prisma.tiktokUserTag.create({
  //       data: {
  //         user_id: tiktokUser.id,
  //         tag_id: tiktokTag.id,
  //       },
  //     });
  //   }
  // });

  for (const user of uniqueUserInfo) {
    const userExist = await prisma.tiktokUser.findFirst({
      where: { username: user.username },
    });

    if (!userExist) {
      const tiktokUser = await prisma.tiktokUser.create({
        data: {
          username: user.username,
          avatar: user.userAvatar,
          tiktok_src: `https://www.tiktok.com/@${user.username}`,
        },
      });

      const userTagExist = await prisma.tiktokUserTag.findFirst({
        where: {
          user_id: tiktokUser.id,
          tag_id: tiktokTag.id,
        },
      });

      if (!userTagExist) {
        await prisma.tiktokUserTag.create({
          data: {
            user_id: tiktokUser.id,
            tag_id: tiktokTag.id,
          },
        });
      }
    } else {
      await prisma.tiktokUser.update({
        where: { id: userExist.id },
        data: { avatar: user.userAvatar },
      });
    }
  }
};

module.exports.getPostsFromTags = async (req, res, next) => {
  try {
    const { tags } = req.body;
    const browser = await puppeteer.launch({
      headless: false, // Debug mode
      slowMo: 30,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    });

    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
    );
    await page.setViewport({ width: 1366, height: 768 });

    const url = `https://www.tiktok.com/tag/${tags}`;
    await page.goto(url, {
      // waitUntil: "networkidle2",
      // timeout: 120000,
    });

    // Scroll slowly to load posts
    // await page.evaluate(async () => {

    // });

    await page.waitForSelector("p.user-name");

    // Now extract data
    const data = await page.evaluate(async () => {
      const postsEl = document.querySelector('[data-e2e="challenge-vvcount"]');
      const posts = postsEl ? postsEl.textContent.trim() : null;

      const postsText = posts && posts.split(" ")[0];
      // convert to number (140.2K => 140200, 5.4M => 5400000)
      let postsNumber = 0;
      if (postsText) {
        const num = parseFloat(postsText.replace(/[KMB]/g, ""));
        if (postsText.includes("K")) {
          postsNumber = num * 1000;
        } else if (postsText.includes("M")) {
          postsNumber = num * 1000000;
        } else if (postsText.includes("B")) {
          postsNumber = num * 1000000000;
        } else {
          postsNumber = num;
        }
      }

      const postsPerRow = 5;
      const rowHeight = 300;
      const totalRows = Math.ceil(postsNumber / postsPerRow);
      const totalScrolllHeight = totalRows * rowHeight;
      const maxAttempts = 10;

      console.log("postsNumber: " + postsNumber);
      await new Promise((resolve) => {
        let totalHeight = 0;
        let attemps = 0;
        const distance = 300;
        const timer = setInterval(() => {
          window.scrollBy(0, distance);
          totalHeight += distance;
          const currentScrollHeight = document.documentElement.scrollHeight;

          if (currentScrollHeight >= totalScrolllHeight) {
            // if (currentScrollHeight >= 1000) {
            console.log("totalHeight: " + totalHeight);
            attemps = 0;
            clearInterval(timer);
            resolve();
          } else {
            if (currentScrollHeight < totalHeight) {
              totalHeight = currentScrollHeight;
              attemps++;
            } else {
              attemps = 0;
            }
          }

          if (attemps >= maxAttempts) {
            clearInterval(timer);
            resolve();
          }
        }, 500); // slow scroll to mimic human
      });

      // const postsEl = document.querySelector('[data-e2e="challenge-vvcount"]');
      // const posts = postsEl ? postsEl.textContent.trim() : null;

      const userElements = document.querySelectorAll(
        '[data-e2e="challenge-item-username"], p.user-name'
      );
      const userList = Array.from(userElements).map((el) =>
        el.textContent.trim()
      );

      const userPicElements = document.querySelectorAll('[loading="lazy"]');

      const userPicList = Array.from(userPicElements).map((el) =>
        el.getAttribute("src")
      );

      const userInfo = [];
      for (let i = 0; i < userList.length; i++) {
        userInfo.push({
          username: userList[i],
          userAvatar: userPicList[i],
        });
      }

      return { posts, userList, userPicList, postsNumber, userInfo };
    });

    await browser.close();

    await addToDatabase(data.posts, tags, data.userInfo);

    res.json(data);
  } catch (error) {
    console.error("Scraping error:", error);
    next(error);
  }
};

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

module.exports.getAllUserInfoByTags = async (req, res, next) => {
  let lastUser = null;
  let lastTiktok_src = null;
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

    //find Existing Error
    const existError = await prisma.tiktokUserTagSyncError.findFirst({
      where: {
        tag: tags,
      },
    });

    console.log("check last Error");
    if (existError) {
      console.log("existError found last error");
      lastTiktok_src = existError.tiktok_src;
      console.log("lastTiktok_src: " + lastTiktok_src);
    }

    //find index of userError in users
    const index = users.findIndex((user) => user.tiktok_src === lastTiktok_src);
    console.log("index: " + index);

    for (let i = 0; i < users.length; i++) {
      if (index !== -1 && i < index) {
        i = index;
      }
      const browser = await puppeteer.launch({
        headless: true, // Debug mode
        // slowMo: 30,
        // args: [
        //   "--no-sandbox",
        //   "--disable-setuid-sandbox",
        //   "--disable-dev-shm-usage",
        // ],
      });

      const page = await browser.newPage();
      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
      );
      await page.setViewport({ width: 1366, height: 768 });
      await page.goto(users[i].tiktok_src, {
        // waitUntil: "networkidle2",
        timeout: 20000,
      });

      await page.waitForSelector(`[data-e2e="likes-count"`);

      const data = await page.evaluate(async () => {
        const followingEl = document.querySelector(
          `[data-e2e="following-count"]`
        );
        const following = followingEl ? followingEl.textContent.trim() : null;

        const followersEl = document.querySelector(
          `[data-e2e="followers-count"]`
        );
        const followers = followersEl ? followersEl.textContent.trim() : null;

        const likesEl = document.querySelector(`[data-e2e="likes-count"]`);
        const likes = likesEl ? likesEl.textContent.trim() : null;

        return { following, followers, likes };
      });
      await browser.close();

      const userData = await prisma.tiktokUser.update({
        where: {
          id: users[i].id,
        },
        data: {
          followers: data.followers,
          following: data.following,
          likes: data.likes,
        },
      });

      lastTiktok_src = users[i].tiktok_src;
      lastUser = users[i].username;

      console.log(`${users[i].username} updated ${i + 1} of ${users.length}`);
    }

    const userInfo = await prisma.tiktokUser.findMany({
      where: {
        TiktokUserTag: {
          some: {
            tag_id: checkTags.id,
          },
        },
      },
    });

    //find existed error
    const checkExistError = await prisma.tiktokUserTagSyncError.findFirst({
      where: {
        tag: req.body.tags,
      },
    });

    // if error exist, delete it
    if (checkExistError) {
      await prisma.tiktokUserTagSyncError.delete({
        where: {
          id: checkExistError.id,
        },
      });
    }

    res.json(userInfo);
  } catch (error) {
    console.log(error.message);
    const existError = await prisma.tiktokUserTagSyncError.findFirst({
      where: {
        tag: req.body.tags,
      },
    });

    if (!existError) {
      const newError = await prisma.tiktokUserTagSyncError.create({
        data: {
          tag: req.body.tags,
          tiktok_src: lastTiktok_src,
        },
      });
    } else {
      await prisma.tiktokUserTagSyncError.update({
        where: {
          id: existError.id,
        },
        data: {
          tiktok_src: lastTiktok_src,
        },
      });
    }
    next(error);
  }
};

module.exports.getAllUserInfoByUser = async (req, res, next) => {
  try {
    const { username } = req.body;
    const checkUser = await prisma.tiktokUser.findFirst({
      where: {
        username: username,
      },
    });
    if (!checkUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const browser = await puppeteer.launch({
      headless: true, // Debug mode
      // slowMo: 30,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        //   "--disable-dev-shm-usage",
      ],
    });

    const page = await browser.newPage();
    // await page.setUserAgent(
    //   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
    // );
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto(checkUser.tiktok_src, {
      // waitUntil: "networkidle2",
      timeout: 20000,
    });

    await page.waitForSelector(`[data-e2e="likes-count"`);

    const data = await page.evaluate(async () => {
      const followingEl = document.querySelector(
        `[data-e2e="following-count"]`
      );
      const following = followingEl ? followingEl.textContent.trim() : null;

      const followersEl = document.querySelector(
        `[data-e2e="followers-count"]`
      );
      const followers = followersEl ? followersEl.textContent.trim() : null;

      const likesEl = document.querySelector(`[data-e2e="likes-count"]`);
      const likes = likesEl ? likesEl.textContent.trim() : null;

      return { following, followers, likes };
    });
    await browser.close();

    const userData = await prisma.tiktokUser.update({
      where: {
        id: checkUser.id,
      },
      data: {
        followers: data.followers,
        following: data.following,
        likes: data.likes,
      },
    });
    console.log(`${checkUser.username} updated`);
    res.json(userData);
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

    // //// create total user of tag history
    // const Alluser = await prisma.tiktokUser.findMany({
    //   where: {
    //     TiktokUserTag: {
    //       some: {
    //         tag_id: TAG.id,
    //       },
    //     },
    //   },
    // });

    // const totalUser = Alluser.length;

    // const updateHistory = await prisma.tiktokTagTotalUserHistory.create({
    //   data: {
    //     tag_id: TAG.id,
    //     total_user: totalUser,
    //   },
    // });

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
