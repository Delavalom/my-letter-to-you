import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="absolute inset-auto h-96 w-96 scale-150 bg-orange-200 opacity-20 blur-3xl"></div>

      <div className="absolute inset-auto h-96 w-96 translate-x-full scale-150 bg-green-200 opacity-20 blur-3xl"></div>
      <div className="w-full">
        <div className="scrollbar-hide mt-14 flex w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll scroll-smooth px-10">
          <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]">
            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
              <h2 className="mt-4 text-xl font-bold text-white">Cangu</h2>
              <p className="text-sm text-white/50">Indonesia</p>
            </div>
            <Image
              fill
              src="/public/un_verano_sin_ti.webp"
              alt="image"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]">
            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
              <h2 className="mt-4 text-xl font-bold text-white">New York</h2>
              <p className="text-sm text-white/50">United States</p>
            </div>
            <Image
              fill
              src="/public/perdoname.jpeg"
              alt="image"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-blue-100 sm:w-[44%] md:w-[30%]">
            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
              <h2 className="mt-4 text-xl font-bold text-white">London</h2>
              <p className="text-sm text-white/50">United Kingdom</p>
            </div>
            <Image
              fill
              src="/public/mala_mia.jpeg"
              alt="image"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-green-100 sm:w-[44%] md:w-[30%]">
            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
              <h2 className="mt-4 text-xl font-bold text-white">Bali</h2>
              <p className="text-sm text-white/50">Indonesia</p>
            </div>
            <Image
              fill
              src="/public/todo_de_ti.jpeg"
              alt="image"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-rose-100 sm:w-[44%] md:w-[30%]">
            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
              <h2 className="mt-4 text-xl font-bold text-white">
                Times Square
              </h2>
              <p className="text-sm text-white/50">Singapore</p>
            </div>
            <Image
              fill
              src="/public/x_ultima_vez.jpeg"
              alt="image"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-yellow-100 sm:w-[44%] md:w-[30%]">
            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
              <h2 className="mt-4 text-xl font-bold text-white">Bangkok</h2>
              <p className="text-sm text-white/50">Thailand</p>
            </div>
            <Image
              fill
              src="/public/amores_como_el_nuestro.jpeg"
              alt="image"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-red-100 sm:w-[44%] md:w-[30%]">
            <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
              <h2 className="mt-4 text-xl font-bold text-white">Latina</h2>
              <p className="text-sm text-white/50">South America</p>
            </div>
            <Image
              fill
              src="/public/dinero.jpeg"
              alt="image"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export const Card = () => {
  return (
    <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-red-100 sm:w-[44%] md:w-[30%]">
      <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
        <h2 className="mt-4 text-xl font-bold text-white">Latina</h2>
        <p className="text-sm text-white/50">South America</p>
      </div>
      <Image
        fill
        src="/public/chivirika.jpeg"
        alt="image"
        className="h-full w-full rounded-xl object-cover"
      />
    </div>
  );
};
