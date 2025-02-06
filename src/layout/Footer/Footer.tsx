import "./Footer.css";
import twitter from "../../assets/svg/twitter.svg";
import instagram from "../../assets/svg/instagram.svg";
import facebook from "../../assets/svg/facebook.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div id="contacts" className="footer_content">
          <div className="footer_left">
            <h2>
              Sip, Savor, Smile. <span> It’s coffee time!</span>
            </h2>
            <ul className="socials">
              <li>
                <img src={twitter} alt="twitter" />
              </li>
              <li>
                <img src={instagram} alt="instagram" />
              </li>
              <li>
                <img src={facebook} alt="facebook" />
              </li>
            </ul>
          </div>
          <div className="footer_right">
            <h3>Contact us</h3>
            <ul className="contacts">
              <li>8558 Green Rd., LA</li>
              <li>+1 (603) 555-0123</li>
              <li>Mon-Sat: 9:00 AM – 23:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
