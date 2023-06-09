import React, { Component } from "react";
import Customer from "./components/Customer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import CircularProgress from "@mui/material/CircularProgress";
import CustomerAdd from "./components/CustomerAdd";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: "",
      completed: 0,
    };
  }
  stateRefresh = () => {
    this.setState({
      customer: "",
      completed: 0,
    });
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  };
  progress = () => {
    let { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 2 });
  };
  componentDidMount() {
    this.timer = setInterval(this.progress, 200);

    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }
  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };
  render() {
    return (
      <div>
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
              {this.state.customers ? (
                this.state.customers.map((c) => {
                  return (
                    <Customer
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.namez}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                    />
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress
                      sx={{ marginTop: 2 }}
                      variant="determinate"
                      value={this.state.completed}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh} />
      </div>
    );
  }
}
export default App;
