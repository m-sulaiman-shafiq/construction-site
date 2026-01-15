import logo from "../assets/logo3.png";

export default function Navbar() {
    return (
      <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center p-6">
          <div><img
              src={logo}
              alt="Al Barakah Logo"
              className=""
            /></div>
          <div className="space-x-6">
            <a href="#home" className="hover:text-yellow-500">Home</a>
            <a href="#about" className="hover:text-yellow-500">About</a>
            <a href="#services" className="hover:text-yellow-500">Services</a>
            <a href="#contact" className="hover:text-yellow-500">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  