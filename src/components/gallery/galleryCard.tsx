import Image, { StaticImageData } from "next/image";

interface ImageProp {
  id: string;
  src: StaticImageData;
  alt: string;
}

interface GalleryCardProp {
  title: string;
  bgColor: string;
  dropShadow: string;
  textPos: string;
  iconPos: string;
  iconSrc: StaticImageData;
  iconAlt: string;
  images: ImageProp[];
}

const GalleryCard = ({
  title,
  bgColor,
  dropShadow,
  textPos,
  iconPos,
  iconAlt,
  iconSrc,
  images,
}: GalleryCardProp) => {
  return (
    <div className="relative flex w-full justify-center">
      <div
        className={`relative z-10 flex w-14/15 justify-evenly gap-13 rounded-4xl p-14 ${bgColor} ${dropShadow}`}
      >
        {images.map((image) => (
          <Image
            key={image.id}
            alt={image.alt}
            src={image.src}
            className={`bg-redefined-cream aspect-[5/4] w-3/12 flex-1 rounded-4xl object-cover p-2`}
          ></Image>
        ))}
      </div>
      <p
        className={`bg-redefined-cream font-redefined-chivo text-redefined-olive absolute ${textPos} z-0 w-6/12 flex-none rounded-4xl pt-2 pb-8 text-center text-6xl font-semibold tracking-widest italic`}
      >
        {title}
      </p>
      <Image
        alt={iconAlt}
        src={iconSrc}
        className={`absolute ${iconPos} z-20`}
      ></Image>
    </div>
  );
};

export default GalleryCard;
