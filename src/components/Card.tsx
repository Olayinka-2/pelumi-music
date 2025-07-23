import { CardItem } from "./Utils/type";
import {musicImageMap} from "./Utils/ImageMap";


const Card:React.FC<{cardItems: CardItem}> = ({cardItems}) => {
  return (
    <>
      <div className="card">
        <div className="vImg-container">
          <img src={musicImageMap[cardItems.image]} className="img-fluid" alt="..."/>
        </div>
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
