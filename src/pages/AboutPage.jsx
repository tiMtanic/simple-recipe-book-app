import React from "react";

function AboutPage() {
  return (
    <>
      <div className="recipe-form">
        <div className="recipe-form-header">
          <div className="recipe-header-text">
            <h1> About The Project </h1>
            <p>
              {" "}
              The project is about creating a simple recipe book app to learn
              about React basics including Props, Routing and Forms.
            </p>
          </div>
          <img src="../src/assets/images/cinnamon.png" />
        </div>
        <div id="team-members-container">
          <h2>Team Members</h2>
          <div className="team-member-content">
            <div>
              <h3>Manal</h3>
              <p>GitHub_Link</p>
              <p>LinkedIn_Link</p>
            </div>
            <img src="../src/assets/images/manal.png"/>
          </div>
           <div className="team-member-content">
            <div>
              <h3>Tim</h3>
              <p>GitHub_Link</p>
              <p>LinkedIn_Link</p>
            </div>
            <img src="../src/assets/images/tim.png"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
