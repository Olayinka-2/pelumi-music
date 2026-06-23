"use client";

import { useState } from "react";
import Image from "next/image";
import { deleteSong } from "../../action";
import { musicTypes } from "@/app/(Users)/types/music";

export default function SongList({ songs }: { songs: musicTypes[] }) {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this song? This cannot be undone.")) return;

    setDeletingId(id);
    const result = await deleteSong(id);

    if (!result.success) {
      alert(result.error ?? "Failed to delete song.");
    }

    setDeletingId(null);
  };

  if (songs.length === 0) {
    return <p className="text-gray-500">No songs uploaded yet.</p>;
  }

  return (
    <ul className="space-y-3">
      {songs.map((song) => (
        <li
          key={song.id}
          className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm"
        >
          <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
            {song.cover_url && (
              <Image src={song.cover_url} alt={song.title} fill className="object-cover" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-medium text-primary truncate">{song.title}</p>
            <p className="text-sm text-gray-500 truncate">{song.artist_name}</p>
          </div>

          <button
            onClick={() => handleDelete(song.id)}
            disabled={deletingId === song.id}
            className="text-red-500 text-sm font-medium hover:underline disabled:opacity-50"
          >
            {deletingId === song.id ? "Deleting..." : "Delete"}
          </button>
        </li>
      ))}
    </ul>
  );
}