"use client";

import Image from "next/image";

interface EventPostProps {
  title: string;
  description: string;
  images: { asset: { url: string } }[];
}

function bentoClass(index: number, total: number): string {
  if (total === 1) return "col-span-2 row-span-2 min-h-[280px] md:min-h-[360px]";
  if (total === 2) return "col-span-1 row-span-2 min-h-[200px] md:min-h-[280px]";
  if (index === 0) return "col-span-2 row-span-2 min-h-[220px] md:min-h-[320px]";
  if (index === 1) return "col-span-1 row-span-1 min-h-[160px] md:min-h-[200px]";
  if (index === 2) return "col-span-1 row-span-1 min-h-[160px] md:min-h-[200px]";
  return "col-span-1 row-span-1 min-h-[160px] md:min-h-[180px]";
}

const EventPost = ({ title, description, images }: EventPostProps) => {
  return (
    <article className="w-full space-y-8">
      {images.length > 0 && (
        <div
          className="grid grid-cols-2 gap-3 md:gap-4 auto-rows-fr rounded-2xl bg-[#fff9f5] p-3 md:p-4 ring-1 ring-[#85193C]/10"
          aria-label={`Photos from ${title}`}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl bg-white shadow-sm ${bentoClass(index, images.length)}`}
            >
              <Image
                src={image.asset.url}
                alt={`${title} photo ${index + 1}`}
                fill
                fetchPriority={index === 0 ? "high" : "auto"}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      )}

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <p className="whitespace-pre-line text-base leading-relaxed text-gray-700 md:text-lg">
          {description}
        </p>
      </div>
    </article>
  );
};

export default EventPost;
