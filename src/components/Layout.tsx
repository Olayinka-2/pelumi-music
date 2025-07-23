import { Outlet, NavLink } from "react-router-dom";
import FooterSection from "./Footer";
import {HashLink} from "react-router-hash-link";
import ScrollToTop from "./ScrollToTop";
import profile from "../asset/profile.png";


const NavBar:React.FC = () => {


  return (
    <>
        <ScrollToTop />
      <nav className="navbar navbar-expand-md sticky-top custom-navbar bg-text-dark py-3">
        <div className="container-md">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img src={profile} alt="brand logo" className="img-fluid" style={{"maxWidth": "15rem", "transition": "maxWidth .3s ease"}} />
        </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/music" className="text-white nav-link">Music</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/video" className="text-white nav-link">Videos</NavLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/about" className="nav-link text-white">About</HashLink>
              </li>

              <li className="nav-item">
                <HashLink smooth to="#contact" className="text-white nav-link">Contact</HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>

      <footer id="contact">
        <FooterSection />
    </footer>
    </>
  )
}

export default NavBar;