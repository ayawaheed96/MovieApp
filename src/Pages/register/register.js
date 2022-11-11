import { useState } from "react";

const Register = () => {
  const [regUser, setRegUser] = useState({
    name: "",
    email: "",
    usrName: "",
    password: "",
    confirmP: "",
  });
  const [errors, setErrors] = useState({
    nameError: null,
    emailError: null,
    userError: null,
    passError: null,
    confirmError: null,
  });
  const mailReg =
    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;
  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChanges = (e) => {
    //*******************name*******************
    if (e.target.name === "name") {
      setRegUser({ ...regUser, name: e.target.value });
      if (e.target.value.length === 0) {
        setErrors({ ...errors, nameError: "This field is required" });
      } else {
        setErrors({
          ...errors,
          nameError: null,
        });
      }
    }
    //****************Email */
    else if (e.target.name === "email") {
      setRegUser({ ...regUser, email: e.target.value });
      if (e.target.value.match(mailReg) == null) {
        setErrors({
          ...errors,
          emailError: "Please Enter a valid Email",
        });
      } else {
        setErrors({
          ...errors,
          emailError: null,
        });
      }

      if (e.target.value.length === 0) {
        setErrors({ ...errors, emailError: "This field is required" });
      }
    }
    //****************userName */
    else if (e.target.name === "userName") {
      setRegUser({ ...regUser, usrName: e.target.value });
      if (e.target.value.match(/^[a-zA-Z0-9]*$/gm) == null) {
        setErrors({
          ...errors,
          userError: "please enter a valid username without spaces!",
        });
      } else {
        setErrors({
          ...errors,
          userError: null,
        });
      }
      if (e.target.value.length === 0) {
        setErrors({ ...errors, userError: "This field is required" });
      }
    }
    //*****************Password */
    else if (e.target.name === "password") {
      setRegUser({ ...regUser, password: e.target.value });
      if (e.target.value.match(strongRegex) == null) {
        console.log(e.target.value.match(strongRegex));
        setErrors({
          ...errors,
          passError:
            "weak Password! you should enter at least 8 character contain special character",
        });
      } else {
        setErrors({
          ...errors,
          passError: null,
        });
      }
      if (e.target.value.length === 0) {
        setErrors({ ...errors, passError: "This field is required" });
      }
    }
    //**************confirm Pass */
    else if (e.target.name === "confirm") {
      setRegUser({ ...regUser, confirmP: e.target.value });
      //console.log(regUser.password,e.target.value)
      if (e.target.value !== regUser.password) {
        setErrors({ ...errors, confirmError: "Error! Not matched..try agian" });
      } else {
        setErrors({
          ...errors,
          confirmError: null,
        });
      }
      if (e.target.value.length === 0) {
        setErrors({ ...errors, confirmError: "This field is required" });
      }
    }
  };

  return (
    <>
      <form
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
      >
        <div className="container my-5">
          <div className="mb-5">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                name="name"
                className={`form-control ${
                  errors.nameError ? "border-danger" : null
                } shadow-none`}
                value={regUser.name}
                onChange={(event) => {
                  handleChanges(event);
                }}
              />
              <small style={{ color: "red" }}>{errors.nameError}</small>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${
                  errors.emailError ? "border-danger" : null
                } shadow-none`}
                value={regUser.email}
                onChange={(event) => {
                  handleChanges(event);
                }}
              />
              <small style={{ color: "red" }}>{errors.emailError}</small>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1">User Name</label>
              <input
                type="text"
                name="userName"
                className={`form-control ${
                  errors.userError ? "border-danger" : null
                } shadow-none`}
                value={regUser.usrName}
                onChange={(event) => {
                  handleChanges(event);
                }}
              />
              <small style={{ color: "red" }}>{errors.userError}</small>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className={`form-control ${
                  errors.passError ? "border-danger" : null
                } shadow-none`}
                name="password"
                value={regUser.password}
                onChange={(event) => {
                  handleChanges(event);
                }}
              />
              <small style={{ color: "red" }}>{errors.passError}</small>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${
                  errors.confirmError ? "border-danger" : null
                } shadow-none`}
                name="confirm"
                value={regUser.confirmP}
                onChange={(event) => {
                  handleChanges(event);
                }}
              />
              <small style={{ color: "red" }}>{errors.confirmError}</small>
            </div>
          </div>
          <div className="mb-5">
            <button
              type="submit"
              value="submit"
              className="btn col-12 "
              style={{ backgroundColor: "#444", color: "#fff" }}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Register;
