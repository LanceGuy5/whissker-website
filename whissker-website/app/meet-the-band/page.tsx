import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BandElement from '@/components/BandElement';
import Head from 'next/head';
import React from 'react';

const MeetTheBand = () => {
  return (
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
        <Header text="THE BAND" />
      </header>

      <main>
        {/* All NewsElements go in here! */}
        <div className="flex flex-col y-space-4">
          <BandElement title="WHISSKER" text="Glasgow-based indie/sharp alt-rock band..." />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default MeetTheBand;