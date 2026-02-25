import tablingImage from "@/public/gallery/tablingPicture.webp";
import heartMonitor from "@/public/gallery/galleryMeetingsLogo.svg";
import medBottle from "@/public/gallery/medsIcon.svg";
import clipBoard from "@/public/gallery/clipBoardIcon.svg";

export const galleryImages = [
  {
    id: "card-1",
    rightOrient: false,
    title: "General Meetings",
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
    rightOrient: true,
    title: "Workshops",
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
    rightOrient: false,
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
