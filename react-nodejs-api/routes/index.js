const express = require("express");
const router = express.Router();
const BUCKET = require("../models/bucket");

const bucketList = {
  b_id: "0001",
  b_flag: 0,
  b_title: "Nodejs 연동",
  b_start_date: "2021-09-14 00:00:00",
  b_end_date: "",
  b_end_check: false,
  b_cancel: false,
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/**
 * react로부터 데이터를 받아서 mongoDB에 insert를 수행하기
 */
router.post("/insert", async (req, res) => {
  const result = await BUCKET.create(req.body);
  res.json(result);
});

router.get("/data", async (req, res) => {
  const result = await BUCKET.find({});
  res.json(result);
});

module.exports = router;
