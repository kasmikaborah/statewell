import { FaBrain } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-yellow-500">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <FaBrain className="text-yellow-400 text-3xl" />
          <h1 className="text-2xl font-bold text-yellow-400">
            Statewell Tech
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
          <li><a href="#research" className="hover:text-yellow-400">Research</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}