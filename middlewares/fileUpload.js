const multer = require("multer");

const MIME_TYPE_CONSTANT = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
};

const fileUpload = multer({
  limits: 5000000, //limit 5 mb
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "upload");
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_CONSTANT[file.mimetype];
      cb(null, Date.now() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_CONSTANT[file.mimetype];
    const error = isValid
      ? null
      : new Error("Please upload supported file formats only");
    cb(error, isValid);
  },
});

module.exports = fileUpload;
