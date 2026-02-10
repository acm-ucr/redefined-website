import Image, { StaticImageData } from "next/image";
import heartMonitor from "@/public/gallery/galleryMeetingsLogo.svg";

interface GalleryImageProp {
  src: StaticImageData;
  alt: string;
}

interface GalleryEntryProp {
  images: GalleryImageProp[];
}

const GalleryEntry = ({ images }: GalleryEntryProp) => {
  return (
    <div className="relative m-25 flex w-full justify-center">
      <div className="bg-redefined-rust relative z-10 flex w-10/12 justify-evenly gap-13 rounded-4xl p-13 drop-shadow-[15px_10px_0px_#5d5947]">
        {images.map((image) => (
          <Image
            alt={image.alt}
            src={image.src}
            className="bg-redefined-cream aspect-[5/4] w-3/12 flex-1 rounded-4xl object-cover p-2"
          ></Image>
        ))}
      </div>
      <p className="bg-redefined-cream font-redefined-chivo text-redefined-olive absolute -top-18 left-35 z-0 w-fit rounded-4xl px-7 pt-2 pb-8 text-6xl font-semibold tracking-widest italic">
        General Meetings
      </p>
      <Image
        alt="Picture of heart monitor icon"
        src={heartMonitor}
        className="absolute -top-26 right-34 z-20"
      ></Image>
    </div>
  );
};

export default GalleryEntry;
