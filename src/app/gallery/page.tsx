import GalleryEntry from "@/components/gallery/galleryEntry";
import { galleryImages } from "@/data/galleryEntryInfo"

const GalleryPage = () => {
  return (
    <div>
      Gallery
      <GalleryEntry images={galleryImages}/>
    </div>
  );
};

export default GalleryPage;
