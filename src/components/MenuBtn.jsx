import { Link } from "react-router-dom";

const MenuBtn = (props) => {
  return (
    <div>
      <Link to={props.link}>
        <button
          className={` ${props.btnType} btn fw-semibold btn-me`}
          type="button"
        >
          {props.text}
        </button>
      </Link>
    </div>
  );
};

export default MenuBtn;
