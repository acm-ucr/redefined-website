import GalleryCard from "@/components/gallery/galleryCard";
import { galleryImages } from "@/data/galleryEntryInfo";

const GalleryEntry = () => {
  return (
    <div className="bg-redefined-cream w-11/12 rounded-4xl p-8">
      <div className="bg-redefined-taupe flex flex-col gap-33 rounded-4xl pt-33 pb-18">
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
