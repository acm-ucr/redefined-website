import GalleryEntry from "@/components/gallery/galleryEntry";
import { galleryImages } from "@/data/galleryEntryInfo";

const GalleryPage = () => {
  return (
    <>
      <GalleryEntry images={galleryImages} />
    </>
  );
};
export default GalleryPage;
