/* eslint-disable @next/next/no-img-element */
import { ChevronFirst, ChevronLast, Heart, Pause } from "lucide-react";
import Image from "next/image";
import { type RefObject } from "react";
import { useCarousel } from "use-carousel-hook";
import data from "../data";

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
        className="w-full flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory gap-2"
      >
        {data.map((item) => (
          <div
            key={item.content}
            className="w-full relative shrink-0 snap-start snap-always bg-black"
          >
            <div className="w-full h-full absolute bottom-0 z-10 flex items-center justify-center flex-col bg-gradient-to-t from-black">
              <h2 className="mt-4 text-xl font-bold text-white">{item.content}</h2>
              {/* <p className="text-sm text-white/50">United States</p> */}
            </div>
            {item.image && <Image
              src={item.image}
              alt="un verano sin ti"
              priority={true}
              className="w-full h-full object-cover"
            />}
          </div>
        ))}
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
