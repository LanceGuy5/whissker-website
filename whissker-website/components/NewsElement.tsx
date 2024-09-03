import Image from 'next/image';

const NewsElement = ({title, date, text}: {title: string, date: string, text: string}) => {
  return (
    <>
      <div className="list-element">
        <div className="flex flex-row justify-between space-x-8 items-center w-full">
          <div className="flex flex-row items-center space-x-4">
            <Image 
                src="/news/news-icon.png" 
                className="mb-2 relative -top-2" 
                alt="News" 
                width={182*0.5} 
                height={130*0.5} />
            <h2 className="relative -top-3">{`${title}`}</h2>

            </div>
          <h2 className="ml-auto text-right relative -top-3">{`${date}`}</h2>
        </div>
        <p className="text-lg">{`${text}`}</p>
      </div>  
    </>
  );
};

export default NewsElement;
