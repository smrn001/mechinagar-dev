import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-4">
      <div className="container mx-auto px-4 text-center">
        &copy; {new Date().getFullYear()} Developers Community of Mechinagar. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
