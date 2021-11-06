const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "phantphant6969@gmail.com",
    pass: "phantphant123#",
  },
});

module.exports = transporter;
