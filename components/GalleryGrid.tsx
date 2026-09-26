"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { GalleryData } from "@/types/index";

const CATEGORIES = ["sports", "events", "cultural", "academics"] as const;

type Photo = { url: string; alt: string };

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export default function GalleryGrid({ items }: { items: GalleryData[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const photos = useMemo<Photo[]>(
    () =>
      items
        .filter((item) => !selectedCategory || item.title === selectedCategory)
        .flatMap((item) =>
          (item.images ?? []).filter(Boolean).map((url, index) => ({
            url,
            alt: `${capitalize(item.title || "School")} photo ${index + 1} at St. Vivekanand School`,
          })),
        ),
    [items, selectedCategory],
  );

  useEffect(() => {
    if (!activePhoto) return;

    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhoto(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      lastTriggerRef.current?.focus();
    };
  }, [activePhoto]);

  return (
    <>
      <div
        className="flex gap-4 justify-center mb-10 text-sm font-semibold flex-wrap"
        role="group"
        aria-label="Filter photos by category"
      >
        {[null, ...CATEGORIES].map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category ?? "all"}
              type="button"
              aria-pressed={isActive}
              className={`px-4 py-2 rounded-md ${isActive ? "bg-[#85193C] text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category ? capitalize(category) : "All"}
            </button>
          );
        })}
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <li key={`${photo.url}-${index}`}>
            <button
              type="button"
              className="block w-full relative rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 focus-visible:scale-105"
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget;
                setActivePhoto(photo);
              }}
              aria-label={`Open ${photo.alt}`}
            >
              <Image
                src={photo.url}
                alt={photo.alt}
                width={300}
                height={200}
                loading={index < 8 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full h-auto object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative max-w-3xl w-full p-4" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activePhoto.url}
              alt={activePhoto.alt}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 768px"
              className="rounded-lg shadow-lg object-contain w-full h-auto"
            />
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close"
              className="absolute top-6 right-6 rounded-full bg-black/60 p-2 text-white hover:bg-black"
              onClick={() => setActivePhoto(null)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
