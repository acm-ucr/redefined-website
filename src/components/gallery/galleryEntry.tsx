import GalleryCard from "@/components/gallery/galleryCard";
import { galleryImages } from "@/data/galleryEntryInfo";

const GalleryEntry = () => {
  return (
    <div className="bg-redefined-cream rounded-4xl p-6 sm:w-11/12 sm:p-8">
      <div className="bg-redefined-taupe flex flex-col gap-24 rounded-4xl pt-15 pb-9 sm:gap-33 sm:pt-33 sm:pb-18">
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
  );
};

export default GalleryEntry;
