import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsElement from '@/components/NewsElement';
import Head from 'next/head';
import Image from 'next/image';

const News = () => {
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
        <Header text="NEWS" />
      </header>

      <main>
        
        {/* All NewsElements go in here! */}
        <div className="flex flex-col y-space-4">
          <div className="flex flex-col items-center">
            <Image src="/news/cover.JPG" width={204.8*2} height={204.8*2} alt="Moonbreak" className="flex flex-col items-center"/>
          </div>
          <NewsElement title="SINGLE ANNOUNCEMENT!!!" date="September 13th" text="We are beyong apathetic to be announcing our first ever single Moonbreak to be released September 13th on all major music platforms! Be sure to pre-save and give it a listen when it comes out!"/>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default News;