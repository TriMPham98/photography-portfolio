import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          <Link
            href="https://instagram.com" // Replace with your Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors">
            <FaInstagram className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </Link>
          <Link
            href="https://github.com" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors">
            <FaGithub className="w-6 h-6" />
          </Link>
        </div>
        <div className="text-center mt-4 text-sm text-gray-400">
          © {currentYear} Tri Pham Photography. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
