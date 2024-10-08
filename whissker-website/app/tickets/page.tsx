import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TicketsElement from '@/components/TicketsElement';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

const Tickets = () => {
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

        <title>Whissker: Gigs/Tickets</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head> 

      <header className="flex flex-col items-center bg-black text-white">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Official website of the band Whissker" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <Header text="GIGS/TICKETS" />
        

      </header>

      <main>
        {/* All TicketsElements go in here! */}
        <div className="flex flex-col y-space-4">
          <div className="link">
          <Link href={"https://linktr.ee/whissker?fbclid=PAZXh0bgNhZW0CMTEAAaba_qccegyTDrtW5YS-tyWEjoQv4Adkn34cWbnUZnQlJt7mn5QAYyK5siE_aem_MW5vdJjnvXyHMlvQ5MeLYg"}>
            <h2>Purchase Tickets Here</h2>
          </Link>
          </div>
            <TicketsElement
            title="TBA"
            date="TBA"
            details="More gigs to be announced soon... Be sure to join our mailing list using the link above to be notified of any upcoming gigs!"/>
        </div>

        
        <Footer />

      </main>
    </>
  );
};

export default Tickets;