const next = require("next");
const path = require("path");
const express = require("express");
require("dotenv").config();
const dev = process.env.NODE_ENV !== "production";
console.log( process.env.NODE_ENV,"dev",dev)
const nextConfig = require('../next.config');
const app = next({ dev ,nextConfig,dir:"."});
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const app = express();

  const PORT = process.env.PORT || 3000;
  require("dotenv").config();
//   require("./app/logging")();
//   require("./app/middlewares")(app);
  require("./app/db")();
//   require("./app/config")();

  //forntend page
  app.get("*", (req, res) => {
    return handle(req, res);
  });
  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server is running at port ${PORT}`);
  });
})