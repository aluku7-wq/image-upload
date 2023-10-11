const express = require("express");
const app = express();
const port = 5000;

// Import the API key middleware from the middleware file
const { apiKeyMiddleware } = require("./middleware/middleware");

// Import the imageRoutes module
const imageRoutes = require("./routes/imageRoutes");

// Use the API key middleware for all routes under /images
app.use("/images", apiKeyMiddleware, imageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
