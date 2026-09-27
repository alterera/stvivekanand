"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GalleryData } from "@/types/index";

const CATEGORIES = ["sports", "events", "cultural", "academics"] as const;
const IMAGES_PER_PAGE = 12;

type Photo = { url: string; alt: string };

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export default function GalleryGrid({ items }: { items: GalleryData[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
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

  const totalPages = Math.max(1, Math.ceil(photos.length / IMAGES_PER_PAGE));
  const pageStart = (currentPage - 1) * IMAGES_PER_PAGE;
  const paginatedPhotos = photos.slice(pageStart, pageStart + IMAGES_PER_PAGE);
  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    if (activeIndex === null) return;

    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index !== null ? (index > 0 ? index - 1 : photos.length - 1) : null,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index !== null ? (index < photos.length - 1 ? index + 1 : 0) : null,
        );
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      lastTriggerRef.current?.focus();
    };
  }, [activeIndex, photos.length]);

  const goToPrevious = () => {
    setActiveIndex((index) =>
      index !== null ? (index > 0 ? index - 1 : photos.length - 1) : null,
    );
  };

  const goToNext = () => {
    setActiveIndex((index) =>
      index !== null ? (index < photos.length - 1 ? index + 1 : 0) : null,
    );
  };

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
        {paginatedPhotos.map((photo, index) => {
          const photoIndex = pageStart + index;
          return (
            <li key={`${photo.url}-${photoIndex}`}>
              <button
                type="button"
                className="block w-full relative rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 focus-visible:scale-105"
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setActiveIndex(photoIndex);
                }}
                aria-label={`Open ${photo.alt}`}
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  width={300}
                  height={200}
                  loading={index < 4 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-auto object-cover"
                />
              </button>
            </li>
          );
        })}
      </ul>

      {photos.length === 0 && (
        <p className="text-center text-gray-500 py-12">No photos available in this category.</p>
      )}

      {photos.length > 0 && totalPages > 1 && (
        <nav
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          aria-label="Gallery pagination"
        >
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              type="button"
              size="sm"
              variant={page === currentPage ? "default" : "outline"}
              className={page === currentPage ? "bg-[#85193C] hover:bg-[#85193C]/90" : ""}
              onClick={() => setCurrentPage(page)}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </Button>
          ))}

          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
          >
            Next
          </Button>
        </nav>
      )}

      {activePhoto && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full flex items-center justify-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Previous image"
              className="hidden md:inline-flex shrink-0 rounded-full bg-black/60 p-3 text-white hover:bg-black"
              onClick={goToPrevious}
            >
              <ChevronLeft size={28} />
            </button>

            <div className="relative flex-1 min-w-0">
              <Image
                src={activePhoto.url}
                alt={activePhoto.alt}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 1024px"
                className="rounded-lg shadow-lg object-contain w-full h-auto max-h-[80vh]"
              />
              <button
                type="button"
                aria-label="Previous image"
                className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                onClick={goToPrevious}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                onClick={goToNext}
              >
                <ChevronRight size={24} />
              </button>
              <p className="mt-3 text-center text-sm text-white/80">
                {activeIndex + 1} of {photos.length}
              </p>
            </div>

            <button
              type="button"
              aria-label="Next image"
              className="hidden md:inline-flex shrink-0 rounded-full bg-black/60 p-3 text-white hover:bg-black"
              onClick={goToNext}
            >
              <ChevronRight size={28} />
            </button>

            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close"
              className="absolute -top-1 right-0 rounded-full bg-black/60 p-2 text-white hover:bg-black"
              onClick={() => setActiveIndex(null)}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
