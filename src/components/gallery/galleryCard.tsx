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
          "md:drop-shadow-[15px_10px_0px_#9e4325] drop-shadow-[-8px_5px_0px_#9e4325]",
        textPos: "md:-top-18 md:right-16 -top-7",
        iconPos:
          "md:-top-24 md:left-25 md:right-auto md:bottom-auto right-9 -bottom-4",
      }
    : {
        bgColor: "bg-redefined-rust",
        dropShadow:
          "md:drop-shadow-[15px_10px_0px_#5d5947] drop-shadow-[-8px_5px_0px_#5d5947]",
        textPos: "md:-top-18 md:left-17 -top-7",
        iconPos: "md:-top-26 md:right-15 md:bottom-auto right-9 -bottom-4",
      };

  return (
    <div className="relative flex w-full justify-center">
      <p
        className={`bg-redefined-cream font-redefined-chivo text-redefined-olive absolute ${style.textPos} w-8/13 rounded-2xl pt-1 pb-8 text-center text-base font-semibold tracking-tighter italic md:w-6/12 md:rounded-4xl md:pt-2 md:text-6xl md:tracking-widest`}
      >
        {title}
      </p>
      <div
        className={`flex w-9/12 flex-col justify-evenly gap-6 rounded-4xl px-7 py-14 pt-9 leading-4 md:w-14/15 md:flex-row md:gap-13 md:p-14 ${style.bgColor} ${style.dropShadow}`}
      >
        {images.map((image) => (
          <Image
            key={image.id}
            alt={image.alt}
            src={image.src}
            className={`bg-redefined-cream mx-auto aspect-[5/4] w-full max-w-[320px] flex-1 rounded-2xl object-cover p-1 md:w-3/12 md:rounded-4xl md:p-2`}
          ></Image>
        ))}
      </div>

      <Image
        alt={iconAlt}
        src={iconSrc}
        className={`absolute h-1/10 w-auto md:h-auto ${style.iconPos}`}
      ></Image>
    </div>
  );
};

export default GalleryCard;
