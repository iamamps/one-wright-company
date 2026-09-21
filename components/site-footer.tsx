import { BRAND_SITES } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="font-display font-bold text-white text-lg">
            One Wright Company
          </p>
          <p className="text-sm mt-1">
            &copy; {new Date().getFullYear()} One Wright Company. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {BRAND_SITES.map((b) =>
            b.url ? (
              <a
                key={b.name}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffd23f] transition-colors"
              >
                {b.name}
              </a>
            ) : (
              <span key={b.name} className="text-slate-500">
                {b.name}
              </span>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
