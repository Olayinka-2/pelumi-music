import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import pelumi from "../../assets/logo.png";

const AboutPage = () => {
  return (
    <section className="flex flex-col">
      <div className="bg-card rounded-t-4xl relative mt-30 flex-1 px-5">
        <div className="absolute  left-1/2 -translate-1/2">
          <Image
            src="/image/pelumi.png"
            alt=""
            className="w-40 h-40 object-contain object-center"
            width={100}
            height={100}
          />
        </div>
        <div className="mt-30 flex flex-col gap-3 mx-auto max-w-xl pb-20">
          <p>
            <span className="text-accents font-bold text-lg">
              Pelumi Adeleke
            </span>{" "}
            is a music minister and music producer with a heart that beats for
            the presence of God and the sound of His kingdom. His journey in
            music has always been more than melodies and production, it has been
            a calling. He create music that lifts spirits, stirs faith, and
            draws people into deeper encounters with God.
          </p>
          <p>
            From the stage to the studio, his mission is consistent, to build
            atmospheres where worship becomes a lifestyle and not just a moment.
            Every song he create is crafted with intention, carrying both
            excellence and anointing, so that lives are transformed, healed, and
            aligned with purpose.
          </p>
          <p>
            Whether He is leading worship, producing for other artists, or
            shaping new sounds behind the scenes, his desire is to be a vessel
            God can trust with His sound. He believe music is one of heaven’s
            strongest languages, and He is committed to releasing it with
            purity, creativity and passion.
          </p>
          <p>
            Thank you for connecting. As you engage with the music, you will
            encounter the One who gave me the gift in the first place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
