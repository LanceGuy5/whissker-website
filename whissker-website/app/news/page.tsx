import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsElement from '@/components/NewsElement';

const News = () => {
  return (
    <>
      <header className="flex flex-col items-center bg-black text-white">
        <Header text="NEWS" />
      </header>

      <main>
        {/* All NewsElements go in here! */}
        <div className="flex flex-col y-space-4">
          <NewsElement title="Performance at Bungalow (Paisley)" date="October 3rd" text="We are performing..." />
          <NewsElement title="Performance at King Tuts Wah Wah Hut" date="July 20th" text="We are performing at ...." />
          <NewsElement title="Headliner at McChuilles" date="April 4th" text="We are performing at ...." />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default News;