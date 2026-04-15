import Image from "next/image";
import GalleryCard from "@/components/gallery/galleryCard";
import { galleryImages } from "@/data/galleryEntryInfo";
import pulse from "@/public/pulse.svg";

const GalleryEntry = () => {
  return (
    <div className="bg-redefined-taupe flex w-full flex-col gap-12 overflow-hidden pt-10 md:gap-20 md:pt-20">
      <div className="flex w-full items-center justify-between pl-5 sm:pl-10 lg:pl-20">
        <p className="text-redefined-olive font-redefined-zilla mx-auto flex text-5xl font-bold italic sm:text-7xl md:text-8xl lg:text-9xl">
          GALLERY
        </p>
        <Image src={pulse} alt="Pulse line" className="translate-x-10" />
      </div>

      <div className="px-4 pb-10 md:px-5 md:pb-20 lg:px-20">
        <div className="bg-redefined-cream mx-auto rounded-4xl p-6 md:w-11/12 md:p-8">
          <div className="bg-redefined-taupe flex flex-col gap-32 rounded-4xl pt-16 pb-9 md:gap-32 md:pt-32 md:pb-20 lg:gap-40 xl:gap-48">
            {galleryImages.map(
              ({ title, iconSrc, iconAlt, id, rightOrient, images }) => {
                return (
                  <GalleryCard
                    key={id}
                    title={title}
                    iconSrc={iconSrc}
                    iconAlt={iconAlt}
                    rightOrient={rightOrient}
                    images={images}
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryEntry;
