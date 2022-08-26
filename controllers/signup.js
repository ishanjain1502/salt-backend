const brcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    const { email, username, password: plainTextPassword } = req.body;

    try {
      const password = await brcrypt.hash(plainTextPassword, 10);
      const newUser = await User.create({
        email,
        username,
        password,
      });

      await newUser.save();
    //   console.log(newUser);
      const user_id = newUser._id;
  
  
      const token = jwt.sign(
        { username, email, user_id },
        process.env.JWT_AUTH_SECRET
        );
      res.status(200).json({ message: "user created successfully", token: token,data:{username,email}});
    } catch (err) {
      if (err.code && err.code === 11000) {
        if (err.keyPattern.hasOwnProperty("email")) {
          res.status(409).json({ message: "Email already exists" });
        }
  
        if (err.keyPattern.hasOwnProperty("username")) {
          res.status(409).json({ message: "Username already exists" });
        }
      }
  
      else{
        console.log(err);
      }
    }
  };
  
  
  
  module.exports = { signup };