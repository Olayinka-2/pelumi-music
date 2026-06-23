import { getSongs } from "@/lib/queries/getSongs";
import UploadForm from "./components/UploadForm";
import SongList from "./components/SongList";
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const songs = await getSongs();

  return (
    <div className="min-h-screen bg-background px-6 py-12 max-w-4xl mx-auto space-y-12">
      <div>
        <h1 className="text-3xl font-semibold text-primary">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">Upload new songs and manage existing ones.</p>
      </div>

      <UploadForm />

      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">
          Existing Songs ({songs.length})
        </h2>
        <SongList songs={songs} />
      </div>
    </div>
  );
}