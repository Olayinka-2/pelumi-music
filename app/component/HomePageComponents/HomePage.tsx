import Link from "next/link";
import Music from "./Music";
import { musicTypes } from "@/app/types/music";

export default function HomePage({
  songs,
  latestSong,
}: {
  songs: musicTypes[];
  latestSong: musicTypes | null;
}) {
  return (
    <main className="min-h-screen bg-background">
      <section
        className="
                  relative
                  bg-linear-to-br
                  from-white
                  via-[#d9d9d9]
                  to-[#e6f0fa]
                  min-h-min
                  max-h-max
                "
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="p-2  rounded inline-block text-xs bg-red-500 text-white font-semibold uppercase tracking-wider">
                New Release
              </span>
              {latestSong && (
                <>
                  <h1 className="text-4xl md:text-5xl font-serif text-accents">
                    {latestSong.artist_name}
                  </h1>

                  <p className="text-lg font-semibold text-gray-700">
                    "{latestSong.title}"
                  </p>
                </>
              )}

              <div className="flex gap-4 pt-4">
                {/* <button className="bg-foreground text-white px-6 py-3 rounded-lg font-medium hover:opacity-90">
            ▶ Play
          </button> */}

                <Link
                  href="/music"
                  className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-foreground/5"
                >
                  Browse Music
                </Link>
              </div>
            </div>

            {/* RIGHT — ABOUT SUMMARY */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 space-y-5 shadow-sm">
              <h2 className="text-2xl font-semibold text-primary">
                About the Minister
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Child of YHWH is a gospel music minister devoted to raising
                Christ-centered sounds that inspire worship, deepen faith, and
                draw hearts closer to God.
              </p>

              <Link
                href="/about"
                className="inline-block text-sm font-medium text-primary underline underline-offset-4 hover:opacity-80"
              >
                See more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section (White Background) */}
      <Music songs={songs} />
    </main>
  );
}
