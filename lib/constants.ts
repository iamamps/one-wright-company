export const IMAGES = {
  hero: "https://g.tlcdn.com/gen/af15d8c0d5634086b2f424dcb96b0df2.png",
  networking: "https://g.tlcdn.com/gen/eec71a8655cc4081bf8eaa216a221063.png",
  gaming: "https://g.tlcdn.com/gen/6a6b83cff4b844bbbaefa7a8489a2183.png",
  advertising: "https://g.tlcdn.com/gen/8e38f0c4ede945118203fd02cb63953a.png",
  stem: "https://g.tlcdn.com/gen/82db0509558744129a65c1225abbb108.png",
  community: "https://g.tlcdn.com/gen/ca22656e793e4e1a9521efdc14d48d76.png",
};

export const OWC_LOGO = "https://g.tlcdn.com/view/4404096999ba4ebf86f12406cfda13a7.png";

export const LOGOS = {
  amps: "https://g.tlcdn.com/view/428c9665d5504980b039a15b469fa392.png",
  leapz: "https://g.tlcdn.com/view/8093b69bb3f64b65be21cd92317b51b9.png",
  alf: "https://g.tlcdn.com/view/c4a025a5139b4990977f3ebceea30765.jpg",
};

export interface BrandSite {
  name: string;
  tagline: string;
  url: string | null;
  logo: string;
}

export const BRAND_SITES: BrandSite[] = [
  {
    name: "AMPS Magazine",
    tagline: "American Minority People Succeeding — multi-state digital magazine",
    url: "https://www.ampsmagazine.com",
    logo: LOGOS.amps,
  },
  {
    name: "Leapz N Boundz",
    tagline:
      "We bring the ultimate mobile gaming lounge straight to your door — PS5, Xbox & Nintendo — all packed in one epic trailer!",
    url: "https://www.leapznboundz.com",
    logo: LOGOS.leapz,
  },
  {
    name: "A.L.F. — AMPS Legacy Foundation",
    tagline: "Investing in the next generation through community programs",
    url: null,
    logo: LOGOS.alf,
  },
];

export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#brands", label: "Our Brands" },
  { href: "#contact", label: "Contact" },
];
