import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Welcome to Whissker!</h1>
      <Image src="/whissker-logo.png" width={200} height={200} alt="Whissker Logo" />
      <p className="text-center text-lg">The best place to find your next furry friend!</p>
    </main>
  );
}
