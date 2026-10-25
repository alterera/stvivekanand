import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { CircleArrowRight } from "lucide-react";
import { PortableTextComponents as baseComponents } from "@/components/PortableTextComponent";

const facilityListComponents = {
  ...baseComponents,
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="my-4 space-y-3">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="my-4 list-decimal list-inside space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-3">
        <CircleArrowRight className="mt-0.5 h-5 w-5 shrink-0 fill-[#E85D04] text-white" aria-hidden="true" />
        <span className="font-semibold text-[#1D3557]">{children}</span>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="ml-4">{children}</li>
    ),
  },
};

export function FacilityPortableText({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={facilityListComponents} />;
}
