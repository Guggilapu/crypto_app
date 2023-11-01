import '../css/bootstrap.css';
import '../css/responsive.css';
import '../css/style.css';
/*import'../css/style.css.map';*/
function  About()
{
    return(
<>
  {/* Basic */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/* Mobile Metas */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Site Metas */}
  <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Cryptop</title>
  {/* slider stylesheet */}
  {/* slider stylesheet */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
  />
  {/* bootstrap core css */}
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  {/* fonts style */}
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
    rel="stylesheet"
  />
  {/* Custom styles for this template */}
  <link href="css/style.css" rel="stylesheet" />
  {/* responsive style */}
  <link href="css/responsive.css" rel="stylesheet" />
  <div className="hero_area">
    {/* header section strats */}
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>Cryptop</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item ">
                  <a className="nav-link" href="index.html">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="about.js">
                    {" "}
                    About{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="how.js">
                    {" "}
                    How{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>Wallet</span> <img src="images/wallet.png" alt="" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {" "}
                    Sign Up
                  </a>
                </li>
              </ul>
              <div className="user_option">
                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
  </div>
  {/* about section */}
  <section className="about_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>About Cryptop</h2>
      </div>
      <div className="box">
        <div className="img-box">
          <img src="images/about-img.png" alt="" />
        </div>
        <div className="detail-box">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim
          </p>
          <div className="btn-box">
            <a href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end about section */}
  {/* info section */}
  <section className="info_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="info_contact">
            <div className="info_logo">
              <a href="index.html">
                <span>Cryptop</span>
              </a>
            </div>
            <h5>Contact Us</h5>
            <div>
              <div className="img-box">
                <img src="images/location.png" width="18px" alt="" />
              </div>
              <p>Page when looking at its layou</p>
            </div>
            <div>
              <div className="img-box">
                <img src="images/phone.png" width="18px" alt="" />
              </div>
              <p>+01 1234567890</p>
            </div>
            <div>
              <div className="img-box">
                <img src="images/envelope.png" width="18px" alt="" />
              </div>
              <p>demo@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_info">
            <h5>Invest Money</h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour,
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_links">
            <h5>Useful Links</h5>
            <ul>
              <li>
                <a href="">There are many</a>
              </li>
              <li>
                <a href="">variations of</a>
              </li>
              <li>
                <a href="">passages of</a>
              </li>
              <li>
                <a href="">Lorem Ipsum</a>
              </li>
              <li>
                <a href="">available, but the</a>
              </li>
              <li>
                <a href="">majority have</a>
              </li>
              <li>
                <a href="">suffered</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_form ">
            <h5>Newsletter</h5>
            <form action="">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end info_section */}
  {/* footer section */}
  <section className="container-fluid footer_section">
    <p>
      © 2019 All Rights Reserved By
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </section>
  {/* footer section */}
  {/* owl carousel script
   */}
  {/* end owl carousel script */}
</>
    );
}
export default About;
