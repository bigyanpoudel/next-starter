require("dotenv").config();

module.exports = function () {
  // console.log(process.env.JWT_SECRET, "jwt secret");
  if (!process.env.JWT_SECRET) {
    throw new Error("FATAL ERROR: JWT_SECRET is not defined");
  }
};