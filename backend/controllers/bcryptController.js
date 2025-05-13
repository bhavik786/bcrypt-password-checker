const bcrypt = require("bcrypt");

const hashString = async (req, res, next) => {
  try {
    const { stringToHash } = req.body;
    if (!stringToHash) {
      return res
        .status(400)
        .json({ success: 0, message: "stringToHash is required" });
    }

    const hash = await bcrypt.hash(stringToHash, 12);

    res.status(200).json({
      success: 1,
      message: "Password hashed successfully",
      hash,
    });
  } catch (error) {
    next(error);
  }
};

const compareString = async (req, res, next) => {
  try {
    const { hashedString, normalString } = req.body;
    if (!hashedString || !normalString) {
      return res
        .status(400)
        .json({ success: 0, message: "Both fields are required" });
    }

    const match = await bcrypt.compare(normalString, hashedString);

    res.status(200).json({
      success: 1,
      match,
      message: match ? "Strings match" : "Strings do not match",
    });
  } catch (error) {
    next(error);
  }
};

const testApi = async (req, res, next) => {
  res.status(200).json({
    success: 1,
    error: 0,
    message: "Api is Live 💫",
  });
};
module.exports = { hashString, compareString, testApi };
