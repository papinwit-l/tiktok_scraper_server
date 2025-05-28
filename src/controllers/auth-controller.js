const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const prisma = require("../config/prima");
const createError = require("../utils/createError");

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return createError(400, "User or password is missing");
    }

    // check if user exists
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });
    if (!user) {
      return createError(400, "Username or password is incorrect");
    }
    // check if password is correct
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return createError(400, "Username or password is incorrect");
    }
    //check if user is admin
    if (user.role !== "ADMIN") {
      return createError(403, "You are not authorized to access this resource");
    }
    //check if user is active
    if (!user.is_active) {
      return createError(403, "Your account is inactive");
    }
    //check user limited session | if user is logged in from another device then force logout from old device
    const userSession = await prisma.userSession.findMany({
      where: {
        user_id: user.id,
      },
    });
    if (userSession.length >= 1) {
      // force logout from old device
      await prisma.userSession.deleteMany({
        where: {
          user_id: user.id,
        },
      });
    }

    // create access token
    const accessToken = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET
    );

    // create session
    const session = await prisma.userSession.create({
      data: {
        user_id: user.id,
        token: accessToken,
      },
    });

    //remove password from user object
    delete user.password;

    // send response
    res.status(200).json({
      message: "Login successful",
      user,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.addUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return createError(400, "User or password is missing");
    }
    // check if user exists
    const existUser = await prisma.user.findFirst({ where: { username } });
    if (existUser) {
      return createError(400, "User already exists");
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    // create user
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    res.status(200).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.currentUser = async (req, res, next) => {
  try {
    // console.log(req.user);
    res.status(200).json({
      message: "User fetched successfully",
      user: req.user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
