import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-2">
      <nav>
        <ul className="flex flex-row justify-between">
          <Link to="/" className="cursor-pointer font-bold p-1 hover:bg-blue-600 hover:text-white">
            Main
          </Link>
          <div className="flex flex-row items-center">
            <Link
              to="/login"
              className="cursor-pointer font-bold p-1 hover:bg-blue-600 hover:text-white">
              Login
            </Link>
            <span className="px-2">/</span>
            <Link
              to="/signup"
              className="cursor-pointer font-bold p-1 hover:bg-blue-600 hover:text-white">
              Signup
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
