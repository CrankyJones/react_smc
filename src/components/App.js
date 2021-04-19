import React from "react";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../index.css';
import PostList from "./PostList";
import Home from "./Home";
// import Profile from "./Profile";
// import Post from "./Post";
// import Friends from "./Friends";


function App(){
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/postlist">
          <PostList />
        </Route>
      </Switch>
    </Router>
    );
}




export default App;