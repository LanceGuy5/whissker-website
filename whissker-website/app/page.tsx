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

<html>

<head>
  <title>Whissker</title>
</head> 
  
<body>
     
  <header>
    
    <div className="title">
      <section id = "home"></section>
            <h1 className="flex min-h-screen flex-col items-center" >WHISSKER
            <Image src="/whissker-logo.jpeg" alt="Logo" width={2*56.3} height={2*35.2}>
            </Image>
            </h1>
        </div>
        <nav>
            <ul className="flex min-h-screen flex-col items-center justify-between p-24">
                <li><a href="#bio">THE BAND</a></li>
                <li><a href="#news">NEWS</a></li>
                <li><a href="#gigs">GIGS/TICKETS</a></li>
                <li><a href="#merch">MERCH</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            
        </nav>

</header>

    <main>

        <section id="bio">
            <div className="pictureL">
              <Image src="/paul.JPG" width={3*106.6} height={3*160.0} alt="Paul" className="curve"/>
            </div>
            <div className="textL">
              <h2>THE BAND</h2>
              <p>Glasgow-based indie/alt-rock band with diverse musical influences that result in a unique and somewhat experimental sound with an electrifying live atmosphere. Be sure to come to one of our gigs to see one of Glasgows most creative up-and-coming bands!</p>
              <nav>
              <ul className="home">
                <li><a href="#home">Back to Top</a></li>
              </ul>      
              </nav>
                     
            </div>   
          
        </section>

        <section id="news">
            <div className="pictureR">
              <Image src="/scott.JPG" width={3*204.8} height={3*136.6} alt="Scott" className="curve"/>
            </div>
            <div className="textR">
              <h2>NEWS</h2>
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
              <Image src="/jack.JPG" width={3*136.6} height={3*204.8} alt="Jack" className="curve"/>
            </div>
            <div className="textL"> 
              <h2>UPCOMING GIGS</h2>
              <p>September 6th - SWG3 Poetry Club ***ABOVE AVERAGE SIZED ANNOUCEMENT COMING***</p>
              <p>October 3rd - Bungalow (Paisley)</p>
              <p>Purchase your tickets using the link below and stay tuned for more upcoming gigs!</p>
              <a href="https://linktr.ee/whissker?fbclid=PAZXh0bgNhZW0CMTEAAaba_qccegyTDrtW5YS-tyWEjoQv4Adkn34cWbnUZnQlJt7mn5QAYyK5siE_aem_MW5vdJjnvXyHMlvQ5MeLYg">
              Linktree</a>
              <h2>PREVIOUS GIGS OF NOTE</h2>
              <p>April 4th - McChuilles (HEADLINED)</p>
              <p>July 20th - King Tuts Wah Wah Hut</p>
              <nav>
              <ul className="home">
                <li><a href="#home">Back to Top</a></li>
              </ul>      
              </nav>
            </div>
        </section> 

        <section id="merch">
            <div className="pictureR">
              <Image src="/josh.JPG" width={3*156.6} height={3*204.8} alt="Josh" className="curve"/>
            </div>
            <div className="textR">
              <h2>MERCHANDISE</h2>
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
              <Image src="/whole band copy.JPG" width={3*138.4} height={3*136.6} alt="Whissker" className="curve"/>
            </div>
            <div className="textL">
              <h2>CONTACTS</h2>
              <p>Get in touch with us at</p>
              <p>Email: <a href="mailto:whisskerband@gmail.com">whisskerband@gmail.com</a></p>
              <p>And be sure to follow us on all our social media platforms</p>
              <p>Instagram: <a href="https://www.instagram.com/whissker_band?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">@whissker_band</a></p>
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

</html>

  )
}