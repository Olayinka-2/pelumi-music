import { musicData } from "../data/Data";
import Card from "../components/Card";

const Music: React.FC = () => {
  return (
      <section className="bg-white">
        <div className="container px-3">
          <h2 className="text-center text-text-dark mb-4">My Music</h2>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex flex-wrap justify-content-center gap-3">
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
