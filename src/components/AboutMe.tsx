import myImage from "../asset/profile.jpg";

const AboutMe:React.FC = () => {
  return (
    <>
      <section id="About-me" className="bg-accent-bg">
        <div className="row justify-content-center g-5">
          <div className="col-lg-6">
            <div className="d-flex justify-content-between align-item-center mb-3">
              <h3>About Me</h3>
              <button className="btn btn-text-dark about-btn fw-semibold">Read More</button>
            </div>
            <div className="ls-1 me-3 fw-semibold">
            A young Josiah Queen, only 9 years old, attended a young adults conference with tens of thousands of believers in Kansas City, accompanied by his parents. Amidst the buzz of the event, he encountered God for the first time, and his life was completely changed. After this event, Josiah recalls having the desire to write and record his own songs.

            On weekends, Josiah would travel with his mother, who was a traveling preacher. He would lead worship alongside these communities of believers and witnessed the powerful impact a song could have. At 18, while working at a car wash, he fervently prayed for a path that would enable him to turn his musical dreams of becoming a songwriter into reality. Josiah felt an undeniable calling to share the songs that he wrote in his bedroom with the world. Social platforms like TikTok, Facebook, and Instagram became his stage, and his music resonated deeply with hearts far and wide. With each upload, a community blossomed, drawn to the authenticity of his verses and the sincerity of his devotion.
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-item-start">
            <img src={myImage} alt="About me Image" className="img-fluid"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe;