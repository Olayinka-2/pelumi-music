import { getSongs } from "@/lib/queries/getSongs";
import MusicGrid from "../component/music/MusicGrid";

const MusicPage = async () => {
  const songs = await getSongs();

  return (
    <section className="max-w-6xl mx-auto px-6 pb-16 py-8">
      {/* Header */}
      <div className="text-center  mb-8">
        <h1 className="text-3xl font-bold text-accent">Track List</h1>
        <p className="text-muted mt-2">Check out my song list</p>
      </div>

      {/* Music List */}
      {<MusicGrid songs={songs} />}
    </section>
  );
};

export default MusicPage;
