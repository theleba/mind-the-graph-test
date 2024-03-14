"use client";

import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./components/Sections/Hero"), {
  ssr: false,
});
const Functionalities = dynamic(
  () => import("./components/Sections/Functionalities"),
  { ssr: false },
);

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen overflow-x-hidden ">
      <Hero />
      <Functionalities />
    </main>
  );
}
