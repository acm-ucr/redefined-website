import BoardCard from "@/components/board/boardCard";
import { boardMembers } from "@/data/boardInfo";

const BoardEntry = () => {
  return (
    <div className="bg-redefined-olive-50 min-h-screen px-4 py-10">
      <p className="font-redefined-zilla mb-12 text-center text-6xl font-extrabold text-amber-900 uppercase italic">
        Meet The Board
      </p>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-16 px-4">
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
};

export default BoardEntry;

/* import Example from "@/components/example";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Example text1="Adjust" text2="these" text3="Props" />
    </div>
  );
};

export default Home; */
