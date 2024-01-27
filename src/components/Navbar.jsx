import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/luigi/">Home</Link>
      <Link to="/luigi/menu">Menu</Link>
      <Link to="/luigi/about">About</Link>
      <Link to="/luigi/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
