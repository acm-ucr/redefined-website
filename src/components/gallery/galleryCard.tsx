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
        dropShadow:
          "sm:drop-shadow-[15px_10px_0px_#9e4325] drop-shadow-[-8px_5px_0px_#9e4325]",
        textPos: "sm:-top-18 sm:right-16 -top-7",
        iconPos:
          "sm:-top-24 sm:left-25 sm:right-auto sm:bottom-auto right-9 -bottom-4",
      }
    : {
        bgColor: "bg-redefined-rust",
        dropShadow:
          "sm:drop-shadow-[15px_10px_0px_#5d5947] drop-shadow-[-8px_5px_0px_#5d5947]",
        textPos: "sm:-top-18 sm:left-17 -top-7",
        iconPos: "sm:-top-26 sm:right-15 sm:bottom-auto right-9 -bottom-4",
      };

  return (
    <div className="relative flex w-full justify-center">
      <p
        className={`bg-redefined-cream font-redefined-chivo text-redefined-olive absolute ${style.textPos} w-8/13 rounded-2xl pt-1 pb-8 text-center text-base font-semibold tracking-tighter italic sm:w-6/12 sm:rounded-4xl sm:pt-2 sm:text-6xl sm:tracking-widest`}
      >
        {title}
      </p>
      <div
        className={`flex w-9/12 flex-col justify-evenly gap-6 rounded-4xl px-7 py-14 pt-9 leading-4 sm:w-14/15 sm:flex-row sm:gap-13 sm:p-14 ${style.bgColor} ${style.dropShadow}`}
      >
        {images.map((image) => (
          <Image
            key={image.id}
            alt={image.alt}
            src={image.src}
            className={`bg-redefined-cream aspect-[5/4] flex-1 rounded-2xl object-cover p-1 sm:w-3/12 sm:rounded-4xl sm:p-2`}
          ></Image>
        ))}
      </div>

      <Image
        alt={iconAlt}
        src={iconSrc}
        className={`absolute h-1/10 w-auto sm:h-auto ${style.iconPos}`}
      ></Image>
    </div>
  );
};

export default GalleryCard;
