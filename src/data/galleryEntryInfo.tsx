import heartMonitor from "@/public/gallery/galleryMeetingsLogo.svg";
import medBottle from "@/public/gallery/medsIcon.svg";
import clipBoard from "@/public/gallery/clipBoardIcon.svg";
import clinic1 from "@/public/gallery/clinics/clinic1.webp";
import clinic2 from "@/public/gallery/clinics/clinic2.webp";
import clinic3 from "@/public/gallery/clinics/clinic3.webp";
import GM1 from "@/public/gallery/generalMeetings/GM1.webp";
import GM2 from "@/public/gallery/generalMeetings/GM2.webp";
import GM3 from "@/public/gallery/generalMeetings/GM3.webp";
import workshop1 from "@/public/gallery/workshops/workshop1.webp";
import workshop2 from "@/public/gallery/workshops/workshop2.webp";
import workshop3 from "@/public/gallery/workshops/workshop3.webp";

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
        src: GM1,
        alt: "General Meeting image 1",
      },
      {
        id: "card-1-img-2",
        src: GM2,
        alt: "General Meeting image 2",
      },
      {
        id: "card-1-img-3",
        src: GM3,
        alt: "General Meeting image 3",
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
        src: workshop1,
        alt: "Workshop image 1",
      },
      {
        id: "card-2-img-2",
        src: workshop2,
        alt: "Workshop image 2",
      },
      {
        id: "card-2-img-3",
        src: workshop3,
        alt: "Workshop image 3",
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
        src: clinic1,
        alt: "Clinic image 1",
      },
      {
        id: "card-3-img-2",
        src: clinic2,
        alt: "Clinic image 2",
      },
      {
        id: "card-3-img-3",
        src: clinic3,
        alt: "Clinic image 3",
      },
    ],
  },
];
