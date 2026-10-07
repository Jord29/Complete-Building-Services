import { siteConfig } from "@/config/SiteConfig";
import Image from "next/image";

const WorkGallery = () => {
  return (
    <section
      id="work-gallery"
      className="py-12 md:py-16"
      style={{ backgroundColor: siteConfig.brand.primary }}
    >
      <div className="max-w-5xl mx-auto text-center px-4 mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
          {siteConfig.workGallery.headline}
        </h2>
        <p className="text-white/80 text-base md:text-lg">
          {siteConfig.workGallery.caption}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {siteConfig.workGallery.images.map((image, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={image}
                alt={`Roofing project ${index + 1}`}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
