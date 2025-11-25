import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
     <main className="relative w-full min-h-screen">

      {/* HERO (untouched) */}
      <Hero />

      {/* SLIDER floating over hero */}
      <div className="
        absolute 
        right-10 
        top-1/2 
        -translate-y-1/2 
        w-1/2 
        z-50
      ">
        <ImageSlider />
      </div>

    </main>
  );
}
