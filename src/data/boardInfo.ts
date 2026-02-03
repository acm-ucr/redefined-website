export interface boardMember {
  name: string;
  role: string;
  major: string;
  email: string;
  imagePath: string;
}

export const boardMembers: boardMember[] = [
  {
    name: "Noah Wong",
    role: "President",
    major: "3rd Year - Biology",
    email: "nwong086@ucr.edu",
    imagePath: "/board/noahWong.webp",
  },
  {
    name: "Koni Moss",
    role: "Vice President",
    major: "3rd Year - Environmental Science",
    email: "kmoss006@ucr.edu",
    imagePath: "/board/koniMoss.webp",
  },
  {
    name: "Charlize Munar",
    role: "Treasurer",
    major: "3rd Year - Biology",
    email: "cmuna002@ucr.edu",
    imagePath: "/board/charlizeMunar.webp",
  },
  {
    name: "Alyssa Ngo",
    role: "Secretary",
    major: "3rd Year - Biology",
    email: "ango094@ucr.edu",
    imagePath: "/board/alyssaNgo.webp",
  },
  {
    name: "James Daluraya",
    role: "Director of Outreach",
    major: "3rd Year - Biology",
    email: "rdalu003@ucr.edu",
    imagePath: "/board/jamesDaluraya.webp",
  },
];
