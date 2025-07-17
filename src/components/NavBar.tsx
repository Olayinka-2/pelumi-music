import { useRef, useEffect } from "react";

const NavBar:React.FC = () => {

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 20) {
          navRef.current.classList.add('scrolled');
        } else {
          navRef.current.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top custom-navbar" ref={navRef}>
      <div className="container-md">
        <a className="navbar-brand text-white fw-bold fs-4 ls-wide" href="#">Adeleke Pelumi</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end align-center" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item p-1">
              <a className="nav-link text-white px-3 rounded fw-semibold" href="#">My Music</a>
            </li>
            <li className="nav-item p-1">
              <a className="nav-link text-white px-3 rounded fw-semibold" href="#">My Videos</a>
            </li>
            <li className="nav-item p-1">
              <a className="nav-link text-white px-3 rounded fw-semibold" href="#">About me</a>
            </li>
            <li className="nav-item p-1">
              <a className="nav-link text-white px-3 rounded fw-semibold" href="#">Contact me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar;