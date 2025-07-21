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
              A young Josiah Queen, only 9 years old, attended a young adults conference
              with tens of thousands of believers in Kansas City, accompanied by his
              parents. Amidst the buzz of the event, he encountered God for the first
              time, and his life was completely changed. After this event, Josiah recalls
              having the desire to write and record his own songs.
              <br /><br />
              On weekends, Josiah would travel with his mother, who was a traveling
              preacher. He would lead worship alongside these communities of believers and
              witnessed the powerful impact a song could have. At 18, while working at a
              car wash, he fervently prayed for a path that would enable him to turn his
              musical dreams into reality. Josiah felt an undeniable calling to share the
              songs that he wrote in his bedroom with the world. Social platforms like
              TikTok, Facebook, and Instagram became his stage, and his music resonated
              deeply. With each upload, a community blossomed, drawn to the authenticity
              of his verses and the sincerity of his devotion.
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
