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
        <div className="absolute inset-0 translate-x-4 translate-y-4 items-center rounded-3xl bg-redefined-rust"></div>

        <div className="relative flex h-full flex-col items-center rounded-3xl bg-redefined-cream">
          <div className="relative mt-15 mb-6 h-64 w-52 overflow-hidden rounded-3xl border-4 bg-redefined-rust shadow-sm">
            <Image
              src={imagePath}
              alt={name}
              fill
              className="items-center object-cover"
              priority
            ></Image>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="font-serif text-4xl font-bold tracking-wide text-redefined-rust">
              {name}
            </div>
            <p className="text-xl font-redefined-alfa tracking-wider text-redefined-olive uppercase">
              {role}
            </p>
            <div className="mt-2 space-y-1 text-lg font-semibold font-redefined-chivo text-redefined-olive">
              <p>{major}</p>
            </div>
            <p className="mt-2 font-semibold text-redefined-olive italic">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
