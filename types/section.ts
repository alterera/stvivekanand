export interface ListItem {
  text: string;
  icon: string;
}

export interface SectionData {
  title: string;
  description: string;
  listContent: ListItem[];
  image: {
    asset: {
      _ref: string;
    };
  };
  sectionId: {
    current: string;
  };
}
