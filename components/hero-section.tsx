import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { ArrowRight, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden owc-sun-texture">
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-14 sm:pt-16 sm:pb-20 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff2c9] text-[#a5750a] font-bold text-sm px-4 py-1.5 mb-5">
            <Zap className="h-4 w-4" /> Orlando, Florida
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight text-slate-800">
            Connecting Businesses.{" "}
            <span className="text-[#1c7fb8]">Creating Opportunities.</span>{" "}
            <span className="text-[#f4a90a]">Building the Future.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            One Wright Company is a marketing, business-connectivity, and
            community-focused hub helping businesses, organizations, and
            individuals connect, grow, and succeed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-[#1c7fb8] text-white font-bold text-base px-6 py-3.5 shadow-lg shadow-blue-200 hover:bg-[#166690] active:scale-95 transition-all"
            >
              Explore Our Services <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#brands"
              className="inline-flex items-center gap-2 rounded-full bg-[#ffd23f] text-slate-800 font-bold text-base px-6 py-3.5 shadow-lg shadow-yellow-100 hover:bg-[#f4c000] active:scale-95 transition-all"
            >
              Meet Our Brands
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-3 rounded-[2rem] owc-gradient opacity-70 blur-xl" />
          <div className="relative rounded-[1.75rem] overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src={IMAGES.hero}
              alt="One Wright Company team connecting and networking"
              width={1536}
              height={1024}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
