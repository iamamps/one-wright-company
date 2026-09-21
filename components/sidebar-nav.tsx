"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { NAV_ITEMS, OWC_LOGO } from "@/lib/constants";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "w-40" : "w-48"}>
      <Image
        src={OWC_LOGO}
        alt="One Wright Company"
        width={1500}
        height={757}
        priority
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-[#eaf6fd] hover:text-[#1c7fb8] transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function DesktopSidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:inset-y-0 lg:left-0 border-r border-[#ffe28a] bg-white z-30">
      <div className="p-5 border-b border-[#fff2c9]">
        <BrandMark />
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <NavLinks />
      </div>
      <div className="p-5 border-t border-[#fff2c9] space-y-2 text-sm text-slate-500">
        <a href="tel:317-426-7790" className="flex items-center gap-2 hover:text-[#1c7fb8]">
          <Phone className="h-4 w-4" /> 317-426-7790
        </a>
        <a href="mailto:info@ampsmagazine.com" className="flex items-center gap-2 hover:text-[#1c7fb8]">
          <Mail className="h-4 w-4" /> info@onewrightcompany.com
        </a>
      </div>
    </aside>
  );
}

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#ffe28a]">
      <div className="flex items-center justify-between px-4 py-3">
        <BrandMark compact />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="h-11 w-11 flex items-center justify-center rounded-xl bg-[#eaf6fd] text-[#1c7fb8] active:scale-95 transition-transform shrink-0"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[85vw] max-w-sm p-0 bg-white opacity-100 shadow-2xl"
          >
            <SheetTitle className="sr-only">Main menu</SheetTitle>
            <div className="flex items-center justify-between p-5 border-b border-[#fff2c9] bg-white">
              <BrandMark compact />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#fff2c9] text-slate-600 shrink-0"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 bg-white">
              <NavLinks onNavigate={() => setOpen(false)} />
            </div>
            <div className="p-5 border-t border-[#fff2c9] space-y-2 text-sm text-slate-500 bg-white">
              <a href="tel:317-426-7790" className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> 317-426-7790
              </a>
              <a href="mailto:info@ampsmagazine.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@onewrightcompany.com
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
