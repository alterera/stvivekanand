import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PortableTextReactComponents } from '@portabletext/react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { urlFor } from '@/lib/sanity'; // Import the urlFor function

export const PortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: { asset: SanityImageSource; alt?: string } }) => (
      <div className="my-4 rounded-lg overflow-hidden">
        <Image
          src={urlFor(value.asset)} // Use urlFor directly
          alt={value.alt || ' '}
          width={800}
          height={450}
          className="object-cover w-full"
        />
      </div>
    ),
  },
  block: {
    h1: (props) => (
      <h1 className="text-4xl font-bold my-4">{props.children}</h1>
    ),
    h2: (props) => (
      <h2 className="text-3xl font-semibold my-3">{props.children}</h2>
    ),
    h3: (props) => (
      <h3 className="text-2xl font-medium my-2">{props.children}</h3>
    ),
    normal: (props) => (
      <p className="text-base leading-relaxed my-2">{props.children}</p>
    ),
    blockquote: (props) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {props.children}
      </blockquote>
    ),
  },
  marks: {
    link: (props) => {
      // Ensure value and href exist
      if (!props.value || !props.value.href) {
        return <span>{props.children}</span>; // Fallback if href is missing
      }

      return (
        <Link
          href={props.value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {props.children}
        </Link>
      );
    },
  },
};