import facebookIcon from "../assets/Facebook.svg";
import instagramIcon from "../assets/Instagram.svg";
import linkedinIcon from "../assets/LinkedIn.svg";
import xIcon from "../assets/X-twitter.svg";
import logo from "../assets/logo3.png";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-800 text-yellow-400 px-6 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Column 1: Logo + tagline */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <img src={logo} alt="Al Barakah Logo" className="h-12 w-auto" />
            <h3 className="text-3xl md:text-4xl font-bold">Al Barakah</h3>
          </div>
          <p className="text-yellow-200 text-base md:text-sm leading-relaxed max-w-xs md:max-w-full">
            Reliable construction equipment rentals to power your projects with confidence.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl md:text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-base md:text-sm">
            <li>
              <a href="#home" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-300 transition">
                Equipment
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-yellow-300 transition"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl md:text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80 transition">
              <img src={facebookIcon} alt="Facebook" className="w-8 h-8 md:w-6 md:h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src={instagramIcon} alt="Instagram" className="w-8 h-8 md:w-6 md:h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 md:w-6 md:h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src={xIcon} alt="X" className="w-8 h-8 md:w-6 md:h-6" />
            </a>
          </div>
        </div>

        {/* Column 4: Contact Info */}
        <div className="flex flex-col items-center md:items-start text-base md:text-sm">
          <h4 className="text-xl md:text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-yellow-200">
            <li className="flex items-center gap-3">
              <span>📞</span>
              <span>+971 52 863 5637</span>
            </li>

            <li className="flex items-center gap-3">
              <span>✉️</span>
              <span>info@albarakah.com</span>
            </li>

            <li className="flex items-center gap-3">
              <span>📍</span>
              <span>Al Muhaisnah, Dubai</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="max-w-[1440px] mx-auto mt-10 pt-6 border-t border-yellow-400/20 text-center text-base md:text-sm text-yellow-200">
        © {new Date().getFullYear()} Al Barakah. All rights reserved.
      </div>
    </footer>
  );
}
