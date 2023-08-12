import React, {useContext} from "react";
import { Navigate } from "react-router-dom"; 
import "./App.css";
import About from "./components/About";
import Homescreen from "./components/Homescreen";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Writepost from "./components/Writepost";
import { AuthContext } from "./AuthContext"; // Import the AuthProvider


function App() {
  const { authenticated } = useContext(AuthContext); // Get authenticated status from context


  return (
    <>
      <Router>

        <Navbar />
        
        <Routes>
        <Route exact path='/' element={<Signup/>}/>
        </Routes>

        <Routes>
        <Route exact path='/login' element={<Login/>}/>
        </Routes>
        
        <Routes>
        <Route exact path='/home' element={authenticated ? <Homescreen/> : <Navigate to="/login" />}/>
        </Routes>

        <Routes>
        <Route exact path='/about' element={authenticated ? <About/> : <Navigate to="/login" />}/>
        </Routes>

        <Routes>
        <Route exact path='/write' element={authenticated ? <Writepost/> : <Navigate to="/login" />}/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
