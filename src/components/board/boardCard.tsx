import Image from "next/image";

interface BoardCardProps {
  imagePath: string;
  name: string;
  role: string;
  major: string;
  email: string;
}

const BoardCard = ({ imagePath, name, role, major, email }: BoardCardProps) => {
  return (
    <div className="flex flex-shrink-0 p-4">
      <div className="relative h-135 w-80">
        <div className="bg-redefined-rust absolute inset-0 translate-x-4 translate-y-4 items-center rounded-3xl"></div>

        <div className="bg-redefined-cream relative flex h-full flex-col items-center rounded-3xl">
          <div className="bg-redefined-rust relative mt-15 mb-6 h-64 w-52 overflow-hidden rounded-3xl border-4 shadow-sm">
            <Image
              src={imagePath}
              alt={name}
              fill
              className="items-center object-cover"
              priority
            ></Image>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="text-redefined-rust font-serif text-4xl font-bold tracking-wide">
              {name}
            </div>
            <p className="font-redefined-alfa text-redefined-olive text-xl tracking-wider uppercase">
              {role}
            </p>
            <div className="font-redefined-chivo text-redefined-olive mt-2 space-y-1 text-lg font-semibold">
              <p>{major}</p>
            </div>
            <p className="text-redefined-olive mt-2 font-semibold italic">
              {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
