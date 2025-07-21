import { musicData } from "../data/Data";
import Card from "../components/Card";

const MusicPage: React.FC = () => {
  return (
    <div className="main-container">
      <div className="bg-accent-bg py-5">
        <div className="container">
          <h2 className="text-center text-white mb-4">My Music</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {musicData.map((cardItem) => (
              <div key={cardItem.id} className="shadow bg-body rounded">
                <Card cardItems={cardItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
