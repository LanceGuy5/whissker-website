import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsElement from '@/components/NewsElement';
import Head from 'next/head';

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
          <NewsElement title="Above average sized things coming!" date="September 6th" text="Be sure to be at our SWG3 gig this Friday to be the first to hear the news!" />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default News;