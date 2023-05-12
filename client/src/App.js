import React, { Component } from "react";
import Customer from "./components/Customer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import "./App.css";

const customer = [
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
];
class App extends Component {
  render() {
    return (
      <Paper sx={{ width: "100%", marginTop: 3, overflowX: "auto" }}>
        <Table sx={{ minWidth: "1080px" }}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default App;
