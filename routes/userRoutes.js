const { signUpSchema } = require("../bodySchema/user/signupSchema");
const {
  signUp,
  login,
  getAllUsers,
  getSingleUser,
  logout,
} = require("../controllers/userControllers");

const auth = require("../middlewares/auth");
const validateRequest = require("../middlewares/validateRequest");

const router = require("express").Router();

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);

router.post(
  "/signup",
  validateRequest,
  signUpSchema,

  signUp
);
router.post("/signin", login);
router.post("/logout", auth, logout);

module.exports = router;
