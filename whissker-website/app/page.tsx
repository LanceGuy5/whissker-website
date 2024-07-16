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
            <h1>Whissker</h1>
            
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
        <div className="logo">
          <Image src="/whissker-logo.png" width={563} height={352} alt={"Whissker Logo"}/>
        </div>
    </header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

     
        <section id="gigs">
            <h2>Upcoming Gigs</h2>
            <p>Stay tuned for our upcoming gigs!</p>

        </section> 
        <section id="merch">
            <h2>Merchandise</h2>
            <p>Check out our latest merch!</p>
         
        </section>
        <section id="pictures">
            <h2>Pictures</h2>
            <p>Explore our gallery!</p>
   
        </section>
        <section id="calendar">
            <h2>Calendar</h2>
            <p>Find our event schedule here.</p>
      
        </section>
        <section id="contact">
            <h2>Contact Us</h2>
            <p>Get in touch with us!</p>
          
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Whissker Band. All rights reserved.</p>
    </footer>
</body>

  )
}