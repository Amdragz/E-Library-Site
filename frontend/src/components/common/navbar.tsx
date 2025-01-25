import { useState } from "react";
import { BiBook, BiHomeAlt, BiSearchAlt } from "react-icons/bi";
import { FaBookReader, FaHistory, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoggedInNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/home", icon: <BiHomeAlt /> },
    { name: "Library", link: "/library", icon: <FaBookReader /> },
    { name: "History", link: "/history", icon: <FaHistory /> },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
  
    if (link.startsWith("#")) {
      const targetId = link.replace("#", "");
      const element = document.getElementById(targetId);
  
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = link;
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BiBook className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">E-Library</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                className="w-72 py-2.5 pl-10 pr-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-200"
                placeholder="Search books, articles..."
              />
              <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            </div>

            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={(e) => handleScroll(e, item.link)}
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white py-4">
          <div className="px-4 space-y-3">
            <div className="relative">
              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Search books, articles..."
              />
              <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                onClick={(e) => handleScroll(e, item.link)}
                to={item.link}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const GeneralNavbar = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Articles", link: "#articles" },
    { name: "News", link: "#news" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
  
    if (link.startsWith("#")) {
      const targetId = link.replace("#", "");
      const element = document.getElementById(targetId);
  
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = link;
    }
  };
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <BiBook className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">E-Library</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={(e) => handleScroll(e, item.link)}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            to="/login"
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <FaSignInAlt className="mr-2" />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return isLoggedIn ? <LoggedInNavbar /> : <GeneralNavbar />;
};

export default Navbar;
