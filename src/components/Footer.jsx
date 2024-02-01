import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  // Function to handle scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll
    });
  };

  return (
    <footer className="bg-gray-900 text-white body-font">
      <div className="container px-5 py-8 mx-auto flex items-center justify-between flex-wrap">
        <div className="flex title-font font-medium items-center text-gray-400 mb-4 md:mb-0">
          <FaEnvelope className="text-blue-500 mr-2" />
          <a href="mailto:andjela.drobnjakovic@gmail.com" className="hover:text-blue-300 transition-colors duration-300">andjela.drobnjakovic@gmail.com</a>
        </div>
        <p className="text-sm text-gray-400 sm:w-1/3 w-full text-center">© {new Date().getFullYear()} Andjela Drobnjakovic. All rights reserved.</p>
        <div className="flex justify-center md:justify-end sm:w-1/3 w-full">
          <a href="https://twitter.com/Andjela" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <FaTwitter className="mr-4" />
          </a>
          <a href="https://www.linkedin.com/in/andjela/" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <FaLinkedin className="mr-4" />
          </a>
          <a href="https://github.com/andjela" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="container mx-auto text-center py-4">
        <button 
          onClick={scrollToTop} 
          className="mt-2 bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
