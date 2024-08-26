import Image from 'next/image';
import Link from 'next/link';

const TicketsElement = (
  {title, date, details, link}: {title: string, date: string, details: {
    location: string, time: string, price: string, age: string, notes: string
  }, link: string}
) => {
  return (
    <>
      <div className="list-element">
        <div className="flex flex-row justify-between space-x-8 items-center w-full">
          <div className="flex flex-row items-center space-x-4">
            <Image 
                src="/tickets/ticket-icon.png" 
                className="mb-4 relative -top-2" 
                alt="News" 
                width={182*0.5} 
                height={130*0.5} />
            <h2 className="relative -top-3">{`${title}`}</h2>

            </div>
          <h2 className="ml-auto text-right relative -top-3">{`${date}`}</h2>
        </div>
        <Link href={`${link}`}>
          <p className="text-xl">Purchase Tickets Here</p>
        </Link>
        <p className="text-lg">
          {`Details:`}<br></br>
          {`Location: ${details.location}`}<br></br>
          {`Time: ${details.time}`}<br></br>
          {`Price: ${details.price}`}<br></br>
          {`Age: ${details.age}`}<br></br>
          {`Notes: ${details.notes}`}
        </p>
        
      </div>  
    </>
  );
};

export default TicketsElement;
