import { musicData } from "../data/Data";
import Card from "../components/Card";

const MusicPage: React.FC = () => {
  return (
    <section className="position-relative overflow-hidden">
    <div className="position-absolute top-0 start-0 w-100 h-100 video-img-bg"></div>
   <p className="display-5 fw-bold text-center text-text-dark">Music</p>
   <div className="container-md d-flexs">
   {
     musicData.map((cardItem) => (
       <div key={cardItem.id} className="shadow bg-body rounded overflow-hidden">
          <Card cardItems={cardItem} />
     </div>
     ))
   }
   </div>
   </section>

  );
};

export default MusicPage;
