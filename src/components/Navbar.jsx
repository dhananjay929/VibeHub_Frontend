import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../App.css"

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignuppage= location.pathname==='/' ;
  const isLoginpage= location.pathname==='/login';
  return (
    <nav className="navbar sticky-top bg-dark-subtle border-bottom border-body " data-bs-theme="dark" >
     
      <h3 >
       
          <div id="navhead">
            VibeHub
            <i className="fa-solid fa-heart p-1"></i>
          </div>
        
      </h3>

      <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
      {(isLoginpage||isSignuppage)?
      
         <>
      
<input type="radio" className="btn-check" name="options" id="option1" autoComplete="on" defaultChecked={isSignuppage} onChange={() => {navigate("/")}}  />
<label className="btn btn-outline-info " htmlFor="option1" >Signup</label>

<input type="radio" className="btn-check" name="options" id="option2" autoComplete="on" checked={isLoginpage} onChange={() => {navigate("/login");}} />
<label className="btn btn-outline-info" htmlFor="option2" >Login</label>

        </>
        :
        <>
        <div className="navitem"><Link to="/home"> <i className="fa-solid fa-house"></i>  </Link></div>
       
        <div className="navitem"><Link to="/about"><i className="fa-regular fa-address-card"></i></Link></div>
       
       <div className="navitem" ><Link to="/"> <i className="fa-solid fa-arrow-right-from-bracket"></i> </Link></div>
      
         </>}
        
      </div>
    </nav>
  
  );
};

export default Navbar;
