import marioImage from "../../public/alber.jpeg";
import joshuaImage from "../../public/ines.jpeg";

export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Alberto Martínez",
    slug: "mario-sanchez",
    image: marioImage,
    bio: "Mario is a Staff Engineer specialising in Frontend at Vercel, as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple.",
  },
  {
    name: "Inés Honrubia",
    slug: "joshua-wood",
    image: joshuaImage,
    bio: "Joshua is a Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale.",
  },
  
];
