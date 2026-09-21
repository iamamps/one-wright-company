import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="owc-gradient">
      <div className="mx-auto max-w-6xl px-5 py-16 text-center">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white drop-shadow-sm">
          Let&apos;s build the future together.
        </h2>
        <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
          Ready to connect your business, book gaming entertainment, or get
          your brand noticed? Reach out to One Wright Company today.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:info@onewrightcompany.com"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#1c7fb8] font-bold text-base px-6 py-3.5 shadow-lg active:scale-95 transition-transform"
          >
            <Mail className="h-5 w-5" /> info@onewrightcompany.com
          </a>
          <a
            href="tel:317-426-7790"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white font-bold text-base px-6 py-3.5 shadow-lg active:scale-95 transition-transform"
          >
            <Phone className="h-5 w-5" /> 317-426-7790
          </a>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 text-white/90 font-semibold">
          <MapPin className="h-5 w-5" /> Orlando, Florida
        </div>
      </div>
    </section>
  );
}
