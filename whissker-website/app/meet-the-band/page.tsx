import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const MeetTheBand = () => {
  return (
    <>
      <header className="flex flex-col items-center bg-black text-white">
        <Header text="MEET THE BAND" />
      </header>

      <main>
        <Footer />
      </main>
    </>
  );
};

export default MeetTheBand;