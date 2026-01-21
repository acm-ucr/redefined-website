const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-6 rounded-lg bg-red-200 p-10">
      <div className="w-full rounded-full bg-blue-200 p-6 text-center text-xl">
        {props.text1}
      </div>
      <div className="flex w-full justify-center gap-6">
        <div className="flex-1 rounded-full bg-blue-300 p-6 text-center">
          props.text2
        </div>
        <div className="flex-1 rounded-full bg-blue-300 p-6 text-center">
          {props.text2}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
      <div className="w-full rounded bg-blue-600 p-6 text-center text-xl text-white"></div>
    </div>
  );
};
export default Example;
