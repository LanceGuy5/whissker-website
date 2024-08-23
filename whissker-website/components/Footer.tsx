import Link from 'next/link';
import Image from 'next/image';

const contactPNGSize = 24;
const versionString = "v1.1.0";

const Footer = () => {
  return (
    <>
      <section className="p-5 mt-20 bg-footer-dark">
        <div className="social-media-icons mb-4 flex justify-center space-x-8">
          <Link href="/">
            <Image 
              src="/footer/house-icon.png" 
              className="transition-opacity duration-300 opacity-25 hover:opacity-75" 
              alt="Whissker" 
              width={contactPNGSize} 
              height={contactPNGSize} />
          </Link>
          <Link href="https://www.instagram.com/whissker_band?igsh=MzBiN3hqbmdobzAx" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/footer/instagram-icon.png" 
              className="transition-opacity duration-300 opacity-25 hover:opacity-75" 
              alt="Instagram" 
              width={contactPNGSize} 
              height={contactPNGSize} />
          </Link>
          <a href="https://www.facebook.com/profile.php?id=61562025323991&locale=en_GB" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/footer/facebook-icon.png" 
              className="transition-opacity duration-300 opacity-25 hover:opacity-75" 
              alt="Facebook" 
              width={contactPNGSize} 
              height={contactPNGSize} />
          </a>
          <a href="mailto:whisskerband@gmail.com">
            <Image 
              src="/footer/email-icon.png" 
              className="transition-opacity duration-300 opacity-25 hover:opacity-75" 
              alt="Email" 
              width={contactPNGSize} 
              height={contactPNGSize} />
          </a>
        </div>
        <p className="text-center text-footer-text">&copy; 2024 Whissker Band. All rights reserved. {`${versionString}`}</p>
      </section>
    </>
  );
};

export default Footer;
