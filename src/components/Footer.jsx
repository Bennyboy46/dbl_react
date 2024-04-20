import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16 relative'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>BEACHES.</h1>
          <div className='flex justify-between w-full sm:max-w-[380px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
          <ul className='text-bottom lg:flex'>
          </ul>
        </div>
        {/* Made by Darshan and GitHub */}
        <div className='flex justify-between text-left'>
          <ul className='lg:flex'>
            <li>Made by Darshan Benedict</li>
          </ul>
          <div className="flex items-center">
            <a href="https://github.com/Bennyboy46" target="_blank" rel="noopener noreferrer" className="icon mr-4">
              <FaGithub />
            </a>
          </div>
        </div>
        {/* End of Made by Darshan and GitHub */}
      </div>
    </div>
  );
};

export default Footer;
