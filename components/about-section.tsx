import { Users, Rocket, Heart } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Business-to-Business Connections",
    body: "We help companies find new customers, business partners, promotional opportunities, and resources to move forward.",
  },
  {
    icon: Rocket,
    title: "Marketing & Advertising",
    body: "Digital marketing, social media, event promotion, print advertising, and community outreach that gets businesses noticed.",
  },
  {
    icon: Heart,
    title: "Community Investment",
    body: "STEM and career-development programs that introduce young people to technology, media, journalism, and storytelling.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="max-w-2xl">
          <p className="font-display font-bold text-[#f4a90a] text-sm tracking-wide uppercase mb-2">
            About Us
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-800">
            We believe connections create opportunities.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Whether we&apos;re helping two businesses connect, helping a company
            reach new customers, bringing entertainment to a community event,
            or helping a young person discover a future in technology or
            journalism — our mission is to make a positive impact.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border-2 border-[#eaf6fd] p-6 hover:border-[#4fb3e8] transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-[#eaf6fd] flex items-center justify-center mb-4">
                <p.icon className="h-6 w-6 text-[#1c7fb8]" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-800">
                {p.title}
              </h3>
              <p className="mt-2 text-base text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
