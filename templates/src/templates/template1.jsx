import React from "react";
import style from "./template1.module.css" ;

const Template1 = () => {
  return (
    <div>
      <div className={style.page}>
        <div className={style.blocks}>
          {/* left block starts */}

          <div className={style.leftBlock}>
            <div className={style.profile}>
              <img src="./images/profile.jpg" alt="" />
            </div>
            <div className={`${style.contact} ${style.leftTagline}` }  >Contact</div>
            <div>

              <div className={`${style.contactTitle} ${style.data}`}>Phone Number</div>
              <div className={`${style.contactDetails} ${style.data}`}>123-456-7890</div>
              <div className={`${style.contactTitle} ${style.data}`}>Email</div>
              <div className={`${style.contactDetails} ${style.data}`}>abc@gmail.com</div>
              <div className={`${style.contactTitle} ${style.data}`}>Address</div>
              <div className={`${style.contactDetails} ${style.data}`}>abc state, any city</div>
            </div>
            <div className={`${style.education} ${style.leftTagline}`}>Education</div>
            <div className={`${style.expertise} ${style.leftTagline}`}>Expertise</div>
            <div className={`${style.language} ${style.leftTagline}`}>Language</div>

          </div>

          {/* left block starts */}

          <div className={style.rightBlock}>
            <div className={style.header}>
              <h1>Anupam Bor Boruah</h1>
            </div>
            <div className={`${style.talgilne} ${style.developer}`}>React Developer</div>
            <div className={style.rightText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              itaque odit cum voluptate illum, iusto praesentium laboriosam
              cumque, quod et repellat obcaecati. Vel, ducimus harum.
            </div>
            <div className={`${style.talgilne} ${style.experience}`}>Experience</div>
            <div className={style.rightText}>
              <li className={style.year}>year</li>
              <div>company name | Anywhere st.. any city</div>
              <div className={style.jobPositon}>Job position here</div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              itaque odit cum voluptate illum, iusto praesentium laboriosam
              cumque, quod et repellat obcaecati. Vel, ducimus harum.
            </div>
            <div className={style.rightText}>
              <li className={style.year}>year</li>
              <div>company name | Anywhere st.. any city</div>
              <div className={style.jobPositon}>Job position here</div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              itaque odit cum voluptate illum, iusto praesentium laboriosam
              cumque, quod et repellat obcaecati. Vel, ducimus harum.
            </div>
            <div className={style.rightText}>
              <li className={style.year}>year</li>
              <div>company name | Anywhere st.. any city</div>
              <div className={style.jobPositon}>Job position here</div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              itaque odit cum voluptate illum, iusto praesentium laboriosam
              cumque, quod et repellat obcaecati. Vel, ducimus harum.
            </div>
            <div className={style.talgilne}>Projects</div>
            <div>
              <div className={style.ProjectName}>Project Name</div>
              <div className={style.ProjectDate}>MONTH 20XX - PRESENT</div>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            </div>
            <div>
              <div className={style.ProjectName}>Project Name</div>
              <div className={style.ProjectDate}>MONTH 20XX - MONTH 20XX</div>
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
