import type { StaticImageData } from "next/image";
import taurusImage from "./images/taurus-mock.jpg";
import verdeImage from "./images/verde-mock.jpg";

export type Project = {
  slug: string;
  href: string;
  image: StaticImageData;
  alt: string;
};

// Static imports let Next.js content-hash the emitted filename on every
// build, so a swapped screenshot always busts browser/CDN caches on its own.
export const projects: Project[] = [
  {
    slug: "/taurus-mock",
    href: "https://gabeleo.github.io/taurus-mock/",
    image: taurusImage,
    alt: "Taurus project preview",
  },
  {
    slug: "/verde-mock",
    href: "https://gabeleo.github.io/verde-mock/",
    image: verdeImage,
    alt: "Verde project preview",
  },
];
