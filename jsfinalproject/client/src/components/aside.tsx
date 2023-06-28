import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <aside className="w-64 p-3 hidden md:block">
      <nav className="">
        <ul className="">
          <Link to="/">
            <li className="cursor-pointer font-bold p-2 mb-2 rounded-xl hover:bg-blue-600 hover:text-white">
              Home
            </li>
          </Link>
          <Link to="/">
            <li className="cursor-pointer font-bold p-2 mb-2 rounded-xl hover:bg-blue-600 hover:text-white">
              Explore
            </li>
          </Link>
          <Link to="/">
            <li className="cursor-pointer font-bold p-2 mb-2 rounded-xl hover:bg-blue-600 hover:text-white">
              Notification
            </li>
          </Link>
          <Link to="/">
            <li className="cursor-pointer font-bold p-2 mb-2 rounded-xl hover:bg-blue-600 hover:text-white">
              Messages
            </li>
          </Link>
          <Link to="/">
            <li className="cursor-pointer font-bold p-2 mb-2 rounded-xl hover:bg-blue-600 hover:text-white">
              List
            </li>
          </Link>
          <Link to="/">
            <li className="cursor-pointer font-bold p-2 mb-2 rounded-xl hover:bg-blue-600 hover:text-white">
              Bookmarks
            </li>
          </Link>
          <Link to="/">
            <li className="cursor-pointer font-bold p-2 mb-2 rounded-xl hover:bg-blue-600 hover:text-white">
              Verified
            </li>
          </Link>
          <Link to="/profile">
            <li className="cursor-pointer font-bold p-2 mb-2 rounded-xl hover:bg-blue-600 hover:text-white">
              Profile
            </li>
          </Link>
          <Link to="/">
            <li className="cursor-pointer font-bold p-2 mb-2 rounded-xl hover:bg-blue-600 hover:text-white">
              More
            </li>
          </Link>
          <li className="cursor-pointer bg-blue-600 text-white text-center text-lg rounded-3xl font-bold p-2 hover:bg-blue-400">
            Tweet
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
