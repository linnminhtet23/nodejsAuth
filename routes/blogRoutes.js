const {
  getAllBlogs,
  createABlog,
  deleteBlog,
  updateABlog,
} = require("../controllers/blogControllers");
const fileUpload = require("../middlewares/fileUpload");

const router = require("express").Router();

router.get("/", getAllBlogs);
router.post("/", fileUpload.single("file"), createABlog);
router.put("/:id", fileUpload.single("file"), updateABlog);
router.delete("/:id", deleteBlog);

module.exports = router;
