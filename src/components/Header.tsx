const Header:React.FC = () => {
  return (
    <>
      <header className="sticky-top">
          <nav className="navbar navbar-expand-sm bg-primary-bg navbar-primary-bg">
      <div className="container-md">
        <a className="navbar-brand text-white fw-bold fs-4 ls-wide" href="#">Adeleke Pelumi</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end align-center" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item p-1">
              <a className="nav-link text-white px-3 rounded fw-semibold" href="#">Link</a>
            </li>
            <li className="nav-item p-1">
              <a className="nav-link text-white px-3 rounded fw-semibold" href="#">Link</a>
            </li>
            <li className="nav-item p-1">
              <a className="nav-link text-white px-3 rounded fw-semibold" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </header>
    </>
  )
}

export default Header;