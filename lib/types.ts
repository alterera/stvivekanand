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