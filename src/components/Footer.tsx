import React from 'react';
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-backgroundWhite text-foregroundBlack relative py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-xl font-bold text-lilac-dark"
              >
                Manon Ruivo
              </a>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lilac-light hover:bg-lilac-dark text-foregroundBlack p-3 rounded-full transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lilac-light hover:bg-lilac-dark text-foregroundBlack p-3 rounded-full transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lilac-light hover:bg-lilac-dark text-foregroundBlack p-3 rounded-full transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8">
          <hr className="border-t-2 border-lilac-light" />
        </div>

        <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2025 Todos os direitos reservados.
          </p>
          <p className="text-sm">
            Desenvolvido por{' '}
            <a
              href="#"
              className="text-lilac hover:text-lilac-dark"
            >
              WB Digital Solutions
            </a>
          </p>
        </div>

        <div className="mt-4 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-lilac rounded-full"></div>
          <div className="w-3 h-3 bg-lilac rounded-full"></div>
          <div className="w-3 h-3 bg-lilac rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
