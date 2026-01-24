const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-redefined-cream flex w-2/3 flex-col items-center gap-10 rounded-xl p-10">
      <div className="bg-redefined-rust w-1/2 p-5 text-center text-2xl">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-5">
        <div className="bg-redefined-sage w-full rounded-full p-5 text-center text-2xl">
          {props.text2}
        </div>
        <div className="bg-redefined-sage w-full rounded-full p-5 text-center text-2xl">
          {props.text2}
        </div>
      </div>
      <div className="bg-redefined-olive w-1/2 p-5 text-center text-2xl text-white">
        {props.text3}
      </div>
    </div>
  );
};
export default Example;
