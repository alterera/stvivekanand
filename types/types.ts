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
    images: string[];  // Array of image URLs
  }