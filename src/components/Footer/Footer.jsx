import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_section">
      <div className="d-flex justify-content-between align-items-center px-5 py-2 text-light flex-wrap">
        <div className="p-2">
          <h2 className="text-success fw-bold">LuiGi</h2>
          <p>Delicious food and much more.</p>
        </div>

        <div className="p-2 fs-2 d-flex gap-1 ">
          <Link to="#">
            <FaSquareFacebook className="icon" />
          </Link>

          <Link to="#">
            <FaSquareInstagram className="icon" />
          </Link>

          <Link to="#">
            <FaSquareXTwitter className="icon" />
          </Link>
        </div>
      </div>

      <div className="d-flex w-100  px-2 justify-content-around gap-5 py-2 flex-wrap text-light">
        <div>
          <h4>Rewards</h4>
          <p>Best Restaurant 2017</p>
          <p>Best Restaurant 2019</p>
          <p>Best Service 2021</p>
        </div>

        <div>
          <h4>Recognitions</h4>
          <p>Best Best Tiramisu in London</p>
          <p>Best Italian Cuisine 2021</p>
          <p>Top 5 On Restaurant Guru</p>
        </div>

        <div>
          <h4>Lorem, ipsum.</h4>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
