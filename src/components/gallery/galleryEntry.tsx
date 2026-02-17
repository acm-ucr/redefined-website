import GalleryCard from "@/components/gallery/galleryCard";
import { galleryImages } from "@/data/galleryEntryInfo";

const GalleryEntry = () => {
  return (
    <div className="flex flex-col items-center p-14">
      <div className="bg-redefined-cream w-11/12 rounded-4xl p-8">
        <div className="bg-redefined-taupe flex flex-col gap-33 rounded-4xl pt-33 pb-18">
          {galleryImages.map(
            ({
              id,
              title,
              bgColor,
              dropShadow,
              textPos,
              iconPos,
              iconAlt,
              iconSrc,
              images,
            }) => (
              <GalleryCard
                key={id}
                title={title}
                bgColor={bgColor}
                dropShadow={dropShadow}
                textPos={textPos}
                iconPos={iconPos}
                iconAlt={iconAlt}
                iconSrc={iconSrc}
                images={images}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryEntry;
