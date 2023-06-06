const express = require("express");
const {
  userRegistration,
  login,
  forgot_password,
  forgotpasswordEmail,
  changeOldPassword,
  cartData,
  myOrdersData,
  sendEmail
} = require("../controllers/auth");
const { checkIsUserAuthenticated } = require("../middleware/verifyToken");

const router = express.Router();
router.post("/users/signup", userRegistration);
router.post("/users/login", login);
router.post("/users/forget-password", forgot_password);
router.post("/users/forget-password/:id/:token", forgotpasswordEmail);
router.post(
  "/users/change-password",
  checkIsUserAuthenticated,
  changeOldPassword
);
router.post("/users/cartData", cartData);
router.post("/users/myOrders", myOrdersData);
router.post("/users/sendEmail", sendEmail);

module.exports = router;
