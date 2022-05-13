const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const todo = require("./routers/todoRouters");
const category = require("./routers/categoryRouters");
require('./model/category')
const app = express();
const PORT = 8000;
const cors = require('cors')

app.use(express.json());
app.use(cors({origin:'http://localhost:3000'}))
app.use("/api/todo", todo);
app.use("/api/categories", category);
mongoose.connect('mongodb+srv://admin:admin@interview.v46sv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
  console.log("database running");
});
app.listen(PORT, () => {
  console.log(`App running on localhost${PORT}`);
});
