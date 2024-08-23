import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const Gigs = () => {
  return (

// {/* <p>September 6th - SWG3 Poetry Club ***ABOVE AVERAGE SIZED ANNOUCEMENT COMING***</p>
// <p>October 3rd - Bungalow (Paisley)</p>
// <p>Purchase your tickets using the link below and stay tuned for more upcoming gigs!</p>
// <a href="https://linktr.ee/whissker?fbclid=PAZXh0bgNhZW0CMTEAAaba_qccegyTDrtW5YS-tyWEjoQv4Adkn34cWbnUZnQlJt7mn5QAYyK5siE_aem_MW5vdJjnvXyHMlvQ5MeLYg">
// Linktree</a>
// <h2>PREVIOUS GIGS OF NOTE</h2>
// <p>April 4th - McChuilles (HEADLINED)</p>
// <p>July 20th - King Tuts Wah Wah Hut</p> */}
      <>
        <header className="flex flex-col items-center bg-black text-white">
          <Header text="GIGS" />
        </header>
  
        <main>
          <Footer />
        </main>
      </>
  );
};

export default Gigs;