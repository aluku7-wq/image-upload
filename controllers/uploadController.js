const multer = require("multer");
const path = require("path");

// Define the storage for uploaded images using Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Specify the directory where uploaded images will be stored
  },
  filename: (req, file, cb) => {
    // Preserve the original filename
    const ext = path.extname(file.originalname);
    cb(null, file.originalname); // Use the original filename
  },
});

const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (allowedImageTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Invalid file type. Only JPEG, PNG, and GIF images are allowed."
        )
      );
    }
  },
});

exports.uploadImage = (req, res, next) => {
  try {
    // Handle image upload logic
    upload.single("image")(req, res, (err) => {
      if (err) {
        console.error("Upload error:", err);
        return res
          .status(400)
          .json({ error: "Upload failed", message: err.message });
      } // Check if the file field is empty
      if (!req.file) {
        return res.status(400).json({ error: "No image file provided" });
      }
      res.send("Image uploaded successfully");
    });
  } catch (error) {
    console.error("Internal error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
