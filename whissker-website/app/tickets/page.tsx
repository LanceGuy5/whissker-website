import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const Tickets = () => {
  return (
    <>
      <header className="flex flex-col items-center bg-black text-white">
        <Header text="TICKETS" />
      </header>

      <main>
        <Footer />
      </main>
    </>
  );
};

export default Tickets;