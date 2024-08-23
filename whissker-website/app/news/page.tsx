import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const News = () => {
  return (
    <>
      <header className="flex flex-col items-center bg-black text-white">
        <Header text="NEWS" />
      </header>

      <main>
        <Footer />
      </main>
    </>
  );
};

export default News;