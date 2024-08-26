import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
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
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
          <meta name="description" content="Official website of the band Whissker" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="format-detection" content="telephone=no" />

          <title>Whissker: News</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head> 

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