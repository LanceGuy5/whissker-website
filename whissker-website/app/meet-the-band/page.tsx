import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BandElement from '@/components/BandElement';
import Head from 'next/head';
import React from 'react';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const MeetTheBand = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
          <BandElement title="WHISSKER" text="Glasgow-based indie/sharp alt-rock band with diverse musical influences that result in a unique and somewhat experimental sound with an electrifying live atmosphere. Be sure to sheck us out at one of our gigs to see one of Glasgow's most creative up-and-coming bands!" />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default MeetTheBand;