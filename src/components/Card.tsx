import { CardItem } from "./Utils/type";
import imageMap from "./Utils/ImageMap";


const Card:React.FC<{cardItems: CardItem}> = ({cardItems}) => {
  return (
    <>
      <div className="card small-img">
                    <img src={imageMap[cardItems.image]} className="card-img-top" alt="..."
                      style={{ maxHeight: "280px", objectFit: "cover" }}/>
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
