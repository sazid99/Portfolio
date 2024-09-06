import "./Navbar.css";

function Navbar() {
  const color = ["#686D76", "white", "black"];
  const bodyTag = document.querySelector("body");
  var count = 0;

  function changeColor() {
    count++;
    if (count >= color.length) {
      count = 0;
    }
    bodyTag.style.background = color[count];
    bodyTag.style.color = color[count] === "white" ? "black" : "white";
  }

  return (
    <>
      <div id="navbar-container">
        <div id="navbar">
          {/* Navcbar upper part */}
          <div id="contact-page">
            <div id="left-side-options">
              <i id="phone" className="fa-solid fa-phone">
                <a id="phone-a" href="#">
                  {" "}
                  +8801989399577
                </a>
              </i>
              <i id="email" className="fa-solid fa-envelope">
                <a id="email-a" href="#">
                  mahmuduzzamansazid@gmail.com
                </a>
              </i>
              <i
                id="dark-light-mode"
                className="fa-solid fa-circle-half-stroke"
                onClick={changeColor}
              ></i>
            </div>
          </div>

          {/* Navcbar lower part */}
          <div id="detail-page">
            <h1 id="myName">Mahmuduzzaman Sazid</h1>
            <div id="right-info">
              <div id="without-dropdown">
                <a className="right-nav-info" href="#">
                  Service
                </a>
                <a className="right-nav-info" href="#">
                  Projects
                </a>
                <a className="right-nav-info" href="#">
                  Templates
                </a>
                <a className="right-nav-info" href="#">
                  Blog
                </a>
                <a className="right-nav-info" href="#">
                  Contact
                </a>
              </div>
              {/* nav bar toogler... */}
              <nav id="nav-toogler-right" className="navbar fixed-top">
                <div className="container-fluid">
                  <p className="navbar-brand" href="#"></p>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="offcanvas offcanvas-end"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                        Offcanvas
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Link
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
