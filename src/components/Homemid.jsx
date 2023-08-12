import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import "../App.css";

const Homemid = () => {
  
  useEffect(() => { fetchFeedData()}, []);
  const [feedData, setFeedData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [editingPost, setEditingPost] = useState(null); // State to hold post being edited
  
  const fetchFeedData = async () => {
    try {
      const response = await fetch("https://vibe-hub-backend.vercel.app/api/feed");
      if (response.ok) {
        const data = await response.json();
        // console.log(data)
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setFeedData(sortedData); // Update state with fetched feed data
      } else {
        console.error("Error fetching feed:", response.statusText);
      }
      } catch (error) {
      console.error("Error fetching feed:", error);
      }
      };
   const handleDelete=async(postId)=>{
        try {

          const response= await fetch("https://vibe-hub-backend.vercel.app/api/delete/:postId", {
    
          method: 'DELETE',
          headers: {'Content-Type': 'application/json' }  ,
          body: JSON.stringify( {postId} ),
          credentials: 'include' });
         
          const data = await response.json();
          if (response.status===200) {
            setFeedData(feedData.filter(post => post._id !== postId));
            setPopupMessage("Post Deleted");
            setShowPopup(true);
          }
          else 
          {
            setPopupMessage(data.error) ;
            setShowPopup(true);
          }
    
        }
        
       catch (error) {
        setPopupMessage("Internal Server Error")
           setShowPopup(true)
          // console.log('Error:',error);
      }}
      const handleEdit=async()=>{
        try {

          const response= await fetch("https://vibe-hub-backend.vercel.app/api/edit/:postId", {
    
          method: 'PUT',
          headers: {'Content-Type': 'application/json' }  ,
          body: JSON.stringify( {
                       postId:editingPost._id,
                       title: document.getElementById('edit-title').value,
                       description: document.getElementById('edit-description').value,
                       tag: document.getElementById('edit-tag').value
                    } ),
          credentials: 'include' });
         
          const data = await response.json();
          // console.log(data)
          if (response.status===200) {
            setFeedData(feedData.map(post => post._id === editingPost?._id ? data : post));



            setPopupMessage("Post edited successfully");
            setShowPopup(true);
          }
          else 
          {
            setPopupMessage(data.error) ;
            setShowPopup(true);
          }
    
        }
        
       catch (error) {
        setPopupMessage("Internal Server Error")
           setShowPopup(true)
          // console.log('Error:',error);
      }}

      const closePopup = () => {
        setShowPopup(false);
      };
      
        return (
            <div id="homemid vstack gap-3">
             {feedData.map((post) => (
              <div key={post._id} className="card p-1" style={{ background: "rgb(248, 217, 177)" , margin:"20px"}} >
                <div id="feed" className="card-body feed">
                  <div className="d-flex mb-3">
                    <h1 className="card-title  me-auto p-2">{post.title}</h1>
                    <i className="fa-solid fa-pen p-4"  style={{ cursor: 'pointer' }} onClick={()=>{setEditingPost(post);}} data-bs-toggle="modal" data-bs-target="#sex"></i> 
                    <i className="fa-regular fa-trash-can p-4" onClick={() => handleDelete(post._id)} style={{ cursor: 'pointer' }}></i>
                  </div><hr />
                  <p className="card-text" style={{fontFamily:"light"}} >#{post.tag}</p>
                  <p className="card-text">{post.description}</p>
          <div className="d-flex justify-content-between"><i>{new Date(post.date).toLocaleString()}</i><i>-{post.author}</i></div>
         
        </div>
        {/* <br /> */}
      </div> 
      ))}
      {showPopup && <Popup message={popupMessage} onClose={closePopup} />}

     { <div
        className="modal fade"
        id="sex"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog overflow-y: auto">
          <div className="modal-content" id="editpop">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit your post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label=""
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="edit-title" className="col-form-label">
                    Your Title :
                  </label>
                  <input type="text" className="form-control" id="edit-title" defaultValue={editingPost?.title}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="edit-description" className="col-form-label">
                    Description :
                  </label>
                  <input type="text" className="form-control" id="edit-description" defaultValue={editingPost?.description}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="edit-tag" className="col-form-label">
                    Tag :
                  </label>
                  <input type="text" className="form-control" id="edit-tag" defaultValue={editingPost?.tag}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleEdit}
                data-bs-dismiss="modal"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>}
        </div>
              
              );
}
export default Homemid;
