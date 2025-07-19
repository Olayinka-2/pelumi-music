import { musicData } from "../data/Data";
import Card from "./Card";

const Music:React.FC = () => {

  return (
    <>
      <section id="music-section">
        <div>
          <div  className="d-flex flex-row justify-content-between align-item-center">
            <h2 className="text-text-dark mb-4">MY MUSIC</h2>
            <button className="btn btn-text-dark align-self-start fw-semibold">SEE MORE</button>
          </div>
          <div>
          <div className="row g-2">

            {
              musicData.slice(0, 4).map((cardItem) => (
                <div className=" col-md-6 col-xl-3" key={cardItem.id}>
                  <Card cardItems = {cardItem}/>
                </div>
              ))
            }

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Music;