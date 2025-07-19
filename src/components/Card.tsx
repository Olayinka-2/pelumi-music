import { CardItem } from "./Utils/type";
import imageMap from "./Utils/ImageMap";


const Card:React.FC<{cardItems: CardItem}> = ({cardItems}) => {
  return (
    <>
      <div className="card">
                    <img src={imageMap[cardItems.image]} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{cardItems.title}</h5>
                      <p className="card-text">{cardItems.description}</p>
                      <a href={cardItems.link} className="btn btn-text-dark text-accent-bg">Stream</a>
                    </div>
                  </div>
    </>
  )
};

export default Card;
