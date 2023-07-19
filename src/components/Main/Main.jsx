import "./main.css";
import { useClipboard } from "use-clipboard-copy";
import { useState } from "react";

function Main() {
  const [modal, setModal] = useState(false);
  const clipboard = useClipboard();
  const copyModal = () => {
    setModal(true);
    clipboard.copy('441114454822238')
    setTimeout(() => {
      setModal(false);
    }, 2000);
  };
  return (
    <>
      <div className="main">
        <div className="wrapper">
          <img src="./images/smoke2.png" alt="" className="smokeImg" />
          <img src="./images/smoke1.png" alt="" className="smokeImg2" />
          <img src="./images/logo.png" alt="" className="ava" />

          <div className="dashbord">
            <div className={modal ? "notification animNotif" : "notification"}>
              <p>номер картки успішно скопійовано</p>
            </div>
            <a href="https://instagram.com/amy_shop_kharkiv?igshid=MzRlODBiNWFlZA==">
              <div className="button">
                <p>INSTAGRAM</p>
                <img src="./images/inst.png" alt="" className="ico" />
              </div>
            </a>
            <a href="https://t.me/amy_shop_kh">
              <div className="button">
                <p>TELEGRAM</p>
                <img src="./images/tg.png" alt="" className="ico" />
              </div>
            </a>

            <button
              className="buttonCopy"
              onClick={copyModal}
              
            >
              
              <p>Сплатити</p>
              <img src="./images/pay.png" alt="" className="ico" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
