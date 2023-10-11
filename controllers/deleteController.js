const fs = require("fs");
const path = require("path");

exports.deleteImage = (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "../uploads", filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      res.status(404).send("Image not found");
      return;
    }
    res.send("Image deleted successfully");
  });
};
