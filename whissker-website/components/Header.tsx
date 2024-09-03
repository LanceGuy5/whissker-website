import Image from 'next/image';

const Header = ({ text }: { text: string }) => {
  return (
    <>
        <div className="flex items-center space-x-6">
          <Image src="/whissker-logo.jpeg" alt="Logo" width={112.6} height={70.4} />
          <h1 className="text-title-size">{`${text}`}</h1>
          <Image src="/whissker-logo.jpeg" alt="Logo" width={112.6} height={70.4} />
        </div>
    </>
  );
};

export default Header;
