import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const SignUp = ({usersArray, setUsersArray}) => {

  let [name, setName] = useState('');
  let [password, setPassword] = useState('');
let move = useNavigate()
const pushData = () => {
  let newUser = {
    name,
    password,
  }
  
  usersArray.push(newUser)
    move('/login');
    console.log(usersArray);
  }


  return (
    <>
    <h1>Sign Up Page</h1>
    <form onSubmit={pushData}>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <input type="password"onChange={(e) => setPassword(e.target.value)}/>
        <button className="waves-effect waves-light btn" type='submit'>Sign Up</button>
    </form>
    </>
  )
}

export default SignUp
