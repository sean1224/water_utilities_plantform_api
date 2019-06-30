var express = require("express");
var consign = require("consign");
var app = express();
consign()
  .include("libs/config.js")
  .include("db.js")
  .then("libs/middlewares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);
