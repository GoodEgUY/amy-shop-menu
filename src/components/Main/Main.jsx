import "./main.css";
import { useClipboard } from "use-clipboard-copy";
import { useState } from "react";

function Main() {  const [ modal, setModal] = useState(false)
  const clipboard = useClipboard()
  const copyModal = () => {
    setModal(true)
    setTimeout(() => {
      setModal(false)
    }, 2000)
    

  }
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <div className={modal ? "notification animNotif" : "notification"}>
            <p>номер картки успішно скопійовано</p>
          </div>
          <img src="./images/smoke2.png" alt="" className="smokeImg"/>
          <img src="./images/smoke1.png" alt="" className="smokeImg2"/>
          <img src="./images/logo.png" alt="" className="ava" />

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
            
              
              <div className="buttonCopy" onClick={copyModal} onFocus={clipboard.copy}>
               
              <input ref={clipboard.target} value={"441114454822238"} readOnly hidden />
                <p>Сплатити</p>
                <img src="./images/icon1.png" alt="" className="ico" />
              </div>
            

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
