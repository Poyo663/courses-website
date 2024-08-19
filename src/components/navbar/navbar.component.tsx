import logo from "/public/logo.png";

import "./navbar.style.css";

function NavBar() {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src={logo} />
      </div>
      <div className="links">
        <p>Home</p>
        <p>Courses</p>
      </div>
    </div>
  );
}

export default NavBar;
