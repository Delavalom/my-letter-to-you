import Image from "next/image";
import data, { type CardProperties } from "./data";
import { FC } from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black overflow-x-auto scroll-smooth snap-mandatory snap-x relative gap-6">
      {data.map((c) => (
        <Card key={c.content} content={c.content} image={c.image} />
      ))}
    </div>
  );
}

export const Card: FC<CardProperties> = ({ content, image }) => {
  return (
    <div className="snap-center shrink-0 first:pl-8 last:pr-8 w-full h-full bg-black p-6">
      
    </div>
  );
};
