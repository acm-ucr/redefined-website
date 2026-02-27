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
        textPos: "md:-top-1/5 md:right-1/19 right-1/5 -top-1/16",
        iconPos:
          "md:-top-3/14 md:left-1/20 md:right-auto md:bottom-auto right-1 -bottom-1/25",
      }
    : {
        bgColor: "bg-redefined-rust",
        dropShadow:
          "md:drop-shadow-[15px_10px_0px_#5d5947] drop-shadow-[-8px_5px_0px_#5d5947]",
        textPos: "md:-top-1/5 md:left-1/25 left-1/5 -top-1/16",
        iconPos:
          "md:-top-3/14 md:right-1/14 md:bottom-auto right-1 -bottom-1/25",
      };

  return (
    <div className="relative flex w-full justify-center">
      <p
        className={`bg-redefined-cream font-redefined-chivo text-redefined-olive absolute ${style.textPos} w-8/13 rounded-xl pb-9 text-center text-[6vw] font-semibold tracking-tighter italic md:w-6/12 md:rounded-4xl md:pt-2 md:text-[3.9vw] md:leading-none md:tracking-widest`}
      >
        {title}
      </p>
      <div
        className={`ml-2 flex w-9/12 flex-col justify-evenly gap-6 rounded-2xl px-7 py-12 pt-9 leading-4 md:mr-4 md:ml-0 md:w-14/15 md:flex-row md:gap-0 md:rounded-4xl md:px-[2.5%] md:py-[4%] ${style.bgColor} ${style.dropShadow}`}
      >
        {images.map((image) => (
          <Image
            key={image.id}
            alt={image.alt}
            src={image.src}
            className={`bg-redefined-cream mx-auto aspect-[5/4] w-full max-w-[320px] flex-1 rounded-2xl object-cover p-1 md:w-3/12 md:max-w-[28%] md:rounded-4xl md:p-2`}
          ></Image>
        ))}
      </div>

      <Image
        alt={iconAlt}
        src={iconSrc}
        className={`absolute h-[10%] md:h-auto md:w-[7%] ${style.iconPos}`}
      ></Image>
    </div>
  );
};

export default GalleryCard;
