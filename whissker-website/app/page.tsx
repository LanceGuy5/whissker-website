/*import Image from "next/image";

export default function Home() {
  return (
  
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <html>
        <head>
          <title>Whissker</title>
          
        </head>
      
      <body> 

      <div>
        <h1 className="text-4xl font-bold text-center">Whissker</h1>
        <Image src="/whissker-logo.png" width={200} height={200} objectFit="cover" objectPosition="center" alt="Whissker Logo" />
        <p className="text-center text-lg">Official website coming soon!</p>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold text-center">Gigs</h1>
        <p className="text-center text-lg">King Tuts - July 20th</p>
        <a href="https://linktr.ee/whissker?fbclid=PAZXh0bgNhZW0CMTEAAaba_qccegyTDrtW5YS-tyWEjoQv4Adkn34cWbnUZnQlJt7mn5QAYyK5siE_aem_MW5vdJjnvXyHMlvQ5MeLYg">
        Linktree</a>
      </div>
      
      <div className="text-center">
        <h1 className="text-4xl font-bold text-center">Other</h1>
        <p className="text-center text-lg">Other</p>
      </div>
      

      </body>

      </html>
      
    </main>

  );

}

<div className="picture"> 
            <image> <img src="/whole band color 2.JPG" width={7*220.8} height={7*165.6} alt="Whissker" /></image>
        </div>

*/



import Image from "next/image";

export default function Home() {
  return (

<body>
    
      <head>
      
        <title>Whissker</title> 
      </head>
    
      
    <header>
      

    
        <div className="title">
          <section id = "home">
          </section>
            <h1 className="flex min-h-screen flex-col items-center" >WHISSKER
            <img src="/whissker-logo.jpeg" alt="Logo" width={2*56.3} height={2*35.2}>
            </img>
            </h1>
        </div>
        <nav>
            <ul className="flex min-h-screen flex-col items-center justify-between p-24">
                <li><a href="#bio">The Band</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#gigs">Gigs/Tickets</a></li>
                <li><a href="#merch">Merch</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
        </nav>

    </header>


    <main>

        <section id="bio">
            <div className="pictureL">
              <img src="/paul.JPG" width={3*106.6} height={3*160.0} alt="Paul" />
            </div>
            <div className="textL">
              <h2>The Band</h2>
              <p>Glasgow-based indie/alt-rock band with diverse musical influences ranging from classic rock bands like Led Zeppelin to alternative to classic Brit-pop like the Killers to modern heavy metal, shoe-gaze, and many more. The result of this blend of various genres is a unique and experimental sound audiences can sing, dance, mosh, and cry along to. Come to one of our shows to experience this elctrifying blah blah blah</p>
              <nav>
              <ul className="home">
                <li><a href="#home">Back to Top</a></li>
              </ul>      
              </nav>
                     
            </div>
            
              
          
        </section>

        <section id="news">
            <div className="pictureR">
              <img src="/scott.JPG" width={3*204.8} height={3*136.6} alt="Scott" />
            </div>
            <div className="textR">
              <h2>News</h2>
              <p>Medium sized things coming... Be sure to be at our next gig at SWG3 Poetry Club to be the first to hear...</p>
              <nav>
              <ul className="home">
                <li><a href="#home">Back to Top</a></li>
              </ul>      
              </nav>
            </div>
        </section>
        
        <section id="gigs">
            <div className="pictureL">
              <img src="/jack.JPG" width={3*136.6} height={3*204.8} alt="Jack"/>
            </div>
            <div className="textL"> 
              <h2>Upcoming Gigs</h2>
              <p>September 6th - SWG3 Poetry Club ***ABOVE AVERAGE SIZED ANNOUCEMENT COMING***</p>
              <p>Purchase your tickets using the link below and stay tuned for more upcoming gigs!</p>
              <a href="https://linktr.ee/whissker?fbclid=PAZXh0bgNhZW0CMTEAAaba_qccegyTDrtW5YS-tyWEjoQv4Adkn34cWbnUZnQlJt7mn5QAYyK5siE_aem_MW5vdJjnvXyHMlvQ5MeLYg">
              Linktree</a>
              <h2>Previous Gigs of Note</h2>
              <p>April 4th - McChuilles (HEADLINED)</p>
              <p>July 20th - King Tut's Wah Wah Hut</p>
              <nav>
              <ul className="home">
                <li><a href="#home">Back to Top</a></li>
              </ul>      
              </nav>
            </div>
        </section> 

        <section id="merch">
            <div className="pictureR">
              <img src="/josh.JPG" width={3*156.6} height={3*204.8} alt="Josh" />
            </div>
            <div className="textR">
              <h2>Merchandise</h2>
              <p>Merch coming soon!</p>
              <p>(May or may not be our own brand of unisex underwear...)</p>
              <nav>
              <ul className="home">
                <li><a href="#home">Back to Top</a></li>
              </ul>      
              </nav>
            </div>
        </section>

        <section id="contact">
            <div className="pictureL">
              <img src="/whole band copy.JPG" width={3*138.4} height={3*136.6} alt="Whissker" />
            </div>
            <div className="textL">
              <h2>Contact Us</h2>
              <p>Get in touch with us at:</p>
              <p>Email: whisskerband@gmail.com</p>
              <p>And be sure to follow us at:</p>
              <a href="https://www.instagram.com/whissker_band?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram: @whissker_band</a>
              <p>Facebook: @whissker_band</p>
              <nav>
              <ul className="home">
                <li><a href="#home">Back to Top</a></li>
              </ul>      
              </nav>
            </div>
        </section>
   
    </main>
    
    <footer>
        <p>&copy; 2024 Whissker Band. All rights reserved.</p>
    </footer>
</body>

  )
}