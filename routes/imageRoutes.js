const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");
const retrieveController = require("../controllers/retrieveController");
const deleteController = require("../controllers/deleteController");

// Route for uploading images
router.post("/upload", uploadController.uploadImage);

// Route for retrieving images
router.get("/image/:filename", retrieveController.retrieveImage);

// Route for deleting images
router.delete("/image/:filename", deleteController.deleteImage);

module.exports = router;
