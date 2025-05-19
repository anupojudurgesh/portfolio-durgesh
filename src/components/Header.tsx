import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  Moon,
  Sun,
  Menu,
  X,
  Instagram,
  Facebook,
  FacebookIcon,
  Github,
} from "lucide-react";
import { Youtube, Twitter } from "lucide-react";
import { FaFacebook, FaFigma, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "home" },
    { path: "/work", label: "work" },
    { path: "/services", label: "services" },
    { path: "/about", label: "about" },
    { path: "/contact", label: "contact" },
  ];

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 
      mx-6 sm:mx-4 md:mx-auto sm:mt-8
      max-w-full sm:max-w-[90vw] md:max-w-[700px] rounded-full 
      md:rounded-full px-5 sm:px-6 py-4 sm:py-4
      ${
        isScrolled
          ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/10 dark:border-gray-100/5"
          : "bg-white/30 dark:bg-gray-900/30 border border-gray-200/10 dark:border-gray-400/10 backdrop-blur-xl "
      }`}
    >
      <div className="flex items-center justify-between flex-wrap gap-y-2">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        >
          durgesh
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-base font-medium transition-all duration-300 ease-in-out tracking-tight
                ${
                  isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300  "
                } hover:scale-105`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Social Icons */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-green-500"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <a
            href="https://figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-pink-500"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-500"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* Divider */}
          <div className="h-5 w-px bg-gray-400 dark:bg-gray-600 mx-1 sm:mx-2" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden  hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-4 opacity-0 invisible"
        }`}
      >
        <div className="bg-white dark:bg-gray-950 shadow-lg mt-2 flex justify-center text-center rounded-full  border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-1 sm:px-6 py-2">
            <div className="flex justify-center w-full">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={toggleMenu}
                    className={`px-3 py-2 text-sm font-medium text-center rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-clip-text text-transparent bg-gradient-to-br from-pink-400 via-purple-500 to-blue-400 shadow-md"
                        : "text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 "
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
