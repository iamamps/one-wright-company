import Image from "next/image";
import { ExternalLink, Clock } from "lucide-react";
import { BRAND_SITES, IMAGES } from "@/lib/constants";

export function BrandsSection() {
  return (
    <section id="brands" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-display font-bold text-[#f4a90a] text-sm tracking-wide uppercase mb-2">
          Our Family of Brands
        </p>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-800 max-w-2xl">
          One hub. Three brands making an impact.
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          One Wright Company is proud to connect you with our network of
          brands — tap a card below to visit each site.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {BRAND_SITES.map((brand) => {
            const CardInner = (
              <>
                <div className="h-40 w-full rounded-2xl bg-[#fbfaf3] shadow-inner flex items-center justify-center overflow-hidden p-5">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={320}
                    height={320}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-slate-800">
                  {brand.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{brand.tagline}</p>
                {brand.url ? (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[#1c7fb8] font-bold text-sm group-hover:gap-2.5 transition-all">
                    Visit site <ExternalLink className="h-4 w-4" />
                  </span>
                ) : (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-slate-400 font-bold text-sm">
                    <Clock className="h-4 w-4" /> Website coming soon
                  </span>
                )}
              </>
            );

            if (brand.url) {
              return (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border-2 border-[#eaf6fd] bg-[#fbfaf3] p-6 flex flex-col items-center text-center hover:border-[#4fb3e8] hover:shadow-xl transition-all"
                >
                  {CardInner}
                </a>
              );
            }

            return (
              <div
                key={brand.name}
                className="rounded-3xl border-2 border-dashed border-[#e5e0cf] bg-[#fbfaf3] p-6 flex flex-col items-center text-center"
              >
                {CardInner}
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl overflow-hidden relative">
          <div className="relative aspect-[21/9] sm:aspect-[3/1]">
            <Image
              src={IMAGES.community}
              alt="One Wright Company community collaboration"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <p className="font-display font-bold text-white text-xl sm:text-2xl max-w-md">
                Connecting Businesses. Creating Opportunities. Building the Future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
