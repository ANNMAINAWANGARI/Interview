const express = require("express");
const router = express.Router();
 const { getCategory,postCategory}=require('../controller/categoryController')
router.get("/", getCategory);
router.post("/category", postCategory);

module.exports = router;