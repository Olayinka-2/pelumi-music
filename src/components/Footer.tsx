import facebook from "../asset/icons/facebook.svg";
import linkedIn from "../asset/icons/linkedin.svg";
import twitter from "../asset/icons/twitter.svg";
import youtube from "../asset/icons/youtube.svg";


const FooterSection:React.FC = () => {
  return (
    <>
      <section>
        <div className="text-center">
          <h1 className="text-white display-3 fw-semibold">Stay Connected</h1>
          <div>
            <div className="row justify-content-center">
              <div className="d-flex justify-content-center my-5">
                <a>
                  <img src={facebook} alt="facebook logo" />
                </a>
                <a>
                  <img src={linkedIn} alt="linkedin logo" />
                </a>
                <a>
                  <img src={youtube} alt="youtube logo" />
                </a>
                <a>
                  <img src={twitter} alt="twitter logo" />
                </a>
              </div>
              <div className="col col-md-6">
                <form action="#">
                  <p className="fs-3 fw-bold text-white">Subscribe to newsletter</p>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-white mb-3 fw-semibold">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="container text-center">
              <span className="text-white">&copy; 2025 Adeleke Pelumi. All rights reserved.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FooterSection;



