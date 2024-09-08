import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

          <title>Whissker</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head> 

        <header className="flex flex-col items-center bg-black text-white">
          <div className="textC">
          <Header text="WHISSKER"/>
          </div>
        </header>

          <main>
                
                <div className="textL">
                  <p><br></br></p>
                  <h2>
                    <Link href="/meet-the-band" className="hover:no-underline text-sec-size">
                      THE BAND
                    </Link>
                  </h2>
                  <p><br></br></p>
                  <p></p>
                  <p></p>
                  <nav>
                  </nav>    
                </div>   

                
                <div className="textR">
                  <p><br></br></p>
                  <h2>
                    <Link href="/news" className="hover:no-underline text-sec-size">
                      NEWS
                    </Link>
                  </h2>
                  <p><br></br></p>
                  <nav>
                  </nav>
                </div>

                
                <div className="textL"> 
                  <h2>
                    <p><br></br></p>
                    <Link href="/tickets" className="hover:no-underline text-sec-size">
                      GIGS/TICKETS
                    </Link>
                    <p><br></br></p>
                  </h2>
                </div>

                
                <div className="textR">
                  <h2>
                    <p><br></br></p>
                    <Link href="/pics" className="hover:no-underline text-sec-size">
                      PICTURES
                    </Link>
                    <p><br></br></p>
                  </h2>
                </div>

                
                <div className="textL">
                  <h2>
                    <p><br></br></p>
                    <Link href="/store" className="hover:no-underline text-sec-size">
                      STORE
                    </Link>
                    <p><br></br></p>
                  </h2>
                </div>
            <Footer />
          </main>
        </>
  )
}