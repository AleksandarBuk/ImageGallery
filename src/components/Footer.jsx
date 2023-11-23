import React from 'react';

const footerStyles = {
  footer: "flex justify-center items-center p-6 bg-gray-800 text-white",
  content: "max-w-[1280px] w-full"
  // Add more styles as needed
};

export const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.content}>
      {/* Footer content goes here */}
      &copy; {new Date().getFullYear()} Your Photography Brand. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
