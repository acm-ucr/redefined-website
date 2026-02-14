import GalleryEntry from "@/components/gallery/galleryEntry";
import { galleryImages } from "@/data/galleryEntryInfo";

const GalleryPage = () => {
  return (
    <div className="flex flex-col items-center">
      Gallery
      <div className="bg-redefined-cream w-11/12 rounded-4xl p-8">
        <div className="bg-redefined-taupe flex flex-col gap-33 rounded-4xl pt-33 pb-18">
          {galleryImages.map(
            ({
              title,
              bgColor,
              dropShadow,
              textPos,
              iconPos,
              iconAlt,
              iconSrc,
              images,
            }) => (
              <GalleryEntry
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

export default GalleryPage;
