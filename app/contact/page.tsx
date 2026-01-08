import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <section className="min-h-max bg-accents flex items-center justify-center px-6 py-30 md:py-20">
      <div className="bg-background/90 backdrop-blur rounded-4xl w-full max-w-md p-5 md:p-10 shadow-xl border border-border">
        <div className="text-center flex flex-col items-center gap-6 text-foreground">
          {/* Title */}
          <h1 className="uppercase font-bold text-2xl tracking-widest text-accents">
            Contact
          </h1>

          <p className="text-muted text-sm leading-relaxed">
            Reach out on any platform below. Tap to call, send a mail, or
            explore links.
          </p>

          {/* Contact Actions */}
          <div className="w-full flex flex-col gap-4 pt-4">
            {/* Music / Social */}
            <Link
              href="https://li.sten.to/pelumiadeleke"
              target="_blank"
              className="
                w-full text-center rounded-xl
                border border-accents/60
                px-4 py-3 font-medium text-accents
                hover:bg-accents hover:text-background
                transition text-sm md:text-base
              "
            >
              🎧 Music & Social Links
            </Link>

            {/* Email */}
            <Link
              href="mailto:pelumiadeleke0142@gmail.com"
              className="
                w-full text-center rounded-xl text-sm md:text-base
                border border-border
                px-4 py-3 font-medium
                hover:bg-foreground/5
                transition
              "
            >
              📧 pelumiadeleke0142@gmail.com
            </Link>

            {/* Phone */}
            <Link
              href="tel:+2349035809433"
              className="
                w-full text-center rounded-xl text-sm md:text-base
                bg-accents text-background
                px-4 py-3 font-semibold
                hover:opacity-90
                transition
              "
            >
              📞 Call: +234 903 580 9433
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
