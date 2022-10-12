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
  image?: string;
  react?: boolean;
  solidity?: boolean;
  node?: boolean;
  html?: boolean;
  css?: boolean;
  ts?: boolean;
  eth?: boolean;
  pop?: boolean;
};

export const PROJECTS = [
  {
    title: "Project 1",
    subtitle: "_gaia_mp",
    description: "A NFT marketplace on the Flow blockchain.",
    ctaLink: "https://ongaia.com/",
    image: "./assets/projects/gaia.png",
    react: true,
    ts: true,
    pop: true,
  },
  {
    title: "Project 2",
    subtitle: "_rebel_rabbits",
    description: "Generative NFT that encapsulates the true spirit of crypto.",
    ctaLink: "https://www.rebelrabbits.io/",
    image: "./assets/projects/rr.png",
    react: true,
    ts: true,
    pop: true,
  },
  {
    title: "Project 3",
    subtitle: "_coffee_shop",
    description: "A site for a Coffee shop ",
    ctaLink: "https://github.com/AlexandreOSouza/coffee-shop",
    image: "./assets/projects/coffee.png",
    react: true,
  },
  {
    title: "Project 4",
    subtitle: "_my_NFT_mp",
    description:
      "My own NFT Marketplace build with React and Solidity based on Ethereum blockchain.",
    ctaLink: "https://github.com/AlexandreOSouza/nft-marketplace",
    image: "./assets/projects/my_mp.png",
    react: true,
    solidity: true,
    eth: true,
  },
  {
    title: "Project 5",
    subtitle: "_DVide0",
    description:
      "An App to upload videos to IPFS and store on the Ethereum blockchain.",
    ctaLink: "https://github.com/AlexandreOSouza/dvideo",
    image: "./assets/projects/dvideo.png",
    react: true,
    solidity: true,
    eth: true,
  },
  {
    title: "Project 6",
    subtitle: "_DMemory",
    description:
      "A memory game in that you can collect NFT when you find the matching one.",
    ctaLink: "https://github.com/AlexandreOSouza/dmemory",
    image: "./assets/projects/dmemory.png",
    react: true,
    solidity: true,
    eth: true,
  },
  {
    title: "Project 7",
    subtitle: "_Decentragram",
    description:
      "A WEB3 Instagram clone where you can upload an image and the users can give you a tip.",
    ctaLink: "https://github.com/AlexandreOSouza/decentragram",
    image: "./assets/projects/decentagram.png",
    react: true,
    solidity: true,
    eth: true,
  },
  {
    title: "Project 8",
    subtitle: "_My_links",
    description: "A site to store all my links.",
    ctaLink: "https://alexandre-links.herokuapp.com/",
    image: "./assets/projects/my-links.png",
    html: true,
    css: true,
  },
  {
    title: "Project 9",
    subtitle: "_Robo_Punks",
    description: "A SPA to mint a Robo Punks NFT.",
    ctaLink: "https://github.com/AlexandreOSouza/RoboPunks",
    image: "./assets/projects/robo-punks.png",
    react: true,
    solidity: true,
    eth: true,
  },
  {
    title: "Project 10",
    subtitle: "_Generative_Images",
    description: "A POC to undertand the generative images process.",
    ctaLink: "https://github.com/AlexandreOSouza/Generative-Images",
    node: true,
  },
  {
    title: "Project 11",
    subtitle: "_Dt_Money",
    description: "An App to help yout with your financial life.",
    ctaLink: "https://github.com/AlexandreOSouza/dtmoney",
    image: "./assets/projects/dt-money.png",
    react: true,
  },
  {
    title: "Project 12",
    subtitle: "_Dollar_to_Real",
    description: "Convert Dollar to Real(BR currency) in real time.",
    ctaLink: "https://github.com/AlexandreOSouza/dollar-price",
    image: "./assets/projects/dollar.png",
    react: true,
  },
] as ProjectProps[];
