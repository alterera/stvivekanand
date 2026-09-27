"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";

function truncateLabel(label: string, maxLength: number) {
  if (label.length <= maxLength) return label;
  return `${label.slice(0, maxLength - 3)}...`;
}

function formatSegment(segment: string) {
  return segment.replace(/-/g, " ");
}

const DynamicBreadcrumb = ({
  currentLabel,
  maxLabelLength = 48,
}: {
  currentLabel?: string;
  maxLabelLength?: number;
}) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(pathname, currentLabel)} />
      <Breadcrumb className="mb-2">
        <BreadcrumbList className="flex-nowrap overflow-hidden">
          <BreadcrumbItem className="shrink-0">
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;
            const rawLabel = isLast && currentLabel ? currentLabel : formatSegment(segment);
            const displayLabel = truncateLabel(rawLabel, maxLabelLength);

            return (
              <React.Fragment key={href}>
                <BreadcrumbSeparator className="shrink-0" />
                <BreadcrumbItem className="min-w-0 max-w-[12rem] sm:max-w-xs">
                  {isLast ? (
                    <BreadcrumbPage
                      className="block truncate capitalize"
                      title={rawLabel}
                    >
                      {displayLabel}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild className="block truncate capitalize">
                      <Link href={href} title={rawLabel}>
                        {displayLabel}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default DynamicBreadcrumb;
