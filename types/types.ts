export interface Faq {
    faq: string;
    answer: string;
  }
  
export interface SportItem {
    _id: string;
    title: string;
    intro: string;
    atSchoolTitle: string;
    atSchoolIntro: string;
    images: string[];
    faqs: Faq[];
    sectionId: {
      current: string;
    };
}
  
export interface SwiperComponentProps {
    images: string[];
  }

  // lib/types.ts
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
  intro: string;
  atSchoolTitle: string;
  atSchoolIntro: string;
  images: SportImage[];
  faqs: SportFAQ[];
  sportId: {
    current: string;
  };
}

export interface GalleryData {
    title: string;
    images: string[];
    category: string;
  }
  
  // types/index.ts
export interface SocialLink {
  platform: string;
  url: string;
}

export interface CurricularData {
  title: string;
  subtitle: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  socialLinks: SocialLink[];
}

  // types/index.ts
  export interface BlogPost {
    title: string;
    excerpt: string;
    slug: {
      current: string;
    };
    featuredImage: {
      asset: {
        url: string;
      };
    };
    publishedAt: string;
  }
  
  export interface BlogPostDetails {
    title: string;
    article: any; // Rich text content (array of blocks)
    featuredImage: {
      asset: {
        url: string;
      };
    };
    publishedAt: string;
  }

  // types/index.ts
export interface EventData {
  title: string;
  subtitle?: string;
  description: string;
  images: {
    asset: {
      url: string;
    };
  }[];
  relatedPosts: {
    title: string;
    slug: {
      current: string;
    };
  }[];
}

export interface BlogPostData {
  title: string;
  slug: {
    current: string;
  };
}

export interface DocumentData {
  id: number;
  info: string;
  file: {
    asset: {
      url: string;
    };
  };
}

export interface GeneralInformation {
  srNo: number;
  information: string;
  detail: string;
}

export interface MandatoryDisclosureData {
  title: string;
  description: string;
  documents: DocumentData[];
  generalInformationTable: GeneralInformation[];
}

export interface MandatoryDisclosureData {
  title: string;
  description: string;
  tables: Table[];
}

interface Table {
  order: number;
  tableName: string;
  tableType: "text" | "file" | "link";
  content: TableContent[];
}

interface TableContent {
  srNo: number;
  information: string;
  detail?: string; // For text table
  file?: {
    asset: {
      url: string;
    };
  }; // For file table
  link?: string; // For link table
}


export interface BlogDataX {
  title: string;
  article: any[]; // Assuming Portable Text content from Sanity
  featuredImage?: {
    asset?: {
      url: string;
    };
  };
  publishedAt: string;
}

