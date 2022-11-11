import { useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passError: "",
  });
//   const [isActive,setActive]=useState(true);
  const handleChanges = (e) => {
    if (e.target.name === "email") {
      const reg =
        /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;

      setUser({ ...user, email: e.target.value });
      if (e.target.value.match(reg) == null) {
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
    else if (e.target.name === "password") {
      setUser({ ...user, password: e.target.value });
      e.target.value.length === 0
        ? setErrors({ ...errors, passError: "This field is required" })
        : e.target.value.length < 8
        ? setErrors({
            ...errors,
            passError: "Weak Password Please enter at least 8 character",
          })
        : setErrors({ ...errors, passError: null });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
//   const toggle=(e)=>{
    
//   }
  

  return (
    <>
      <form
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
      >
        <div className="container my-5">
          <div className="mb-5">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              className={`form-control ${
                errors.emailError ? "border-danger" : null
              } shadow-none`}
              name="email"
              value={user.email}
              onChange={(event) => {
                handleChanges(event);
              }}
            />
            <small style={{ color: "red" }}>{errors.emailError}</small>
          </div>
          <div className="mb-5">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className={`form-control ${
                errors.passError ? "border-danger" : null
              } shadow-none`}
              name="password"
              value={user.password}
              onChange={(event) => {
                handleChanges(event);
              }}
            />
            {/* <FontAwesomeIcon icon={faEye}  className="field-icon" onClick={(e)=>{toggle(e)}} /> */}
            <small style={{ color: "red" }}>{errors.passError}</small>
          </div>
          <div className="mb-5 d-flex justify-content-center">
            <button
              type="submit"
              value="submit"
              className="btn col-12"
              style={{backgroundColor:"#444",color:'#fff'}}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Login;
