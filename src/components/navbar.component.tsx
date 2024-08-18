import logo from "/public/logo.png";

function NavBar() {
  return (
    <div>
      <div>
        <img className="logo" src={logo} />
      </div>
      <div>
        <p>Home</p>
        <p>Courses</p>
      </div>
    </div>
  );
}

export default NavBar;
