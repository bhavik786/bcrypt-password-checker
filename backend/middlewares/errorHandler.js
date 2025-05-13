module.exports = (err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({
    success: 0,
    message: "Internal server error",
  });
};
