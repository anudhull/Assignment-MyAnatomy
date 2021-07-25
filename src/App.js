import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Login from './components/screens/Login'
import Signup from './components/screens/Signup'
import About from './components/screens/About'
import Contact from './components/screens/Contact'

function App() {
  return (
    <div className="App">
	<div className="head">
      <h1>Home Expenses Management</h1>
	</div>
	<div>
	<BrowserRouter>
	<NavBar />
	<Route exact path="/">
		<Home />
	</Route>
	<Route path="/profile">
		<Profile />
	</Route>
	<Route path="/login">
		<Login />
	</Route>
	<Route path="/signup">
		<Signup />
	</Route>
	<Route path="/about">
		<About />
	</Route>
	<Route path="/contact">
		<Contact />
	</Route>
	</BrowserRouter>
	</div>
    </div>
  );
}

export default App;
