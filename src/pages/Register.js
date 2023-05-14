import React, { useState } from "react";
import { Link } from "react-router-dom";
import docImg from "../assests/image/do_log.jpg";
import patImg from "../assests/image/pat_log.jpg";
import { Formrow } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [userType, setUserType] = useState("doctor");
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement login/signup functionality based on form data
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-10">Login or Sign Up</h1>
      <div className="flex justify-center items-center mb-5">
        <div
          className="mr-5"
          style={{
            paddingTop: "5px",
            border: `3px solid ${
              userType === "doctor" ? "lightblue" : "white" // for changing border color
            }`,
            borderColor: userType === "doctor" ? "lightblue" : "white",
          }}
          onClick={() => handleUserTypeChange("doctor")}
        >
          <div
            className={`mx-3 cursor-pointer ${
              userType === "doctor" ? "bg-gray-300" : "bg-gray-200"
            }`}
            style={{
              backgroundImage: `url(${docImg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "100px",
              height: "100px",
            }}
          ></div>
          <span className="text-center block">Doctor</span>
        </div>
        <div
          style={{
            border: `3px solid ${
              userType === "patient" ? "lightblue" : "white"
            }`,
            borderColor: userType === "patient" ? "lightblue" : "white",
          }}
          onClick={() => handleUserTypeChange("patient")}
        >
          <div
            className={`mx-3 cursor-pointer ${
              userType === "patient" ? "bg-gray-300" : "bg-gray-200"
            }`}
            style={{
              backgroundImage: `url(${patImg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "100px",
              height: "100px",
            }}
          ></div>
          <span className="text-center block">Patient</span>
        </div>
      </div>
      <form className="w-96" onSubmit={handleSubmit}>
        <Formrow
          type="text"
          name="First name"
          value={values.name}
          handleChange={handleChange}
        ></Formrow>

        <Formrow
          type="lastname"
          name="Last name"
          value={values.name}
          handleChange={handleChange}
        ></Formrow>

        <Formrow
          type="email"
          name="Email"
          value={values.email}
          handleChange={handleChange}
        ></Formrow>

        <Formrow
        type='password'
        name='password'
        value={values.password}
        handleChange={handleChange}
        ></Formrow>
        
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {userType === "doctor" ? "Signin as Doctor" : "Signin as Patient"}
          </button>
          <Link
            to={userType === "doctor" ? "/login" : "/login"}
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
