import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <div className="container container-fluid">
          <a className="navbar-brand" href="#">
            <span id="nav-logo">
              <i className="fa-brands fa-slack"></i>
            </span>
            <span id="nav-logo-s">S</span>
            <span id="nav-logo-name">azid</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Skills
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        App Development
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Projects
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Live Projects
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Themes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Templates
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Review
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>

              <ul className="nav mt-5 d-lg-none">
                <li className="nav-item">
                  <a className="nav-link" aria-label="Whatsapp" href="https://api.whatsapp.com/send/?phone=8801989399577" target="_self">
                    <i className="fa-brands fa-whatsapp contact-icon whatsapp"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-label="Linkedin" href="https://www.linkedin.com/in/mahmuduzzaman-sazid" target="_self">
                    <i className="fa-brands fa-linkedin contact-icon linkedin"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-label="Facebook" href="https://www.facebook.com/mahmuduzzaman.sazid" target="_self">
                    <i className="fa-brands fa-facebook contact-icon facebook"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-label="Twitter" href="#">
                    <i className="fa-brands fa-twitter contact-icon twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-label="Instagram" href="https://www.instagram.com/@mahmuduzzamansazid" target="_self">
                    <i className="fa-brands fa-instagram contact-icon instagram"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-label="Youtube" href="https://www.youtube.com/@mahmuduzzamansazid" target="_self">
                    <i className="fa-brands fa-youtube contact-icon youtube"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-label="Github" href="https://github.com/sazid99" target="_self">
                    <i className="fa-brands fa-github contact-icon github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
