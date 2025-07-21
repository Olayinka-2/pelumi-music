import profile from "../asset/profile.jpg";
import play from "../asset/icons/play.svg";
import {videoData} from "../data/Data";
import {videoItem} from "../components/Utils/type"
import { useState, useRef } from "react";

declare global {
  interface Window {
    bootstrap: any;
  }
}

const VideoPage:React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<videoItem| null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  function handleClick(video: videoItem) {
    setSelectedVideo(video);

    setTimeout(() => {
      const modalEl = modalRef.current;
      if (modalEl) {
        const bsModal = new window.bootstrap.Modal(modalEl);
        bsModal.show();
      }
    }, 0);
  }

  return (
    <>
    <section>
    <p className="display-5 fw-bold text-center text-text-dark">Videos</p>
    <div className="d-flex flex-wrap justify-content-center gap-4">
    {
      videoData.map((video) => (
        <div key={video.id} className="shadow bg-body rounded">
          <div className="card position-relative" style={{"width": "18rem"} }>
          <img src={play} alt="play icon" className="position-absolute top-50 start-50 translate-middle play-icon" onClick={() => handleClick(video)}/>
            <img src={profile} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{video.title}</h5>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
      </div>
      ))
    }
    </div>

    {
      selectedVideo ?
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content shadow-lg">
            <div className="modal-body p-0">
            <div className="ratio ratio-16x9">
                            <iframe
                              src={selectedVideo!.videoUrl}
                              title={selectedVideo!.title}
                              allowFullScreen
                            ></iframe>
                          </div>
            </div>
          </div>
        </div>
      </div> : ""
    }

    </section>
    </>
  )
}

export default VideoPage;