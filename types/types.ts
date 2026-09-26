import { PortableTextBlock } from "@portabletext/types";

export interface SportImage {
  asset: {
    _id: string;
    url: string;
  };
}

export interface SportFAQ {
  faq: string;
  answer: string;
}

export interface Sport {
  _id: string;
  title: string;
  intro: PortableTextBlock[];
  atSchoolTitle: string;
  atSchoolIntro: PortableTextBlock[];
  images?: SportImage[];
  faqs?: SportFAQ[];
  sportId: {
    current: string;
  };
}

/** `title` holds the category value (sports, events, cultural, academics). */
export interface GalleryData {
  title: string;
  images: string[];
}

export interface BlogPost {
  title: string;
  excerpt?: string;
  slug: {
    current: string;
  };
  featuredImage?: {
    asset?: {
      url: string;
    };
  };
  publishedAt: string;
}

interface TableContent {
  srNo: number;
  information: string;
  detail?: string;
  file?: {
    asset: {
      url: string;
    };
  };
  link?: string;
}

interface Table {
  order: number;
  tableName: string;
  tableType: "text" | "file" | "link";
  content: TableContent[];
}

export interface MandatoryDisclosureData {
  title: string;
  description: string;
  tables: Table[];
}
