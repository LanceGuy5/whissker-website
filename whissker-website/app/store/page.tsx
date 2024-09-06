import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Store = () => {
  return (
    <>
        <header className="flex flex-col items-center bg-black text-white">
          <Header text="STORE" />
        </header>

        <main>
          <div className="flex flex-col items-center bg-black text-white">
            <p>🚧 🚧 🚧 Under construction, coming soon with new merch, vinyls, etc. (and possibly our own brand of unisex underwear) 🚧 🚧 🚧</p>
          </div>
          <Footer />
        </main>
    </>
  );
};

export default Store;