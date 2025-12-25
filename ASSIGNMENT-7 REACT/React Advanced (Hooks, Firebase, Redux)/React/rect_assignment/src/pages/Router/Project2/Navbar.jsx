import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-6 bg-black text-white px-6 py-3 rounded-lg">
      <Link to="home" className="hover:text-yellow-400">
        Home
      </Link>
      <Link to="about" className="hover:text-yellow-400">
        About
      </Link>
      <Link to="contact" className="hover:text-yellow-400">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
