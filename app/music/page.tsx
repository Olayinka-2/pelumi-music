import React from "react";

const MusicPage = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-accent">Track List</h1>
        <p className="text-muted mt-2">Check out my song list</p>
      </div>

      {/* Music List */}
      <div className="space-y-6">
        <div
          className="
          flex
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
        >
          {/* Cover */}
          <img
            src="/image/musics/RanMiLowo.jpg"
            alt="Come Back Home cover"
            className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover"
          />

          {/* Info */}
          <div className="flex flex-col flex-1">
            <h2 className="font-semibold text-lg">Come Back Home</h2>
            <p className="text-muted text-sm">Pelumi Adeleke</p>
          </div>

          {/* Action */}
          <button
            className="
            bg-[#062e52]
            text-white
            px-5
            py-2
            rounded-lg
            text-sm
            font-medium
            hover:opacity-90
            whitespace-nowrap
          "
          >
            Stream
          </button>
        </div>
      </div>
    </section>
  );
};

export default MusicPage;
