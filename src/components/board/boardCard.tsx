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
    <div className="mt-6 flex flex-shrink-0 p-4 lg:mt-8 lg:p-6">
      <div className="relative h-[28rem] w-72 sm:h-[32rem] sm:w-80 lg:h-[38rem] lg:w-[23rem] xl:h-[40rem] xl:w-[24rem] 2xl:h-[42rem] 2xl:w-[26rem]">
        <div className="bg-redefined-rust absolute inset-0 translate-x-3 -translate-y-3 rounded-3xl sm:translate-x-4 sm:-translate-y-4 lg:translate-x-5 lg:-translate-y-5"></div>

        <div className="bg-redefined-cream relative flex h-full flex-col items-center rounded-3xl p-4 lg:p-6">
          <div className="bg-redefined-rust relative mt-6 mb-4 h-56 w-48 shrink-0 overflow-hidden rounded-3xl border-4 shadow-sm sm:mt-8 sm:mb-6 sm:h-64 sm:w-52 lg:mt-10 lg:mb-6 lg:h-72 lg:w-64 2xl:mt-12 2xl:mb-8 2xl:h-80 2xl:w-72">
            <Image
              src={imagePath}
              alt={name}
              fill
              className="items-center object-cover"
              priority
            ></Image>
          </div>

          <div className="flex flex-col items-center gap-1 px-2 text-center">
            <div className="text-redefined-rust font-zilla text-2xl font-bold sm:text-3xl lg:text-4xl 2xl:text-5xl">
              {name}
            </div>
            <p className="font-redefined-alfa text-redefined-olive text-base uppercase sm:text-lg md:p-2 lg:text-xl 2xl:text-2xl">
              {role}
            </p>
            <div className="font-redefined-chivo text-redefined-olive mt-1 space-y-1 text-sm font-semibold sm:mt-2 sm:text-base lg:text-lg 2xl:text-xl">
              <p>{major}</p>
            </div>
            <p className="text-redefined-olive mt-1 text-xs font-semibold break-all italic sm:mt-2 sm:text-sm lg:text-base 2xl:text-lg">
              {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
