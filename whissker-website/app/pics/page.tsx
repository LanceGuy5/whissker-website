import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import PicsElement from '@/components/PicsElement';
import React from 'react';
import Image from 'next/image';

const Pics = () => {
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

          <title>Whissker: Pics</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head> 

        <header className="flex flex-col items-center bg-black text-white">
          <Header text="PICTURES" />
        </header>
  
        <main>
          {/* All PicsElements go in here! */}
        <div className="flex flex-col y-space-4">
          <PicsElement title="Photo Gallery" text="Please enjoy these lovely pictures of the band. Credit to various photographers including:"/>
        </div>

        <div className="items-center">
          <Image src="/home/paul.JPG" width={3*106.6} height={3*160.0} alt="Paul" className="curve"/>
        </div>

        <div className="items-center">
          <Image src="/home/scott.JPG" width={2.5*204.8} height={2.5*136.6} alt="Scott" className="curve"/>
        </div>

        <div className="items-center">
          <Image src="/home/jack.JPG" width={2.5*136.6} height={2.5*204.8} alt="Jack" className="curve"/>
        </div>

        <div className="items-center">
          <Image src="/home/josh.JPG" width={2.5*156.6} height={2.5*204.8} alt="Josh" className="curve"/>
        </div>

        <div className="items-center">
          <Image src="/home/whole band copy.JPG" width={2.5*138.4} height={2.5*136.6} alt="Whissker" className="curve"/>
        </div>

          <Footer />
        </main>
      </>
  );
};

export default Pics;