import React from "react";
import post from "axios";

class CustomerAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      userName: "",
      birthday: "",
      gender: "",
      job: "",
      fileName: "",
    };
  }
  handlerFormsubmit = (e) => {
    e.preventDeFault();
    this.addCustomer().then((response) => {
      console.log(response.data);
    });
  };
  handlerFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.vlaue,
    });
  };
  handlerValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };
  addCustomer = () => {
    const url = "/api/customers";
    const formData = new URLSearchParams();
    formData.append("image", this.state.file);
    formData.append("namez", this.state.userName);
    formData.append("birthday", this.state.birthday);
    formData.append("gender", this.state.gender);
    formData.append("job", this.state.job);
    const config = {
      headers: {
        "content-type": "multipart/form-data", //파일이 포함되어있는 데이터를 서버로 전송할때
        //웹표준에맞는 헤더를 추가해줘야함
      },
    };
    return post.post(url, formData, config);
  };
  render() {
    return (
      <form onSubmit={this.handlerFormsubmit}>
        <h1>고객추가</h1>
        프로필 이미지 :{" "}
        <input
          type="file"
          name="file"
          file={this.state.file}
          value={this.state.fileName}
          onChange={this.handlerFileChange}
        />
        <br />
        이름:
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={this.handlerValueChange}
        />
        <br />
        생년월일:
        <input
          type="text"
          name="birthday"
          value={this.state.birthday}
          onChange={this.handlerValueChange}
        />
        <br />
        성별:
        <input
          type="text"
          name="gender"
          value={this.state.gender}
          onChange={this.handlerValueChange}
        />
        <br />
        직업:
        <input
          type="text"
          name="job"
          value={this.state.job}
          onChange={this.handlerValueChange}
        />
        <br />
        <button type="submit">추가하기</button>
      </form>
    );
  }
}
export default CustomerAdd;
