import tablingImage from "@/public/gallery/tablingPicture.webp";
import heartMonitor from "@/public/gallery/galleryMeetingsLogo.svg";
import medBottle from "@/public/gallery/medsIcon.svg";
import clipBoard from "@/public/gallery/clipBoardIcon.svg";

export const galleryImages = [
  {
    id: "card-1",
    title: "General Meetings",
    bgColor: "bg-redefined-rust",
    dropShadow: "drop-shadow-[15px_10px_0px_#5d5947]",
    textPos: "-top-18 left-17",
    iconPos: "-top-26 right-15",
    iconSrc: heartMonitor,
    iconAlt: "Icon of heart monitor",
    images: [
      {
        id: "card-1-img-1",
        src: tablingImage,
        alt: "Tabling image 1",
      },
      {
        id: "card-1-img-2",
        src: tablingImage,
        alt: "Tabling image 2",
      },
      {
        id: "card-1-img-3",
        src: tablingImage,
        alt: "Tabling image 3",
      },
    ],
  },

  {
    id: "card-2",
    title: "Workshops",
    bgColor: "bg-redefined-olive",
    dropShadow: "drop-shadow-[15px_10px_0px_#9e4325]",
    textPos: "-top-18 right-16",
    iconPos: "-top-24 left-25",
    iconSrc: medBottle,
    iconAlt: "Icon of medicine bottle",
    images: [
      {
        id: "card-2-img-1",
        src: tablingImage,
        alt: "Tabling image 1",
      },
      {
        id: "card-2-img-2",
        src: tablingImage,
        alt: "Tabling image 2",
      },
      {
        id: "card-2-img-3",
        src: tablingImage,
        alt: "Tabling image 3",
      },
    ],
  },

  {
    id: "card-3",
    title: "Clinics",
    bgColor: "bg-redefined-rust",
    dropShadow: "drop-shadow-[15px_10px_0px_#5d5947]",
    textPos: "-top-18 left-17",
    iconPos: "-top-24 right-15",
    iconSrc: clipBoard,
    iconAlt: "Icon of clipboard",
    images: [
      {
        id: "card-3-img-1",
        src: tablingImage,
        alt: "Tabling image 1",
      },
      {
        id: "card-3-img-2",
        src: tablingImage,
        alt: "Tabling image 2",
      },
      {
        id: "card-3-img-3",
        src: tablingImage,
        alt: "Tabling image 3",
      },
    ],
  },
];
