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
    <div className="flex min-h-screen flex-shrink-0 items-center justify-center p-4">
      <div className="relative h-135 w-96">
        <div className="absolute inset-0 translate-x-4 translate-y-4 items-center rounded-3xl bg-amber-800"></div>

        <div className="relative flex h-full flex-col items-center rounded-3xl bg-amber-50">
          <div className="relative mt-15 mb-6 h-64 w-52 overflow-hidden rounded-3xl border-4 border-amber-800 shadow-sm">
            <Image
              src={imagePath}
              alt={name}
              fill
              className="items-center object-cover"
              priority
            ></Image>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="font-serif text-4xl font-bold tracking-wide text-amber-800">
              {name}
            </div>
            <p className="text-xl font-black tracking-wider text-gray-800 uppercase">
              {role}
            </p>
            <div className="mt-2 space-y-1 text-lg font-black text-gray-600">
              <p>{major}</p>
            </div>
            <p className="mt-2 font-semibold text-black italic">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
