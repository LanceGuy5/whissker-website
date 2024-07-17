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
            <h1 className="flex min-h-screen flex-col items-center" >Whissker</h1>
        </div>
        <nav>
            <ul className="flex min-h-screen flex-col items-center justify-between p-24">
                <li><a href="#gigs">Gigs</a></li>
                <li><a href="#merch">Merch</a></li>
                <li><a href="#pictures">Pictures</a></li>
                <li><a href="#calendar">Calendar</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div className="picture"> 
            <image> <img src="/whole band color 2.JPG" width={7*220.8} height={7*165.6} alt="Whissker" /></image>
        </div>
        


    </header>


    <main>
        
        <section id="gigs">
            <div className="pictureR">
              <img src="/jack.JPG" width={3*136.6} height={3*204.8} alt="Jack"/>
            </div>
            <div className="textR"> 
              <h2>Upcoming Gigs</h2>
              <p>July 20th - King Tut's Wah Wah Hut</p>
              <p>Purchase your tickets in the ticket link below and stay tuned for more upcoming gigs!</p>
              <a href="https://linktr.ee/whissker?fbclid=PAZXh0bgNhZW0CMTEAAaba_qccegyTDrtW5YS-tyWEjoQv4Adkn34cWbnUZnQlJt7mn5QAYyK5siE_aem_MW5vdJjnvXyHMlvQ5MeLYg">
              Linktree</a>
            </div>
        </section> 

        <section id="merch">
            <div className="pictureL">
              <img src="/josh.JPG" width={3*156.6} height={3*204.8} alt="Josh" />
            </div>
            <div className="textL">
              <h2>Merchandise</h2>
              <p>Check out our latest merch!</p>
            </div>
        </section>

        <section id="pictures">
            <div className="pictureR">
              <img src="/scott.JPG" width={3*204.8} height={3*136.6} alt="Scott" />
            </div>
            <div className="textR">
              <h2>Pictures</h2>
              <p>Explore our gallery!</p>
            </div>
        </section>

        <section id="calendar">
            <div className="pictureL">
              <img src="/paul.JPG" width={3*106.6} height={3*160.0} alt="Paul" />
            </div>
            <div className="textL">
              <h2>Calendar</h2>
              <p>Find our event schedule and ticket links here.</p>
              <a href="https://linktr.ee/whissker?fbclid=PAZXh0bgNhZW0CMTEAAaba_qccegyTDrtW5YS-tyWEjoQv4Adkn34cWbnUZnQlJt7mn5QAYyK5siE_aem_MW5vdJjnvXyHMlvQ5MeLYg">
              Linktree</a>
            </div>
        </section>

        <section id="contact">
            <div className="pictureR">
              <img src="/whole band.JPG" width={3*204.8} height={3*136.6} alt="Whissker" />
            </div>
            <div className="textR">
              <h2>Contact Us</h2>
              <p>Get in touch with us at:</p>
              <p>Email: whisskerband@gmail.com</p>
              <p>Instagram: @whissker_band</p>
              <p>Facebook: @whissker_band</p>
            </div>
        </section>
   
    </main>
    
    <footer>
        <p>&copy; 2024 Whissker Band. All rights reserved.</p>
    </footer>
</body>

  )
}