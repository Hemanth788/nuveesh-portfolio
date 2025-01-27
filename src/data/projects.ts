import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Glaucoma Detection",
    href: "/projects",
    tags: [
      "Data preprocessing",
      "Deep learning",
      "Data modeling",
      "Data visualization",
    ],
    image: {
      LIGHT: "/images/projects/glaucoma.webp",
      DARK: "/images/projects/glaucoma.webp",
    },
  },
  {
    index: 1,
    title: "AI False IIS",
    href: "/projects",
    tags: [
      "Exploratory Data Analysis",
      "Deep learning",
      "TensorFlow",
      "Python",
      "Statistics",
    ],
    image: {
      LIGHT: "/images/projects/aifalseimage.webp",
      DARK: "/images/projects/aifalseimage.webp",
    },
  },
  {
    index: 2,
    title: "Tourism Analysis",
    href: "/projects",
    tags: [
      "Python",
      "R",
      "Data cleaning",
      "Data organizing",
      "ArcGIS",
      "Tableau",
      "Power BI",
      "MS Excel",
    ],
    image: {
      LIGHT: "/images/projects/tourismanalysis.webp",
      DARK: "/images/projects/tourismanalysis.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Silifoam Earbud Tips ",
    // favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["/images/nuveesh-project-image.png"],
    description: `
    This project was a result of 18 weeks of my Engineering Capstone Class. The following is the project portfolio which delves into the specifics about the project. Made by me and 3 other students the Silifoam Earbud is meant to tackle the issues that arise from improper fitting earbuds
    `
  },
  // {
  //   name: "Tourism Analysis",
  //   favicon: "/images/projects/logos/kanban.ico",
  //   imageUrl: ["/images/projects/tourismanalysis.webp"],
  //   description:
  //     "Implemented immersive 3D visualizations with ArcGIS to identify affordable cities and utilized Power BI and Tableau for dynamic visualizations, showcasing revenue generation and visitor demographics.",
  //   sourceCodeHref: "https://github.com/janimiyarj?tab=repositories",
  // },
  // {
  //   name: "AI False Image Identification System",
  //   favicon: "/images/projects/logos/manygames.ico",
  //   imageUrl: ["/images/projects/aifalseimage.webp"],
  //   description:
  //     "Designed a robust AI-generated image detector using customized ResNet50 architecture, TensorFlow, and T4 GPU, achieving 92.2% accuracy in distinguishing real from algorithmically created images.",
  //   sourceCodeHref:
  //     "https://github.com/janimiyarj/AI-False-Image-Identification-Classifier",
  // },
  // {
  //   name: "Movie Review Sentiment Analysis Engine",
  //   favicon: "/favicon.ico",
  //   imageUrl: [
  //     "/images/projects/movieAnalysis.webp",
  //     "/images/projects/movieAnalysis.webp",
  //   ],
  //   description:
  //     "Engineered a movie sentiment analysis program using NLTK, part-of-speech tagging, and classifiers, achieving a 63% accuracy.",
  //   sourceCodeHref:
  //     "https://github.com/janimiyarj/Film-Sentiment-Analysis-using-NLP",
  // },
];
