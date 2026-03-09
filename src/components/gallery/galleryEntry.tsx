import GalleryCard from "@/components/gallery/galleryCard";
import { galleryImages } from "@/data/galleryEntryInfo";

const GalleryEntry = () => {
  return (
    <div className="lg::p-20 bg-redefined-taupe md:p-5">
      <div className="bg-redefined-cream mx-auto rounded-4xl p-6 md:w-11/12 md:p-8">
        <div className="bg-redefined-taupe flex flex-col gap-24 rounded-4xl pt-15 pb-9 md:gap-33 md:pt-33 md:pb-18">
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
  );
};

export default GalleryEntry;
