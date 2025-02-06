import "./Mobile.css";
import apple from "../../assets/svg/apple.svg";
import play from "../../assets/svg/play.svg";

export const MobileApp = () => {
  return (
    <section id="mobile-app" className="mobile-app">
      <div className="container">
        <div className="mobile-app-content">
          <div className="mobile-text">
            <h2>
              <span>Download</span> our apps to start ordering
            </h2>
            <p>
              Download the Resource app today and experience the comfort of
              ordering your favorite coffee from wherever you are
            </p>
            <div className="apps-btns">
              <a href="#" className="app-btn">
                <img src={apple} alt="apple" />
                <div className="text_btn">
                  <p>Available on the</p>
                  <p>App Store</p>
                </div>
              </a>
              <a href="#" className="app-btn">
                <img src={play} alt="play" />
                <div className="text_btn">
                  <p>Available on</p>
                  <p>Google Play</p>
                </div>
              </a>
            </div>
          </div>
          <div className="mobile-img"></div>
        </div>
      </div>
    </section>
  );
};
