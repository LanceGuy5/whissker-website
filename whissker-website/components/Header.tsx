import Image from 'next/image';
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

const Header = ({ text }: { text: string }) => {
  return (
    <>
        <div className="flex items-center space-x-6">
          <Image src="/whissker-logo.jpeg" alt="Logo" width={112.6} height={70.4} />
          <h1 className="textC">{`${text}`}</h1>
          <Image src="/whissker-logo.jpeg" alt="Logo" width={112.6} height={70.4} />
        </div>
    </>
  );
};

export default Header;
