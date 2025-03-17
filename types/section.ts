import { PortableTextBlock } from "@portabletext/types";

export interface ListItem {
  text: string;
  icon: string;
}

export interface SectionData {
  title: string;
  description: PortableTextBlock[];
  image: {
    asset: {
      _ref: string;
    };
  };
  sectionId: {
    current: string;
  };
}
