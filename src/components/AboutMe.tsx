import myImage from "../asset/musicImages/profile.jpg";
import { NavLink } from "react-router-dom";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="bg-accent-bg py-5">
      <div className="container">
        <div className="row align-items-start gy-4">
          {/* Image First on Small Screens, Text First on Large Screens */}
          <div className="col-12 col-lg-6 order-1">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="text-text-dark">About Me</h3>
              <NavLink to="/about">
                <button className="btn btn-light about-btn fw-semibold">
                  Read More
                </button>
              </NavLink>
            </div>
            <p className="text-text-dark lh-lg fw-semibold">
              <span className="fw-bold">Pelumi Adeleke </span>
              is a passionate gospel minister and visionary creative. He is the founder of Worshipper’s Tribe, Prayer Breeze, and Legendary Soundscape — platforms that equip and stir believers through sound, spirit, and atmosphere. As a singer, songwriter, and producer, Pelumi crafts music that carries God’s presence, speaks truth, and draws hearts closer to the Father. His sound isn’t just heard — it’s deeply felt.
            </p>
          </div>

          <div className="col-12 col-lg-6 order-2 d-flex justify-content-center">
            <img
              src={myImage}
              alt="About me"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
