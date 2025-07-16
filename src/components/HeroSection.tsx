import myImage from './asset/profile.jpg';

const HeroSection:React.FC = () => {
  return (
    <>
      <div className="container-md">
      <div className="row justify-content-center align-item-center">
        <div className="col-md-5 text-center d-none d-md-block">
          <img  src={myImage} alt="profile image" className="img-fluid img-height" />
        </div>
        <div className="col-md-5 text-center py-4">
          <div className='text-white'>
            <p className="display-2 fw-bold">Welcome</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo consectetur voluptates eius omnis similique, voluptas quasi quae expedita iste ut enim recusandae quidem, odit non repellendus cupiditate illum quisquam iure?</p>
            <div className="ratio ratio-16x9">
              <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/Z4ZL8aU-bAM"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default HeroSection;