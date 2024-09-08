import "./HomePage.css";
// import Carousel from "../components/Carousel";

function HomePage() {
  return (
    <>
      <div id="section-1" className="">
        <div className="container">
          <div className="row">
            <div className="div-col-item div-col-item-1 col-md-12 col-lg-6">
              <div id="first-item" className="three-items">
                <h1 className="pt-4">
                  Hey there! I am SAZID <br /> Are you <br /> looking for <br />
                  RESPONSIVE <br /> WEBSITES & WEB APP <br /> Within an
                  affordable budget?
                </h1>
                <p className="pt-5">
                  You have come to the right place! With a passion for crafting
                  sleek, responsive, and user-friendly websites, I bring your
                  ideas to life on the web. Whether you need a personal blog, an
                  e-commerce platform, or a dynamic business site, I deliver
                  high-quality solutions tailored to your needs—without breaking
                  the bank. Let us build something amazing together, all within
                  your budget!
                </p>
                <div id="hire-resume" className="pt-5">
                  <a href="#" className="p-2">
                    <button id="hirebtn" className="hire-resume-btn">
                      Hire Now
                    </button>
                  </a>
                  <a href="#" className="p-2">
                    <button id="resumebtn" className="hire-resume-btn">
                      <i className="fa-solid fa-download"></i> Download Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Second item  */}
            <div className="div-col-item div-col-item-2 col-sm-4 col-lg-2">
              <div id="second-item" className="three-items">
                <div className="bounce-items">
                  <i id="bounce-html" className="fa-brands fa-html5"></i>
                  <i id="bounce-css" className="fa-brands fa-css3-alt"></i>
                  <i id="bounce-js" className="fa-brands fa-js"></i>
                  <i
                    id="bounce-bootstrap"
                    className="fa-brands fa-bootstrap"
                  ></i>
                  <i id="bounce-react" className="fa-brands fa-react"></i>
                </div>
              </div>
            </div>

            {/* third item */}
            <div className="div-col-item col-sm-8 col-lg-4">
              <div className="col">
                <div className="profile-picture-1 row-6">
                  <div id="third-item" className="profile-picture">
                    <img
                      src="https://i.postimg.cc/13d6HKXM/1706448605748-removebg-preview.png"
                      alt="#"
                    />
                  </div>
                </div>
                <div className="profile-picture-2 row-6 ">
                  <h6>MD MAHMUDUZZAMAN SAZID</h6>
                  <p>
                    Bachelor of Science, Computer Science & Engineering, IUBAT.{" "}
                    <hr />
                    Expert in Website & Web-App Development. <br />
                    Skilled at HTML, CSS, JavaScript, React.js, Bootstrap, Git ,
                    Github
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Carousel/> */}
    </>
  );
}

export default HomePage;
