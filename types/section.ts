export interface SectionData {
  title: string;
  description: string;
  listContent: string[];
  image?: {
    asset: {
      _ref?: string;
      url?: string;
    };
  };
  sectionId?: {
    current: string;
  };
}

export interface FacilityData {
  title: string;
  description: string;
  listContent: string[];
  image: { asset: { url: string } };
  sectionId: { current: string };
}
