import { React, useState} from 'react'
import Popup from "./Popup.jsx"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [type, setType] = useState({
    alpha:"password",
    icon:"fa-regular fa-eye"
  });
// ********************************
const [name, setName] = useState('');
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const handleSignUp = async (e) => {
    try {
      // console.log(JSON.stringify({ name,email,password }))
      e.preventDefault();
      const response = await fetch('https://vibe-hub-backend.vercel.app/api/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify( { name,email,password } )    });

      const data = await response.json();
      if (response.status===201) {
        setPopupMessage("SignUp Succesfull ! Please Login to proceed now.");
        setShowPopup(true);
      }
      else 
      {
        // console.log(data)
        setPopupMessage(data.error) ;
        setShowPopup(true);
      }
      // console.log(data); // Handle response from the server
    } catch (error) {
      setPopupMessage("Internal Server Error")
       setShowPopup(true)
      console.error('Error:', error);
    }
  };
  const closePopup = () => {
    setShowPopup(false);
    if(popupMessage==="SignUp Succesfull ! Please Login to proceed now."){
      navigate("/login");
    }
  };

  
  return (
    <>
     <div className="page">
     <form className='logform bg-dark' onSubmit={handleSignUp}>
   <h2 className='text-center'>Signup</h2><br />

   <div className="mb-3">
    <label  className="form-label">Name </label>
    <input type="text" className="form-control"placeholder='Your Good Name' value={name} onChange={(e) => setName(e.target.value)} required/>
    
  </div>

  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <div style={{display:"flex", alignItems:"center"}}>
    <input type={type.alpha} className="form-control"  value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required/>
    <i className={type.icon}  style={{paddingLeft:"5px",cursor:"pointer"}} onClick={()=>{type.alpha==="password"?setType({
    alpha:"text",
    icon:"fa-regular fa-eye-slash"
  }):setType({
    alpha:"password",
    icon:"fa-regular fa-eye"
  })}}></i></div>

  </div><br />
  
  <button type="submit" className="btn butt" >Signup</button>
 {/* <p className='text-center' style={{fontSize:"12px", display:"flex", justifyContent:"center"}}>Already a member?  <p style={{cursor:"pointer"}} onClick={()=>{navigate("/login")}}> Sign in</p></p>     */}
</form>

{showPopup && <Popup message={popupMessage} onClose={closePopup} />}

</div>
    </>
  )
}

export default Signup