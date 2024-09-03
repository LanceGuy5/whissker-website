import Image from 'next/image';
import Link from 'next/link';

const TicketsElement = (
  {title, date, details}: {title: string, date: string, details: string}
) => {
  return (
    <>
      <div className="list-element">
        <div className="flex flex-row justify-between space-x-8 items-center w-full">
          <div className="flex flex-row items-center space-x-4">
            <Image 
                src="/tickets/ticket-icon.png" 
                className="mb-4 relative -top-2" 
                alt="Gigs/Tickets" 
                width={182*0.5} 
                height={130*0.5} />
            <h2 className="relative -top-3">{`${title}`}</h2>

            </div>
          <h2 className="ml-auto text-right relative -top-3">{`${date}`}</h2>
        </div>
        
        <p className="text-lg">
        {`${details}`}<br>
          </br>
        </p>
        
        

      </div>  

      

      
    </>
  );
};

export default TicketsElement;
