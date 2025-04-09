export * from "./section";
export * from './types'

export interface WhyChooseUs {
  title: string;
  description: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  order: number;
}