import React from 'react';
import { FaEnvelope, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = ({ links }) => {
  return (
    <footer className="bg-white">
      <div className="container pt-12 pb-12 flex flex-wrap text-center lg:flex-row-reverse lg:justify-between lg:items-center">
        <ul className="w-full lg:w-auto">
          <FooterIconLink
            href={links && links.facebook}
            icon={FaFacebookF}
            label="Facebook"
          />
          {/* <FooterIconLink
            href={links && links.twitter}
            icon={FaTwitter}
            label="Twitter"
          /> */}
          <FooterIconLink
            href={links && links.linkedin}
            icon={FaLinkedinIn}
            label="LinkedIn"
          />
          <FooterIconLink
            href={links && links.email}
            icon={FaEnvelope}
            label="E-mail"
          />
        </ul>
        <div className="w-full lg:w-auto pt-6 lg:pt-0 text-blue-800 text-sm">
          &copy; 2020 All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const FooterIconLink = ({ href, label, icon: Icon }) => {
  return (
    <li className="inline-block px-2">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex h-8 w-8 border border-blue-800 text-blue-800 rounded-full items-center justify-center transition-colors duration-200 hover:text-white hover:bg-blue-400 hover:border-blue-400"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-3 h-3 fill-current" />
      </a>
    </li>
  );
};

export default Footer;
