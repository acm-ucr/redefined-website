const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-redefined-sage flex w-2/3 items-center gap-1 rounded-3xl p-10">
      <div className="w-2/3 flex-auto flex-col">
        <div className="bg-redefined-silver mx-auto my-8 w-1/3 p-5 text-center text-2xl font-semibold">
          {props.text1}
        </div>
        <div className="mx-auto flex w-1/3 flex-row items-stretch gap-5">
          <div className="w-2/3 rounded-4xl bg-blue-200 p-5 text-center text-2xl font-semibold">
            {props.text2}
          </div>
          <div className="w-2/3 rounded-4xl bg-blue-200 p-5 text-center text-2xl font-semibold">
            {props.text2}
          </div>
        </div>
        <div className="mx-auto my-8 w-1/3 bg-blue-300 p-5 text-center text-2xl font-semibold text-white">
          {props.text3}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
    </div>
  );
};
export default Example;
