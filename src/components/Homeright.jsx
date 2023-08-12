import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Homeright = () => {
  return (
    <>
      {
        <div>
          <div className="sticky-card">
            <div className="card right ">
              <div className="card-body">
                <Link to={"/write"}>
                  <div style={{ color: "white", display: "flex" }}>
                    <i className="fa-regular fa-pen-to-square p-1"></i>
                    &nbsp;&nbsp;
                    <h5 className="card-title"> Write Post ... </h5>
                  </div>
                  <br />
                  <input
                    className="write"
                    placeholder="Write anything you wish !"
                    disabled
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Homeright;
// import React from 'react'
// // import { Link } from 'react-router-dom'

// const Homeright = () => {
//   return (
//     <div >
//       <div class="card " style={{background:"black", color:"white", padding:"10px", margin:"10px"}}>
     
//       <h3>
//     <div class="card-header">

//       Write New Post
//     </div>
//     </h3>
//     <div class="card-body">

//     </div>
//   </div></div>
//   )
// }

// export default Homeright