import noah from "@/public/board/noahWong.webp";
import koni from "@/public/board/koniMoss.webp";
import charlize from "@/public/board/charlizeMunar.webp";
import alyssa from "@/public/board/alyssaNgo.webp";
import james from "@/public/board/jamesDaluraya.webp";
import { StaticImageData } from "next/image";

export interface boardMember {
  name: string;
  role: string;
  major: string;
  email: string;
  imagePath: StaticImageData;
}

export const boardMembers: boardMember[] = [
  {
    name: "Noah Wong",
    role: "President",
    major: "3rd Year - Biology",
    email: "nwong086@ucr.edu",
    imagePath: noah,
  },
  {
    name: "Koni Moss",
    role: "Vice President",
    major: "3rd Year - Environmental Science",
    email: "kmoss006@ucr.edu",
    imagePath: koni,
  },
  {
    name: "Charlize Munar",
    role: "Treasurer",
    major: "3rd Year - Biology",
    email: "cmuna002@ucr.edu",
    imagePath: charlize,
  },
  {
    name: "Alyssa Ngo",
    role: "Secretary",
    major: "3rd Year - Biology",
    email: "ango094@ucr.edu",
    imagePath: alyssa,
  },
  {
    name: "James Daluraya",
    role: "Director of Outreach",
    major: "3rd Year - Biology",
    email: "rdalu003@ucr.edu",
    imagePath: james,
  },
];
