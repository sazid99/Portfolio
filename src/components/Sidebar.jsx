import "./Sidebar.css";
function Sidebar() {
  return (
    <>
      <div id="sidebar">
        <div id="side-icons">
          <ul id>
            <a href="https://wa.me/8801989399577" target="_blank">
              <i
                style={{
                  color: "#25D366",
                }}
                className="fa-brands fa-whatsapp"
              ></i>
            </a>
            <br />
            <a href="https://www.linkedin.com/in/mahmuduzzaman-sazid/" target="_blank">
              <i
                style={{
                  color: "#0077B5",
                }}
                className="fa-brands fa-linkedin"
              ></i>
            </a>
            <br />
            <a href="">
              <i
                style={{
                  color: "#1DA1F2",
                }}
                className="fa-brands fa-facebook"
              ></i>
            </a>
            <br />
            <a href="#">
              <i
                style={{
                  color: "#E1306C",
                }}
                className="fa-brands fa-twitter"
              ></i>
            </a>
            <br />
            <a href="#">
              <i
                style={{
                  color: "#C13584",
                }}
                className="fa-brands fa-instagram"
              ></i>
            </a>
            <br />
            <a href="#">
              <i
                style={{
                  color: "#FF0000",
                }}
                className="fa-brands fa-youtube"
              ></i>
            </a>
            <br />
            <a href="#">
              <i
                style={{
                  color: "#000000",
                }}
                className="fa-brands fa-github"
              ></i>
            </a>
          </ul>
        </div>

        <div>
          <i id="phone-contact-btn" className="fa-brands fa-nfc-symbol"></i>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
