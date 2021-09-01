const asyncHandler = require("../../utils/async");
const Users = require("../../models/Users");
const bcrypt = require("bcryptjs");
const validator = require("../../middlewares/validator");

//Create Account
exports.createAccount = asyncHandler(async (req, res, next) => {
  try {
    if ((await validator.emailExists(req.body.email)).length > 0) {
      res.status(409).json({data:[], message : "Email Already in Use!"});
    } else {
      const password = req.body.password;
      const hash = await bcrypt.hash(password, 10);

      await Users.registerUser({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: "Male",//req.body.gender,
        email: req.body.email,
        password: hash,
        dial_code: "+91",//req.body.dial_code,
        phone: req.body.phone,
        is_deleted: 0
      });
      res.status(200).json({data: [], message: "Successfully Registered!"});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({data: [], messsage: "Something went wrong!"});
  }
}); 

//Show all users data
exports.showAccounts = asyncHandler(async (req, res, next) => {
  try {
    var data = await Users.showUsers();
    res.json(data);
  } catch (err) {
    res.json({ data:[], message: "Something went wrong while fetching details!"});
  }
});

//delete user by user_id (is_deleted will be changed to 1)
exports.deleteById = asyncHandler(async (req, res, next) => {
  try {
      await Users.deleteById({
        user_id: req.params.user_id,
      });
      res.status(200).json({ data:[], message :"User Successfully Deleted!"});
    }
   catch (err) {
    res.status(500).json({ data:[], mesage: "Something went wrong while deleting the user's account!"});
  }
});