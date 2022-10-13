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

export type ProjectsFilters = {
  react?: boolean;
  solidity?: boolean;
  nodejs?: boolean;
  html?: boolean;
  css?: boolean;
  typescript?: boolean;
  ethereum?: boolean;
  popstand?: boolean;
};

export type SlideImages = {
  src: string;
  alt: string;
};

export type ProjectProps = {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  owner: string;
  ctaLinkOwner: string;
  description: string;
  ctaLink: string;
  image?: string;
  slideImage?: SlideImages[];
} & ProjectsFilters;

export const PROJECTS = [
  {
    id: 1,
    title: "Project 1",
    subtitle: "_gaia_mp",
    description: "A NFT marketplace on the Flow blockchain.",
    text: "A world-class NFT marketplace on the Flow blockchain. This will house NFTs from some of the world’s best brands, athletes, musicians, and artists.",
    owner: "NFT Genius",
    ctaLinkOwner: "https://www.nftgenius.com/",
    ctaLink: "https://ongaia.com/",
    image: "./assets/projects/gaia.webp",
    react: true,
    typescript: true,
    popstand: true,
    slideImage: [
      {
        src: "./assets/projects/gaia/gaia-1.webp",
        alt: "image 1",
      },
      {
        src: "./assets/projects/gaia/gaia-2.webp",
        alt: "image 2",
      },
      {
        src: "../assets/projects/gaia/gaia-3.webp",
        alt: "image 3",
      },
      {
        src: "../assets/projects/gaia/gaia-4.webp",
        alt: "image 4",
      },
    ],
  },
  {
    id: 2,
    title: "Project 2",
    subtitle: "_rebel_rabbits",
    description: "Generative NFT that encapsulates the true spirit of crypto.",
    ctaLink: "https://www.rebelrabbits.io/",
    image: "./assets/projects/rr.webp",
    react: true,
    typescript: true,
    popstand: true,
    owner: "NFT Genius",
    ctaLinkOwner: "https://www.nftgenius.com/",
    text: "A generative NFT set that encapsulates the true spirit of crypto and represents all the rebels participating in this decentralized revolution.",
    slideImage: [
      {
        src: "./assets/projects/gaia/gaia-1.webp",
        alt: "image 1",
      },
      {
        src: "./assets/projects/gaia/gaia-2.webp",
        alt: "image 2",
      },
      {
        src: "../assets/projects/gaia/gaia-3.webp",
        alt: "image 3",
      },
      {
        src: "../assets/projects/gaia/gaia-4.webp",
        alt: "image 4",
      },
    ],
  },
  {
    id: 3,
    title: "Project 3",
    subtitle: "_coffee_shop",
    description: "A site for a Coffee shop ",
    ctaLink: "https://github.com/AlexandreOSouza/coffee-shop",
    image: "./assets/projects/coffee.webp",
    react: true,
  },
  {
    id: 4,
    title: "Project 4",
    subtitle: "_my_NFT_mp",
    description:
      "My own NFT Marketplace build with React and Solidity based on Ethereum blockchain.",
    ctaLink: "https://github.com/AlexandreOSouza/nft-marketplace",
    image: "./assets/projects/my_mp.webp",
    react: true,
    solidity: true,
    ethereum: true,
  },
  {
    id: 5,
    title: "Project 5",
    subtitle: "_DVide0",
    description:
      "An App to upload videos to IPFS and store on the Ethereum blockchain.",
    ctaLink: "https://github.com/AlexandreOSouza/dvideo",
    image: "./assets/projects/dvideo.webp",
    react: true,
    solidity: true,
    ethereum: true,
  },
  {
    id: 6,
    title: "Project 6",
    subtitle: "_DMemory",
    description:
      "A memory game in that you can collect NFT when you find the matching one.",
    ctaLink: "https://github.com/AlexandreOSouza/dmemory",
    image: "./assets/projects/dmemory.webp",
    react: true,
    solidity: true,
    ethereum: true,
  },
  {
    id: 7,
    title: "Project 7",
    subtitle: "_Decentragram",
    description:
      "A WEB3 Instagram clone where you can upload an image and the users can give you a tip.",
    ctaLink: "https://github.com/AlexandreOSouza/decentragram",
    image: "./assets/projects/decentagram.webp",
    react: true,
    solidity: true,
    ethereum: true,
  },
  {
    id: 8,
    title: "Project 8",
    subtitle: "_My_links",
    description: "A site to store all my links.",
    ctaLink: "https://alexandre-links.herokuapp.com/",
    image: "./assets/projects/my-links.webp",
    html: true,
    css: true,
  },
  {
    id: 9,
    title: "Project 9",
    subtitle: "_Robo_Punks",
    description: "A SPA to mint a Robo Punks NFT.",
    ctaLink: "https://github.com/AlexandreOSouza/RoboPunks",
    image: "./assets/projects/robo-punks.webp",
    react: true,
    solidity: true,
    ethereum: true,
  },
  {
    id: 10,
    title: "Project 10",
    subtitle: "_Generative_Images",
    description: "A POC to undertand the generative images process.",
    ctaLink: "https://github.com/AlexandreOSouza/Generative-Images",
    nodejs: true,
  },
  {
    id: 11,
    title: "Project 11",
    subtitle: "_Dt_Money",
    description: "An App to help yout with your financial life.",
    ctaLink: "https://github.com/AlexandreOSouza/dtmoney",
    image: "./assets/projects/dt-money.webp",
    react: true,
  },
  {
    id: 12,
    title: "Project 12",
    subtitle: "_Dollar_to_Real",
    description: "Convert Dollar to Real(BR currency) in real time.",
    ctaLink: "https://github.com/AlexandreOSouza/dollar-price",
    image: "./assets/projects/dollar.webp",
    react: true,
  },
] as ProjectProps[];
