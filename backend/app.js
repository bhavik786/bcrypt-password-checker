const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bcryptRoutes = require("./routes/bcryptRoutes");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", bcryptRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
