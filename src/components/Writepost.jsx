import {React, useState }  from "react";
import  {useNavigate} from "react-router-dom";
import Popup from "./Popup.jsx"


const Writepost = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tag, setTag] = useState("")
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    
    const handleWrite=async(e)=>{
        try {
          e.preventDefault();
          const response= await fetch("http://localhost:5000/api/write", {
            
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify( { title,description,tag } ),
            credentials: 'include' });
            const data = await response.json();
            if (response.status===201) {
              setPopupMessage("Posted Successfully !");
              setShowPopup(true);
            }
            else 
            {
              // console.log(data.error)
            setPopupMessage(data.error) ;
            setShowPopup(true);
          }
          
        }
        
        catch (error) {
          console.log(error)
          setPopupMessage("Internal Server Error")
          setShowPopup(true)
      }}
      const closePopup = () => {
        setShowPopup(false);
        if(popupMessage==="Posted Successfully !"){
          navigate("/home");
        }
      };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="post">
          <button type="button" className="btn-close float-end" aria-label="Close" onClick={()=>{navigate('/home')}}></button>
          <form onSubmit={handleWrite}>
            <h1>Write New Post !</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Your Title :
              </label>
              <input
                type="text"
                className="form-control"
                value={title}
                aria-describedby="emailHelp"
                onChange={(e)=>{setTitle(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Description :
              </label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Tag :
              </label>
              <input
                type="text"
                className="form-control"
                value={tag}
                onChange={(e)=>{setTag(e.target.value)}}
                placeholder="Vibes (default)"
              />
            </div>

            <button type="submit" className="btn" style={{background:"rgb(22, 10, 255)", color:"white", width:"100%"}}>
              Post
            </button>
          </form>
        </div>
        {showPopup && <Popup message={popupMessage} onClose={closePopup} />}
      </div>
    </>
  );
};

export default Writepost;
