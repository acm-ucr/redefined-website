import GalleryEntry from "@/components/gallery/galleryEntry";
import { galleryImages } from "@/data/galleryEntryInfo";
import GalleryHeader from "@/components/gallery/galleryHeader";

const GalleryPage = () => {
  return (
    <>
      <GalleryHeader/>
      <GalleryEntry images={galleryImages} />
    </>
  );
};
export default GalleryPage;
