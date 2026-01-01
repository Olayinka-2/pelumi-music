"use client";

import { musicTypes } from '@/app/types/music'
import {useRouter} from "next/navigation"
import Image from 'next/image';

const MusicGrid = ({songs}: {songs: musicTypes[]}) => {
  const router = useRouter();
  const handleClick = (song: string) => {
    router.push(song);
  };
  return (
    <div>
      <div className="space-y-6">
        {songs.map((song) => (
          <div
            className="flex
          items-center
          gap-5
          p-5
          bg-card
          rounded-xl
          w-full
          max-w-3xl
          mx-auto
          hover:shadow-md
          transition
        "
            key={song.id}
          >
            {/* Cover */}
            <Image
              src={song.cover_url}
              alt={song.title}
              width={100}
              height={90}
              className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover"
            />

            {/* Info */}
            <div className="flex flex-col flex-1">
              <h2 className="font-semibold text-sm sm:text-lg">{song.title}</h2>
              <p className="text-muted text-xs sm:text-sm">
                {song.featuring
                  ? `${song.artist_name + " ft " + song.featuring}`
                  : `${song.artist_name}`}
              </p>
            </div>

            {/* Action */}
            <button
              className="
            bg-accents
            text-white
            px-3
            sm:px-5
            py-2
            rounded-lg
            text-xs
            sm:text-sm
            font-medium
            hover:opacity-90
            whitespace-nowrap
          "
              onClick={() => handleClick(song.music_url)}
            >
              Stream
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MusicGrid