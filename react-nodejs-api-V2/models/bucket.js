const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucket = Schema({
  b_id: String,
  b_flag: Number,
  b_title: String,
  b_start_date: String,
  b_end_date: String,
  b_end_check: Boolean,
  b_cancel: Boolean,
});

// bucketlist : Collection 이름
// 실제 DB에 저장될때는 buckeLists 라는 이름으로(복수형) 등록된다
module.exports = mongoose.model("bucketList", bucket);
