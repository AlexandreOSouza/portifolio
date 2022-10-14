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
  myWork?: string;
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
        src: "./assets/projects/rr/rr-1.webp",
        alt: "image 1",
      },
      {
        src: "./assets/projects/rr/rr-2.webp",
        alt: "image 2",
      },
      {
        src: "./assets/projects/rr/rr-3.webp",
        alt: "image 3",
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
    text: "A site for a Coffee shop develop with NextJS and Chakra-UI. The Design is a free Figma template.",
    owner: "Figma template",
    myWork: "I was responsible to develop this website",
    ctaLinkOwner:
      "https://www.figma.com/file/jG5biMxY82I3kJd87MiojV/Cafe-Street---E-Commerce-Landing-Page-(Community)?node-id=6%3A21",
    slideImage: [
      {
        src: "./assets/projects/coffee/coffee-1.png",
        alt: "image 1",
      },
      {
        src: "./assets/projects/coffee/coffee-2.png",
        alt: "image 2",
      },
      {
        src: "./assets/projects/coffee/coffee-3.png",
        alt: "image 3",
      },
    ],
  },
  {
    id: 4,
    title: "Project 4",
    subtitle: "_my_NFT_mp",
    description:
      "My own NFT Marketplace build with React and Solidity based on Polygon blockchain.",
    ctaLink: "https://github.com/AlexandreOSouza/nft-marketplace",
    image: "./assets/projects/my_mp.webp",
    react: true,
    solidity: true,
    text: "My own NFT Marketplace build with React and Solidity based on Polygon blockchain. The smart contract was develop with hardhat and deployed at mumbai testnet.",
    owner: "Open Source",
    ctaLinkOwner: "https://github.com/AlexandreOSouza/nft-marketplace",
    myWork: "I was responsible to develop this website and the smart contract.",
    slideImage: [
      {
        src: "./assets/projects/my_mp.webp",
        alt: "image 1",
      },
    ],
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
    text: "An App to upload videos to IPFS and store on the Ethereum blockchain. The smart contract was develop with truffle and deployed at Ethereum testnet.",
    owner: "Open Source",
    ctaLinkOwner: "https://github.com/AlexandreOSouza/dvideo",
    myWork: "I was responsible to develop this website and the smart contract.",
    slideImage: [
      {
        src: "./assets/projects/dvideo.webp",
        alt: "image 1",
      },
      {
        src: "./assets/projects/dvideo/dvideo-2.webp",
        alt: "image 1",
      },
    ],
  },
  {
    id: 6,
    title: "Project 6",
    subtitle: "_DMemory",
    description:
      "A memory game that you can an collect NFT when you find the matching one.",
    ctaLink: "https://github.com/AlexandreOSouza/dmemory",
    image: "./assets/projects/dmemory.webp",
    react: true,
    solidity: true,
    ethereum: true,
    text: "A memory game that you can an collect NFT when you find the matching one. The smart contract was develop with truffle and deployed at Ethereum testnet.",
    owner: "Open Source",
    ctaLinkOwner: "https://github.com/AlexandreOSouza/dmemory",
    myWork: "I was responsible to develop this website and the smart contract.",
    slideImage: [
      {
        src: "./assets/projects/dmemory.webp",
        alt: "image 1",
      },
    ],
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
    text: "A WEB3 Instagram clone where you can upload an image and the users can give you a tip. The smart contract was develop with truffle and deployed at Ethereum testnet.",
    owner: "Open Source",
    ctaLinkOwner: "https://github.com/AlexandreOSouza/decentragram",
    myWork: "I was responsible to develop this website and the smart contract.",
    slideImage: [
      {
        src: "./assets/projects/decentagram.webp",
        alt: "image 1",
      },
      {
        src: "./assets/projects/decentagram/decentagram-2.webp",
        alt: "image 2",
      },
      {
        src: "./assets/projects/decentagram/decentagram-3.webp",
        alt: "image 3",
      },
    ],
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
    text: "A site to store all my links like link tree. This site was develop with HTML, CSS & JavaScript",
    owner: "Open Source",
    ctaLinkOwner: "https://alexandre-links.herokuapp.com/",
    slideImage: [
      {
        src: "./assets/projects/my-links.webp",
        alt: "Image 1",
      },
    ],
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
    text: "Its 2078. Can the Robo Punks NFT save humans from destructive rempant NFT speculation? Mint Robo Punks to find out.",
    owner: "Open Source",
    ctaLinkOwner: "https://github.com/AlexandreOSouza/RoboPunks",
    myWork: "I was responsible to develop this app and the smart contract",

    slideImage: [
      {
        src: "./assets/projects/robo-punks.webp",
        alt: "Image 1",
      },
    ],
  },
  {
    id: 10,
    title: "Project 10",
    subtitle: "_Generative_Images",
    description: "A POC to undertand the generative images process.",
    ctaLink: "https://github.com/AlexandreOSouza/Generative-Images",
    nodejs: true,
    text: "A POC to undertand the generative images process. With this app I was able to create a full NFT collection in Open Sea with generated images. https://opensea.io/collection/generative-magic-colletcion",
    owner: "Open Source",
    ctaLinkOwner: "https://github.com/AlexandreOSouza/Generative-Images",
    myWork: "I was responsible to develop this app",

    slideImage: [
      {
        src: "./assets/projects/gene/gene-1.webp",
        alt: "Image 1",
      },
      {
        src: "./assets/projects/gene/gene-2.webp",
        alt: "Image 2",
      },
    ],
  },
  {
    id: 11,
    title: "Project 11",
    subtitle: "_Dt_Money",
    description: "An App to help yout with your financial life.",
    ctaLink: "https://github.com/AlexandreOSouza/dtmoney",
    image: "./assets/projects/dt-money.webp",
    react: true,
    text: "An App to help yout with your financial life Develop with React & Styled components.",
    owner: "Open Source",
    ctaLinkOwner: "https://github.com/AlexandreOSouza/dtmoney",
    myWork: "I was responsible to develop this app",

    slideImage: [
      {
        src: "./assets/projects/dt-money.webp",
        alt: "Image 1",
      },
    ],
  },
  {
    id: 12,
    title: "Project 12",
    subtitle: "_Dollar_to_Real",
    description: "Convert Dollar to Real(BR currency) in real time.",
    ctaLink: "https://github.com/AlexandreOSouza/dollar-price",
    image: "./assets/projects/dollar.webp",
    react: true,
    text: "Convert Dollar to Real(BR currency) in real time. Develop with React & Styled components.",
    owner: "Open Source",
    ctaLinkOwner: "https://github.com/AlexandreOSouza/dollar-price",
    myWork: "I was responsible to develop this app",

    slideImage: [
      {
        src: "./assets/projects/dollar.webp",
        alt: "Image 1",
      },
    ],
  },
] as ProjectProps[];
