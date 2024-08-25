import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TicketsElement from '@/components/TicketsElement';
import React from 'react';

const Tickets = () => {
  return (
    <>
      <header className="flex flex-col items-center bg-black text-white">
        <Header text="TICKETS" />
      </header>

      <main>
        {/* All TicketsElements go in here! */}
        <div className="flex flex-col y-space-4">
          <TicketsElement 
            title="Tickets: SWG3 Poetry Club" 
            date="September 6th" 
            details={{
              location: 'Address Here', 
              time: '8:30PM', 
              price: '$100 (ig pounds)', 
              age: '18+', 
              notes: 'Alcohol will be served'
            }}
            link="https://linktr.ee/whissker?fbclid=PAZXh0bgNhZW0CMTEAAaba_qccegyTDrtW5YS-tyWEjoQv4Adkn34cWbnUZnQlJt7mn5QAYyK5siE_aem_MW5vdJjnvXyHMlvQ5MeLYg"/>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Tickets;