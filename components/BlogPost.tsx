"use client";

import Image from 'next/image';
import { PortableText, PortableTextBlock } from '@portabletext/react';
import { PortableTextComponents } from '@/components/PortableTextComponent';

interface BlogPostProps {
  title: string;
  article: PortableTextBlock[];
  featuredImage: string;
  publishedAt: string;
  formattedDate: string;
}

export default function BlogPost({
  title,
  article,
  featuredImage,
  formattedDate,
}: BlogPostProps) {
  return (
    <div className="w-full">

      {featuredImage && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
    <p className="text-gray-500 mb-4 text-sm">
        Published on: {formattedDate}
      </p>
      <div className="prose">
        <p className="text-2xl font-semibold mb-2">{title}</p>
        <PortableText value={article} components={PortableTextComponents} />
      </div>
    </div>
  );
}
