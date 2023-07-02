const express = require("express");
const noteRouter = require("./routes/notes");
const authorRouter = require("./routes/authors");

const app = express();

// JSON 데이터 처리 미들웨어 사용
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/notes", noteRouter);
app.use("/authors", authorRouter);

// 오류처리 미들웨어
app.use((err, req, res, next) => {
  res.status(500);
  res.json({
    result: "fail",
    error: err.message,
  });
});

// 정의되지 않은 라우팅에 404 오류 처리
app.use((req, res, next) => {
  res.status(404);
  res.json({
    result: "fail",
    error: `page not found ${req.path}`,
  });
});

app.listen(8080);
