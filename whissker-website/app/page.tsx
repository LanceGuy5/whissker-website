import Image from "next/image";

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
