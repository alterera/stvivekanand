import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableTextReactComponents } from "@portabletext/react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "@/lib/sanity"; // Import the urlFor function

export const PortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: { asset: SanityImageSource; alt?: string } }) => (
      <div className="my-4 rounded-lg overflow-hidden">
        <Image
          src={urlFor(value.asset)}
          alt={value.alt || " "}
          width={800}
          height={450}
          className="object-cover w-full"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold my-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium my-2">{children}</h3>,
    normal: ({ children }) => <p className="text-base leading-relaxed my-2">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      if (!value || !value.href) {
        return <span>{children}</span>;
      }
      return (
        <Link
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside my-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside my-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-2 py-2">
        <span className="text-[#85193C]">●</span> {children}
      </li>
    ),
    number: ({ children }) => <li className="ml-4">{children}</li>,
  },
};
