import Image from "next/image";
import { siteConfig } from "@/config/SiteConfig";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full min-h-105 md:min-h-125 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={siteConfig.heroImage}
          alt={siteConfig.heroImageAltText}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between  mx-auto px-4 md:px-10 py-10 md:py-16 gap-6">
        <div className="flex-1 flex flex-col gap-5 md:pl-8">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
            {siteConfig.heroSloganPrimary}{" "}
            <span style={{ color: siteConfig.brand.primary }}>
              {siteConfig.locationPrimary}
            </span>
          </h1>

          <p className="text-white/80 text-base md:text-lg max-w-xl">
            {siteConfig.heroDescription}
          </p>

          <ul className="flex flex-col gap-3 -mt-1">
            {[
              "Premium Roof Repair Services",
              "Skilled and Certified Professionals",
              "All Work Backed by Guarantee",
              "Trusted Local Roofers",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-white font-semibold text-base md:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="#quote-form">
              <button
                className="px-6 py-3 rounded text-white font-bold text-base md:text-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: siteConfig.brand.primary }}
              >
                {siteConfig.ctaTextPrimary.toUpperCase()}
              </button>
            </Link>
          </div>

          <p className="text-white/60 text-xs uppercase tracking-widest -mt-2">
            No obligation, just a no-nonsense quote
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
