import { useRef, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import FooterSection from "./Footer";
import {HashLink} from "react-router-hash-link";
import ScrollToTop from "./ScrollToTop";

const NavBar:React.FC = () => {

  const navRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (navRef.current) {
  //       if (window.scrollY > 20) {
  //         navRef.current.classList.add('scrolled');
  //       } else {
  //         navRef.current.classList.remove('scrolled');
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
        <ScrollToTop />
      <nav className="navbar navbar-expand-md fixed-top custom-navbar bg-text-dark py-3" ref={navRef}>
        <div className="container-md">
        <NavLink to="/" className="text-white nav-link fw-bold fs-4">Adeleke Pelumi</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/music" className="text-white nav-link">My Music</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/video" className="text-white nav-link">My Videos</NavLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/about" className="nav-link text-white">About</HashLink>
              </li>

              <li className="nav-item">
                <HashLink smooth to="/#contact" className="text-white nav-link">Contact Me</HashLink>
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