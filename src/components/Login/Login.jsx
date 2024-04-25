import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ usersArray, setUsersArray }) => {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  const move = useNavigate();

  
  // const loginCredentials = usersArray.name;
  // const checkLogIn = () => {
  //   if (name === usersArray.name) {
  //     move('/dashboard')
  //   }else{
  //     console.log("nahi mila oh nahi mila")
  //   }
  // }
  const checkLogIn = () => {
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={checkLogIn}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="waves-effect waves-light btn">
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
