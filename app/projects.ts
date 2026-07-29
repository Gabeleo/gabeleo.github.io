export type Project = {
  slug: string;
  href: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    slug: "/taurus-mock",
    href: "https://gabeleo.github.io/taurus-mock/",
    image: "/images/taurus-mock.jpg",
    alt: "Taurus project preview",
  },
  {
    slug: "/verde-mock",
    href: "https://gabeleo.github.io/verde-mock/",
    image: "/images/verde-mock.jpg",
    alt: "Verde project preview",
  },
];
