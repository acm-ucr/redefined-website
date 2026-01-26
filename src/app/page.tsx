import BoardCard from "@/components/board/BoardCard";

const boardMembers = [
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

export default function BoardEntry() {
  return (
    <div className="min-h-screen bg-redefined-olive-50 px-4 py-10">
      <p className="mb-12 text-center text-6xl font-redefined-zilla font-extrabold upper-case italic text-amber-900">
        Meet The Board
      </p>
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-10 max-w-6xl mx-auto px-4">
        {boardMembers.map((member) => (
          <BoardCard
            key={member.email}
            imagePath={member.imagePath}
            name={member.name}
            role={member.role}
            major={member.major}
            email={member.email}
          />
        ))}
      </div>
    </div>
  );
}
