import Image from 'next/image';

const PicsElement = ({title, text}: {title: string, text: string}) => {
  return (
    <>
      <div className="list-element">
        <div className="flex flex-row justify-between space-x-8 items-center w-full">
          <div className="flex flex-row items-center space-x-4">
            <Image 
                src="/pics/pics-icon.png" 
                className="mb-2 relative -top-2" 
                alt="Pics" 
                width={182*0.5} 
                height={130*0.5} />
            <h2 className="relative -top-3">{`${title}`}</h2>

            </div>
          
        </div>
        <p className="text-lg">{`${text}`}</p>
      </div>  
    </>
  );
};

export default PicsElement;
