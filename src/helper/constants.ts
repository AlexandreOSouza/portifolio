export const PAGE_URL = {
  1: "home",
  2: "about",
  3: "projects",
  4: "contact",
};

export const PAGE_INDEX = {
  HOME: 1,
  ABOUT: 2,
  PROJECTS: 3,
  CONTACT: 4,
};

export const ABOUT_INDEX = {
  PROFESSIONAL: 1,
  PERSONAL: 2,
  HOBBIES: 3,
};

export const PAGE_TITLE = {
  HOME: "alesouza.dev | Home",
  ABOUT: "alesouza.dev | About-me",
  PROJECTS: "alesouza.dev | Projects",
  CONTACT: "alesouza.dev | Contact-me",
};

export type ProjectProps = {
  title: string;
  subtitle: string;
  description: string;
  ctaLink: string;
  image: string;
};

export const PROJECTS = [
  {
    title: "Project 1",
    subtitle: "_gaia_mp",
    description: "A NFT marketplace on the Flow blockchain.",
    ctaLink: "https://ongaia.com/",
    image: "./assets/projects/gaia.png",
  },
  {
    title: "Project 2",
    subtitle: "_rebel_rabbits",
    description: "Generative NFT that encapsulates the true spirit of crypto.",
    ctaLink: "https://www.rebelrabbits.io/",
    image: "./assets/projects/rr.png",
  },
] as ProjectProps[];
