import "./Navbar.css";

function Navbar() {
  const color = ["#686D76", "white" , "black"];
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
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
