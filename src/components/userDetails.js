import React, { Component } from "react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/userDetailsta", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <div>
        <b>
        Nombre:<h1>{this.state.userData.fname}</h1>
        Lugar de residencia:<h1>{this.state.userData.fname}</h1>
        Correo Electronico: <h1>{this.state.userData.email}</h1>
        </b>

      </div>
    );
  }
}

// linkea perfecto //