var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const bucketList = {
  b_id: 0,
  b_flag: 0,
  b_title: "Nodejs 연동",
  b_start_date: "2021-09-14 00:00:00",
  b_end_date: "",
  b_end_check: false,
  b_cancle: false,
};

router.get("/data", (req, res) => {
  res.json(bucketList);
});

module.exports = router;
