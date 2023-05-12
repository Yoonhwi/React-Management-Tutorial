const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/any/1",
      name: "홍길동",
      birthday: "960105",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/any/2",
      name: "왕춘식",
      birthday: "950321",
      gender: "남자",
      job: "프로그래머",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/any/3",
      name: "박두팔",
      birthday: "911209",
      gender: "남자",
      job: "모델",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port} `));
