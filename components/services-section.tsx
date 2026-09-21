import Image from "next/image";
import { IMAGES } from "@/lib/constants";

interface Service {
  title: string;
  body: string;
  image: string;
  tag: string;
}

const services: Service[] = [
  {
    tag: "B2B Growth",
    title: "Business Networking & Connections",
    body: "We connect businesses with new customers, partners, promotional opportunities, and resources through marketing, networking, advertising, and community engagement.",
    image: IMAGES.networking,
  },
  {
    tag: "Entertainment",
    title: "Mobile Gaming Entertainment",
    body: "Our mobile gaming trailers bring today's most popular gaming systems directly to birthday parties, family events, school functions, corporate events, and community celebrations.",
    image: IMAGES.gaming,
  },
  {
    tag: "Promotion",
    title: "Advertising & Promotional Services",
    body: "Creative ways to promote products and services through digital marketing, social media, event promotion, print advertising, and community outreach.",
    image: IMAGES.advertising,
  },
  {
    tag: "Youth Programs",
    title: "STEM & Career-Development Programs",
    body: "We introduce students to computers, technology, digital media, journalism, and communications — teaching interviewing, writing, photography, video, and digital storytelling.",
    image: IMAGES.stem,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#fbfaf3]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-display font-bold text-[#1c7fb8] text-sm tracking-wide uppercase mb-2">
          What We Do
        </p>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-800 max-w-2xl">
          Services built to connect, promote, and empower.
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl bg-white overflow-hidden shadow-md border border-[#fff2c9] flex flex-col"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block w-fit rounded-full bg-[#ffd23f] text-slate-800 text-xs font-bold px-3 py-1 mb-3">
                  {s.tag}
                </span>
                <h3 className="font-display font-bold text-xl text-slate-800">
                  {s.title}
                </h3>
                <p className="mt-2 text-base text-slate-600">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
