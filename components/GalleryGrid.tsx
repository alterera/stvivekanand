"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Gallery,
  GalleryGrid as MasonryGalleryGrid,
  GalleryImage,
} from "@/components/ui/shared-element-gallery";
import { GalleryData } from "@/types/index";

const CATEGORIES = ["sports", "events", "cultural", "academics"] as const;
const IMAGES_PER_PAGE = 12;

type Photo = { id: string; url: string; alt: string };

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export default function GalleryGrid({ items }: { items: GalleryData[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const photos = useMemo<Photo[]>(
    () =>
      items
        .filter((item) => !selectedCategory || item.title === selectedCategory)
        .flatMap((item) =>
          (item.images ?? []).filter(Boolean).map((url, index) => ({
            id: `${item.title}-${index}-${url.slice(-24)}`,
            url,
            alt: `${capitalize(item.title || "School")} photo ${index + 1} at St. Vivekanand School`,
          })),
        ),
    [items, selectedCategory],
  );

  const totalPages = Math.max(1, Math.ceil(photos.length / IMAGES_PER_PAGE));
  const pageStart = (currentPage - 1) * IMAGES_PER_PAGE;
  const paginatedPhotos = photos.slice(pageStart, pageStart + IMAGES_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <>
      <div
        className="mb-10 flex flex-wrap justify-center gap-4 text-sm font-semibold"
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
              className={`rounded-md px-4 py-2 ${isActive ? "bg-[#85193C] text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category ? capitalize(category) : "All"}
            </button>
          );
        })}
      </div>

      {paginatedPhotos.length > 0 ? (
        <Gallery>
          <MasonryGalleryGrid>
            {paginatedPhotos.map((photo) => (
              <GalleryImage
                key={photo.id}
                id={photo.id}
                src={photo.url}
                alt={photo.alt}
              />
            ))}
          </MasonryGalleryGrid>
        </Gallery>
      ) : (
        <p className="py-12 text-center text-gray-500">No photos available in this category.</p>
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
    </>
  );
}
