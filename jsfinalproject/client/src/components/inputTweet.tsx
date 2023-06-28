const InputTweet = () => {
  return (
    <div className="flex flex-col px-5 py-4 mb-2 border">
      <textarea
        className="height: 13rem text-lg mb-2 p-2 resize-none border-b-2 border-black"
        placeholder="new tweet"
      />
      <div className="self-end">
        <button className="cursor-pointer font-bold bg-blue-600 px-3 py-2 text-white rounded-3xl hover:bg-blue-400">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default InputTweet;
