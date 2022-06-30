const express = require("express");
const todoRoute = require("./route/todoRoutes");
const mongoose = require('mongoose')

const app = express();


app.use(express.json());
app.use("/api/v1/todo", todoRoute);


module.exports = app