import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:3000/", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Inicia sesión</h3>

        <div className="mb-3">
          <label>Correo Electronico</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu correo electronico"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese la contraseña"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Recuerdame en este equipo.
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="Ingresar" className="btn btn-primary">
          <a href="/userDetails">
           Ingresar
           </a>
          </button> 
        </div>
        <p className="registrate text-right">
          <a href="/sign-up">¿Eres nuevo? Registrate</a>
        </p>
                
      </form>
    );
  }
}
// el texto del button queda en azul no he logrado el texto dentro del button en blanco, si cierro (</a> ) antes del texto ingresar el link no me da a ninguna parte  //