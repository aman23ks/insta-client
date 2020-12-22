import React from "react";
import NavBar from "./components/navbar";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Screens/home";
import Signin from "./components/Screens/signin";
import Signup from "./components/Screens/signup";
import Profile from "./components/Screens/profile";
import CreatePost from "./components/Screens/createPost";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
    </BrowserRouter>
  );
}

export default App;
