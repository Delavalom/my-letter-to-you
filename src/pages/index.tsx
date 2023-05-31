import Image from "next/image";
import unVeranoSinTi from "public/un_verano_sin_ti.webp";
import { ChevronFirst, ChevronLast, Heart } from "lucide-react";
import { Pause } from "lucide-react";
import { useCarousel } from "use-carousel-hook";
import { type RefObject } from "react";

export default function Home() {
  const { ref, previous, next, reset } = useCarousel();

  return (
    <main className="w-full h-full flex flex-col gap-6 py-6 px-2 bg-black text-gray-100">
      <div className="flex justify-center items-center gap-2">
        <h2 className="font-medium">Una nota para Thais</h2>
        <Heart className="stroke-green-500" />
      </div>

      <ul
        ref={ref as RefObject<HTMLUListElement>}
        className="w-full flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory scroll-px-10 gap-2"
      >
        <div className="w-full relative shrink-0 snap-start snap-always bg-orange-100">
          <div className="w-full h-full absolute bottom-0 z-10 flex items-center justify-center flex-col bg-gradient-to-t from-black">
            <h2 className="mt-4 text-xl font-bold text-white">New York</h2>
            <p className="text-sm text-white/50">United States</p>
          </div>
          <Image
            src={unVeranoSinTi}
            alt="un verano sin ti"
            className="w-full h-full"
          />
        </div>

        <Image
          src={unVeranoSinTi}
          alt="un verano sin ti"
          className="w-full h-full"
        />

        <Image
          src={unVeranoSinTi}
          alt="un verano sin ti"
          className="w-full h-full"
        />

        <Image
          src={unVeranoSinTi}
          alt="un verano sin ti"
          className="w-full h-full"
        />
      </ul>

      <div className="flex w-full justify-center items-center px-4">
        <h1 className="mt-4 text-xl font-bold text-white">Un verano sin ti</h1>
      </div>
      <div className="flex w-full justify-evenly px-4">
        <button onClick={() => previous()}>
          <ChevronFirst className="border border-white rounded-full p-2 w-12 h-12" />
        </button>
        <Pause className="border border-white rounded-full p-2 w-12 h-12" />
        <button onClick={() => next()}>
          <ChevronLast className="border border-white rounded-full p-2 w-12 h-12" />
        </button>
      </div>
    </main>
  );
}
