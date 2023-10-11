const fs = require("fs");
const path = require("path");

exports.retrieveImage = (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "../uploads", filename);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(404).send("Image not found");
      return;
    }
    res.setHeader("Content-Type", "image/jpeg"); // Adjust the content type as needed
    res.end(data);
  });
};
