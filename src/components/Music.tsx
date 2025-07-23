import { musicData } from "../data/Data";
import Card from "../components/Card";

import { NavLink } from "react-router-dom";

const Music: React.FC = () => {
  return (
      <section className="bg-white">
        <div className="container px-3">
        <div  className="d-flex flex-row justify-content-between align-item-center">
            <h2 className="text-text-dark mb-4">MUSIC</h2>
            <NavLink to="/music">
             <button className="btn btn-text-dark align-self-start fw-semibold">SEE MORE</button>
            </NavLink>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="container-md d-flexs">
              {musicData.map((cardItem) => (
                <div key={cardItem.id}>
                  <Card cardItems={cardItem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Music;
