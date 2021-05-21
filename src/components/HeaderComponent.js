import React, { Component } from 'react'
class Header extends Component {
render() {
return (
        <div className="d-flex flex-column">
          <div className="profile">
            <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
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