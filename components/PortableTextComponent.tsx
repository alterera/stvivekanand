import React from 'react';
import Link from 'next/link';

export const PortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <img
        src={value.asset.url}
        alt={value.alt || ' '}
        className="my-4 rounded-lg w-full"
      />
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold my-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-medium my-2">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-base leading-relaxed my-2">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <Link
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {children}
      </Link>
    ),
  },
};
