import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users/Users";
import { useState } from "react";

function App() {
  const [usersArray, setUsersArray] = useState([]);
  const [loggedUser, setLoggedUser] = useState(false)
  // const usersArray = [];

  return (
    <div id="body">
      <BrowserRouter>
        <Header loggedUser= {loggedUser} setUsersArray={setUsersArray}></Header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <Login usersArray={usersArray} setUsersArray={setUsersArray} setLoggedUser={setLoggedUser} />
              }
            />
            <Route
              path="/signup"
              element={
                <SignUp usersArray={usersArray} setUsersArray={setUsersArray} />
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users usersArray={usersArray}/>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
