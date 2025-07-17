import myImage from "../asset/profile.jpg";

const Music:React.FC = () => {
  return (
    <>
      <section id="music-section">
        <div>
          <div  className="d-flex flex-row justify-content-between align-item-center">
            <h2 className="text-text-dark mb-4">MY MUSIC</h2>
            <button className="btn btn-text-dark align-self-start fw-semibold">SEE MORE</button>
          </div>
          <div>
          <div className="row g-2">

            <div className=" col-md-6 col-xl-3">
              <div className="card">
                <img src={myImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-text-dark text-accent-bg">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-3">
              <div className="card">
                <img src={myImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-text-dark text-accent-bg">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-3">
              <div className="card">
                <img src={myImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-text-dark text-accent-bg">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-3">
              <div className="card">
                <img src={myImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-text-dark text-accent-bg">Go somewhere</a>
                </div>
              </div>
            </div>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Music;