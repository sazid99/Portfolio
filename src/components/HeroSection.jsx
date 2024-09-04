import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div id="full-screen">
        {/* first item */}
        <div id="first-item" className="three-items">
          <h1>
            Hey there! I am SAZID <br /> Are you <br /> looking for <br />{" "}
            RESPONSIVE <br /> WEBSITES & WEB APP <br /> Within an affordable
            budget?
          </h1>
          <p>
            You have come to the right place! With a passion for crafting sleek,
            responsive, and user-friendly websites, I bring your ideas to life
            on the web. Whether you need a personal blog, an e-commerce
            platform, or a dynamic business site, I deliver high-quality
            solutions tailored to your needs—without breaking the bank. Let us
            build something amazing together, all within your budget!
          </p>
          <div id="hire-resume">
            <a href="#">
              <button id="hirebtn" className="hire-resume-btn">
                Hire Now
              </button>
            </a>
            <a href="#">
              <button id="resumebtn" className="hire-resume-btn">
                <i className="fa-solid fa-download"></i> Download Resume
              </button>
            </a>
          </div>
        </div>
        {/* second item */}
        <div id="second-item" className="three-items">
          <div className="bounce-items">
            <i id="bounce-html" className="fa-brands fa-html5"></i>
            <i id="bounce-css" className="fa-brands fa-css3-alt"></i>
            <i id="bounce-js" className="fa-brands fa-js"></i>
            <i id="bounce-react" className="fa-brands fa-react"></i>
          </div>
        </div>
        {/* third item */}
        <div id="third-item" className="three-items">
          <img
            src="https://i.postimg.cc/Fzdv7Wrn/1706448605748-removebg-preview.png"
            alt="#"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
