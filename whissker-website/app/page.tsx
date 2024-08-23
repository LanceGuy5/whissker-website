import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

          <title>Whissker</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head> 

        <header className="flex flex-col items-center bg-black text-white">
          <Header text="WHISSKER" />
        </header>

          <main>
                <div className="pictureL">
                  <Image src="/home/paul.JPG" width={3*106.6} height={3*160.0} alt="Paul" className="curve"/>
                </div>
                <div className="textL">
                  <p><br></br></p>
                  <h2>
                    <Link href="/meet-the-band" className="hover:no-underline text-sec-size">
                      MEET THE BAND
                    </Link>
                  </h2>
                  <p><br></br></p>
                  <p></p>
                  <p></p>
                  <nav>
                  </nav>    
                </div>   

                <div className="pictureR">
                  <Image src="/home/scott.JPG" width={2.5*204.8} height={2.5*136.6} alt="Scott" className="curve"/>
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

                <div className="pictureL">
                  <Image src="/home/jack.JPG" width={2.5*136.6} height={2.5*204.8} alt="Jack" className="curve"/>
                </div>
                <div className="textL"> 
                  <h2>
                    <p><br></br></p>
                    <Link href="/tickets" className="hover:no-underline text-sec-size">
                      FIND TICKETS
                    </Link>
                    <p><br></br></p>
                  </h2>
                </div>

                <div className="pictureR">
                  <Image src="/home/josh.JPG" width={2.5*156.6} height={2.5*204.8} alt="Josh" className="curve"/>
                </div>
                <div className="textR">
                  <h2>
                    <p><br></br></p>
                    <Link href="/gigs" className="hover:no-underline text-sec-size">
                      GIGS
                    </Link>
                    <p><br></br></p>
                  </h2>
                </div>

                <div className="pictureL">
                  <Image src="/home/whole band copy.JPG" width={2.5*138.4} height={2.5*136.6} alt="Whissker" className="curve"/>
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