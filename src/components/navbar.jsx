import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 30,
        }}
        className="
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-between
          px-6 md:px-12 lg:px-24 py-4
          bg-white/5
          backdrop-blur-xl
          border-b border-white/10
          shadow-sm shadow-black/10
        "
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/Manova.png"
            alt="Manova Softs"
            className="h-15 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive ? "text-white" : "text-white hover:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href="https://calendly.com/manovasofts/30min"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-full
              border border-white/20
              px-6 py-3
              text-white
              transition-all
              hover:bg-white/10
            "
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <MenuIcon className="h-6 w-6 text-white" />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60]
        flex flex-col items-center justify-center gap-8
        
        backdrop-blur-2xl
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-xl ${isActive ? "text-white" : "text-white"}`
            }
          >
            {link.name}
          </NavLink>
        ))}

        <a
          href="https://calendly.com/manovasofts/30min"
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsOpen(false)}
          className="
            rounded-full
            bg-white
            px-8 py-3
            font-semibold
            text-black
          "
        >
          Book a Call
        </a>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6"
        >
          <XIcon className="h-7 w-7 text-white" />
        </button>
      </div>
    </>
  );
}
