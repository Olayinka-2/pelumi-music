import { musicData } from "../data/Data";
import Card from "../components/Card";

const MusicPage:React.FC = () => {
  return (
    <>
      <div className="main-container">
        <div className="bg-accent-bg p-5">
          <div className="container-md">
            <div className="row">
              {
                          musicData.map((cardItem) => (
                            <div className=" col-md-6 col-xl-3" key={cardItem.id}>
                              <Card cardItems = {cardItem}/>
                            </div>
                ))
                          }
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default MusicPage;