import { DesktopSidebar, MobileHeader } from "@/components/sidebar-nav";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { BrandsSection } from "@/components/brands-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="lg:pl-72">
      <DesktopSidebar />
      <MobileHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BrandsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
