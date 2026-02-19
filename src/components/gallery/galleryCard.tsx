import Image, { StaticImageData } from "next/image";

interface ImageProp {
  id: string;
  src: StaticImageData;
  alt: string;
}

interface GalleryCardProp {
  rightOrient: boolean;

  title: string;
  images: ImageProp[];
  iconSrc: StaticImageData;
  iconAlt: string;
}

const GalleryCard = ({
  title,
  iconSrc,
  iconAlt,
  rightOrient,
  images,
}: GalleryCardProp) => {
  const style = rightOrient
    ? {
        bgColor: "bg-redefined-olive",
        dropShadow: "drop-shadow-[15px_10px_0px_#9e4325]",
        textPos: "-top-18 right-16",
        iconPos: "-top-24 left-25",
      }
    : {
        bgColor: "bg-redefined-rust",
        dropShadow: "drop-shadow-[15px_10px_0px_#5d5947]",
        textPos: "-top-18 left-17",
        iconPos: "-top-26 right-15",
      };

  return (
    <div className="relative flex w-full justify-center">
      <div
        className={`relative z-10 flex w-14/15 justify-evenly gap-13 rounded-4xl p-14 ${style.bgColor} ${style.dropShadow}`}
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
        className={`bg-redefined-cream font-redefined-chivo text-redefined-olive absolute ${style.textPos} z-0 w-6/12 flex-none rounded-4xl pt-2 pb-8 text-center text-6xl font-semibold tracking-widest italic`}
      >
        {title}
      </p>
      <Image
        alt={iconAlt}
        src={iconSrc}
        className={`absolute ${style.iconPos} z-20`}
      ></Image>
    </div>
  );
};

export default GalleryCard;
