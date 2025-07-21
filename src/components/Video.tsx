import { videoData } from "../data/Data";


const Video:React.FC = () => {
  return (
    <>
      <section id="video-section" className="bg-text-dark">
        <div className="container-md">
          <div  className="d-flex flex-row justify-content-between align-item-center">
            <h2 className="text-muted-cream mb-4">MY VIDEO</h2>
            <button className="btn btn-muted-cream align-self-start fw-semibold">SEE MORE</button>
          </div>
          <div
            id="videoCarousel"
            className="carousel slide w-100"
            data-bs-ride="carousel"
            style={{ width: "95vw" }}
          >
            <div className="carousel-inner">

              {
                videoData.map((videoItem, index) => (
                  <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={videoItem.id}>
                    <div className="ratio ratio-16x9">
                      <iframe
                        src={videoItem.videoUrl}
                        title={videoItem.title}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))
              }

            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#videoCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#videoCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </section>
    </>
  )
}

export default Video;