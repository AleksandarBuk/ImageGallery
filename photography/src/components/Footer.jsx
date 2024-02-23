import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from '../style';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <footer className={`w-full flex py-6 justify-between items-center ${styles.navbarBg}`}>
      <div className="container px-5 py-8 mx-auto flex items-center justify-between flex-wrap">
        <div className="flex title-font font-medium items-center text-gray-400 mb-4 md:mb-0">
          <FaEnvelope className="text-blue-500 mr-2" />
          <a href="mailto:andjela.dro.photography@gmail.com" className="hover:text-blue-300 transition-colors duration-300">andjela.dro.photography@gmail.com</a>
        </div>
        <p className="text-sm text-gray-400 sm:w-1/3 w-full text-center">© {new Date().getFullYear()} Andjela Drobnjakovic. All rights reserved.</p>
        <div className="flex justify-center md:justify-end sm:w-1/3 w-full">
          <a href="https://www.facebook.com/andjela.drobnjakovic" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <FaFacebook className="mr-4" />
          </a>
          <a href="https://www.instagram.com/djiikkiii" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
            <FaInstagram className="mr-4" />
          </a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
