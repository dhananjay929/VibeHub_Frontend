import React from "react";

const About = () => {
  return (
    <div className="ab">
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item aboutcon" >
    <h2 className="accordion-header ">
      <button className="accordion-button collapsed abouthead" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      About VibeHub💙
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">VibeHub  is a vibrant and creative social media platform designed to empower individuals to share their thoughts, ideas, and experiences in a unique way. With a focus on meaningful  insights. VibeHub provides a dynamic space for expressing yourself through titles, descriptions, and tags. At VibeHub, we believe that every thought has the power to inspire, educate, or resonate with others. Whether you have a short story to tell, a profound idea to discuss, or simply want to share your experiences, our platform offers you the freedom to craft your thoughts with care.</div>
    </div>
  </div>
  
  <div className="accordion-item aboutcon">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed abouthead" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       App Description 
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">VibeHub is a wonderful creation where you can share your thoughts in the form of Title, Description and tags. Our VibeHub automatically detects the time of posting any post and the author who is writing the post. This app includes features like wrting post, editing post, deleting post and its obvious you can read the post . You can see what everyone is sharing . So Enjoy and share vibes on VibeHub</div>
    </div>
  </div>
  <div className="accordion-item aboutcon">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed abouthead" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Contact Information
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Make sure to connect with us on : <br /><a href="https://www.instagram.com/dhananjay293912/" target="_blank">Click to connect with VibeHub on Instagram : Instagram </a><br /> <a href="https://www.linkedin.com/in/dhananjaykjcs929/" target="_blank">Click to connect with VibeHub on Linkedin : Linkedin</a></div>
    </div>
  </div>

  <div className="accordion-item aboutcon">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed abouthead" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        Share Feedback
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Your feedback is a great blessings for us to improve and move ahead.Feel free to share any feedback, we would love to see your feedback and improve our user experience for you.
      Share your feedback by droping a mail on : <code>dhananjaykjcs@gmail.com</code> or ypou can also mail us on <code>itsdj91912@gmail.com</code></div>
    </div>
  </div>
</div>
    </div>
  );
};

export default About;
