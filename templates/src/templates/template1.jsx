import React from "react";
import "./template1.css";

const Template1 = () => {
  return (
    <div>
      <div className="page">
        <div className="blocks">
          {/* left block starts */}

          <div className="leftBlock">
            <div className="profile">
              <img src="./images/profile.jpg" alt="" />
            </div>
            <div className="contact leftTagline">Contact</div>
            <div>

              <div className="contactTitle data">Phone Number</div>
              <div className="contactDetails data">123-456-7890</div>
              <div className="contactTitle data">Email</div>
              <div className="contactDetails data">abc@gmail.com</div>
              <div className="contactTitle data">Address</div>
              <div className="contactDetails data">abc state, any city</div>
            </div>
            <div className="education leftTagline">Education</div>
            <div className="expertise leftTagline">Expertise</div>
            <div className="language leftTagline">Language</div>

          </div>

          {/* left block starts */}

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
            <div>
              <div className="ProjectName">Project Name</div>
              <div className="ProjectDate">MONTH 20XX - PRESENT</div>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            </div>
            <div>
              <div className="ProjectName">Project Name</div>
              <div className="ProjectDate">MONTH 20XX - MONTH 20XX</div>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
