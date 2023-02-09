const express = require("express");
const { check } = require("express-validator");

const usersContollers = require("../controller/users-controller");
const fileUpload = require('../middleware/file-upload');

const router = express.Router();

router.get("/", usersContollers.getUsers);

router.post(
  "/signup",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersContollers.signup
);

router.post("/login", usersContollers.login);

module.exports = router;
