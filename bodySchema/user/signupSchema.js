const { body } = require("express-validator");

const signUpSchema= [
    body("name")
    .exists({ checkFalsy: true })
    .withMessage("Please fill your name!"),

  body("email").isEmail().withMessage("Please provide valid email!"),

  body("password")
    .isLength({ min: 7 })
    .withMessage("Password should be at least 7 characters!"),

  body("confirmPassword").custom((value, {req})=>{

    if(value != req.body.password){
      throw new Error("Password and confirm must be the same")
    
    }

    return true;
  })
]

module.exports = {signUpSchema}