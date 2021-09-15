var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");

const { USERID, PASSWORD } = require("./config/mongoConfig");
const altlasURL = `mongodb+srv://${USERID}:${PASSWORD}@cluster0.ivvgw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const mongoose = require("mongoose");

// event를 발생시켜서 상태를 모니터링하는 객체
const dbConn = mongoose.connection;

// 정상적으로 연결되었을때 실행되는 event handler
// 최초에 연결이 성공했을 때 한번만(once) 작동되도록 수행
dbConn.once("open", () => {
  console.log("MongoDB Open OK");
});

// 작동하는 과정에 오류가 발생하면 console에 오류메시지를 보여주기
dbConn.on("error", () => {
  console.error;
});
dbConn.on("error", (error) => {
  console.log(error);
});
// mongoose.connect(altlasURL);
mongoose.connect("mongodb://localhost:27017/mydb");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const apiRouter = require("./routes/apiRouter");

var app = express();

// XSS 해킹을 방지하기 위하여 지금의 모든 HTTP 프로토콜에서는
// 기본적으로 CORS(Cross-Origin Resource Sharing) 을 금지하고 있다
// API 서버를 구축할때는 필수적으로 CORS를 허용해 주어야 한다
// NodeJS에서는 cors import하여 단순 설정만 하여도 CORS를 허용할 수 있다
// 무작정 CORS를 허용하는 것은 매우 위험한 정책이다.
// 필요한 곳만 CORS 를 허용하도록 설정을 한다

// 허용할 접속주소(URL) 설정하기위한 허용 주소록 만들기
const whiteList = ["http://localhost:3000"];
// cors에 제공할 옵션 데이터 만들기
// 배열.indexOf(문자열)
// 이 함수는 문자열 배열중에 문자열에 해당하는 값이 있으면
// 항상 -1이 아닌 값을 return 하는 함수
// 배열중에 문자열에 해당하는 값이 없으면 -1을 return
// if(whiteURLS.indexOf("http://localhost:3000") !== -1) {
//  isWhiteURLS = true
// }

// boolean bYes = (3 == 3)
// bYes = 3 != -1
const corsOption = {
  origin: (origin, callback) => {
    const isWhiteList = whiteList.indexOf(origin) !== -1;
    callback(null, isWhiteList);
  },
  credentials: true,
};

app.use(cors(corsOption));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
