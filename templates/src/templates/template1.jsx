import React from "react";
import "./template1.css";

const Template1 = () => {
  return (
    <div>
      <div className="page">
        <div className="blocks">
          <div className="leftBlock">
            <div className="profile">
              <img src="./images/profile.jpg" alt="" />
            </div>
            <div className="contact">Contact</div>
            <div className="education">Education</div>
            <div className="expertise">Expertise</div>
            <div className="language">Language</div>
          </div>
          <div className="rightBlock">
            <div className="header">
              <h1>Anupam Bor Boruah</h1>
            </div>
            <div className="talgilne developer">React Developer</div>
            <div className="rightText">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              itaque odit cum voluptate illum, iusto praesentium laboriosam
              cumque, quod et repellat obcaecati. Vel, ducimus harum.
            </div>
            <div className="talgilne experience">Experience</div>
            <div className="rightText">
              <li className="year">year</li>
              <div>company name | Anywhere st.. any city</div>
              <div className="jobPositon">Job position here</div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              itaque odit cum voluptate illum, iusto praesentium laboriosam
              cumque, quod et repellat obcaecati. Vel, ducimus harum.
            </div>
            <div className="rightText">
              <li className="year">year</li>
              <div>company name | Anywhere st.. any city</div>
              <div className="jobPositon">Job position here</div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              itaque odit cum voluptate illum, iusto praesentium laboriosam
              cumque, quod et repellat obcaecati. Vel, ducimus harum.
            </div>
            <div className="rightText">
              <li className="year">year</li>
              <div>company name | Anywhere st.. any city</div>
              <div className="jobPositon">Job position here</div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              itaque odit cum voluptate illum, iusto praesentium laboriosam
              cumque, quod et repellat obcaecati. Vel, ducimus harum.
            </div>
            <div className="talgilne projects">Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
