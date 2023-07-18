import "./main.css";
import { useState } from "react";

function Main() {
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <img src="./images/smoke2.png" alt="" className="smokeImg"/>
          <img src="./images/smoke1.png" alt="" className="smokeImg2"/>
          <img src="./images/logo.JPG" alt="" className="ava" />

          <div className="dashbord">
            <a href="https://forms.gle/niy4LEhAn54ieree6">
              <div className="button">
                <p>INSTAGRAM</p>
                <img src="./images/icon1.png" alt="" className="ico" />
              </div>
            </a>
            <a href="https://github.com/GoodEgUY">
              <div className="button">
                <p>TELEGRAM</p>
                <img src="./images/icon1.png" alt="" className="ico" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ilya-pugachev-82b28a238/">
              <div className="button">
                <p>441114454822238</p>
                <img src="./images/icon1.png" alt="" className="ico" />
              </div>
            </a>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
