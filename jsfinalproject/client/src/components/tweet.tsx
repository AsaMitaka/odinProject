import { Link } from 'react-router-dom';

const Tweet = () => {
  return (
    <div className="flex justify-between border px-2 py-3">
      <img
        className="rounded-xl w-12 h-12 mr-5"
        src="https://upload.wikimedia.org/wikipedia/en/c/cc/Wojak_cropped.jpg"
        alt=""
      />
      <div className="w-full flex-col">
        <div className="mb-2">
          <Link to="/1" className="font-bold text-blue-600 text-xl mr-1">
            Name
          </Link>
          <span className="text-gray-500 text-base mr-1">@name</span>
          <time className="text-gray-500 text-base">14m</time>
        </div>
        <div className="h-12 text-slate-950 text-base">text</div>
        <div className="flex justify-evenly">
          <div className="cursor-pointer font-bold px-3 py-0.5 rounded-3xl hover:bg-blue-600 hover:text-white">
            a
          </div>
          <div className="cursor-pointer font-bold px-3 py-0.5 rounded-3xl hover:bg-blue-600 hover:text-white">
            b
          </div>
          <div className="cursor-pointer font-bold px-3 py-0.5 rounded-3xl hover:bg-blue-600 hover:text-white">
            c
          </div>
          <div className="cursor-pointer font-bold px-3 py-0.5 rounded-3xl hover:bg-blue-600 hover:text-white">
            d
          </div>
          <div className="cursor-pointer font-bold px-3 py-0.5 rounded-3xl hover:bg-blue-600 hover:text-white">
            e
          </div>
        </div>
      </div>
      <div className="cursor-pointer hover:text-gray-200">...</div>
    </div>
  );
};

export default Tweet;
