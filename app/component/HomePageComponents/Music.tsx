"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { musicTypes } from "@/app/types/music";

const Music = ({ songs }: { songs: musicTypes[] }) => {
  const router = useRouter();

  return (
    <section className="max-w-7xl mx-auto px-8 py-10 mt-8">
      <h2 className="text-2xl text-center font-semibold text-primary mb-8">
        Featured Worship
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
        {songs.slice(0,4).map((song) => (
          <div className="bg-card p-3 rounded-2xl" key={song.id}>
            <Image
              alt="Pelumi Music image"
              src={song.cover_url}
              width={100}
              height={100}
              className="w-full object-center rounded-xl"
            />
            <div className="flex flex-col mt-3 gap-2">
              <h3 className="font-semibold">{song.title}</h3>
              <p className="text-muted text-sm"> {song.featuring
                  ? `${song.artist_name + " ft " + song.featuring}`
                  : `${song.artist_name}`}</p>
              <button className="cursor-pointer text-sm border border-primary text-primary px-3 py-1 rounded font-medium hover:bg-foreground/5">
                Stream music
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-4 ">
        <button
          onClick={() => router.push("/music")}
          className="py-2 px-4 bg-primary font-medium rounded outline-0 text-background cursor-pointer mt-4 hover:bg-transparent hover:text-primary hover:border hover:border-primary"
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default Music;
