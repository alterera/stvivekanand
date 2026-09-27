import Image from "next/image";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { PortableTextComponents } from "@/components/PortableTextComponent";

interface BlogPostProps {
  title: string;
  article: PortableTextBlock[];
  featuredImage: string;
}

export default function BlogPost({ title, article, featuredImage }: BlogPostProps) {
  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm p-6 md:p-8">
      {featuredImage && (
        <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden rounded-lg">
          <Image
            src={featuredImage}
            alt={title}
            fill
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, 75vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="prose prose-neutral max-w-none">
        <PortableText value={article} components={PortableTextComponents} />
      </div>
    </div>
  );
}
