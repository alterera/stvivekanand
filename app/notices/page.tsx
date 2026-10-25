import Link from "next/link";
import { sanityFetch } from "@/lib/sanity";
import { ALL_NOTICES_QUERY } from "@/lib/queries";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";

type NoticeListItem = {
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
};

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });

export default async function NoticesPage() {
  const notices = await sanityFetch<NoticeListItem[]>({
    query: ALL_NOTICES_QUERY,
    tags: ["notice"],
  }).catch(() => [] as NoticeListItem[]);

  return (
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <DynamicBreadcrumb />
        <header className="py-5 text-center">
          <h1 className="pb-2 text-3xl font-bold text-[#1D3557]">Notice Board</h1>
          <p className="text-sm text-gray-600">Official circulars and announcements from the school.</p>
        </header>

        {notices.length > 0 ? (
          <ul className="mt-10 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white shadow-sm">
            {notices.map((notice) => (
              <li key={notice.slug.current}>
                <Link
                  href={`/notices/${notice.slug.current}`}
                  className="flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-[#fff9f5] sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold text-[#1D3557]">{notice.title}</h2>
                    {notice.excerpt && (
                      <p className="mt-1 line-clamp-2 text-sm text-gray-600">{notice.excerpt}</p>
                    )}
                  </div>
                  <time
                    dateTime={notice.publishedAt}
                    className="shrink-0 text-sm font-medium text-[#85193C]"
                  >
                    {formatDate(notice.publishedAt)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-12 text-center text-gray-500">No notices published yet.</p>
        )}
      </div>
    </section>
  );
}
