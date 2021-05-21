import React, { Component } from 'react'
class Header extends Component {
render() {
return (
        <div className="d-flex flex-column">
          <div className="profile">
            <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Akshay Sawant</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="/#" className="twitter"><i className="bx bxl-twitter" /></a>
              <a href="/#" className="facebook"><i className="bx bxl-facebook" /></a>
              <a href="/#" className="instagram"><i className="bx bxl-instagram" /></a>
              <a href="/#" className="google-plus"><i className="bx bxl-skype" /></a>
              <a href="/#" className="linkedin"><i className="bx bxl-linkedin" /></a>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="/#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
              <li><a href="/#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
              <li><a href="/#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
            </ul>
          </nav>
        </div>
)
}
}
export default Header