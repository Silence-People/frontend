import { Link } from "react-router-dom";
//Link is used on react instead of <a href> to <Link to>

function Navbar() {
  return (
    <>
      {/* <div classNameName="mt-0 container  sticky-top"> */}
      <nav className="navbar navbar-expand-lg bg-white sticky-top py-8 border">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              style={{ width: "15vw", paddingLeft: "3vw", marginLeft: "7vw" }}
              src="media/images/logo.svg"
              alt="logo"
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse mx-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-lg-0 justify-content-end">
            <li className="nav-item m-2">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link className="nav-link active" aria-current="page" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item m-2">
              <Link className="nav-link active" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item m-2">
              <Link className="nav-link active" to="support">
                Support
              </Link>
            </li>
            <li className="nav-item hamburger m-2">
              <Link className="nav-link " to="#">
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* </div> */}
    </>
  );
}

export default Navbar;
