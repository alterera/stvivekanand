"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  years: number[];
  selectedYear: number;
};

export function EventsYearFilter({ years, selectedYear }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onYearChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("year", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  if (years.length === 0) return null;

  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
      <span className="text-sm font-medium text-[#1D3557]">Filter by year</span>
      <Select value={String(selectedYear)} onValueChange={onYearChange}>
        <SelectTrigger className="w-[140px] border-[#85193C]/30 bg-white">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={String(year)}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
