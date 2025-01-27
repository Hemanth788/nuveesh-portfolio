import {
  SiPlotly,
  SiKeras,
  SiPytorch,
  SiTensorflow,
  SiC,
  SiCplusplusbuilder,
  SiFlask,
  SiAngular,
  SiBootstrap,
  SiApachekafka,
  SiMysql,
  SiDjango,
  SiApachespark,
  SiJira,
  SiMicrosoftexcel,
  SiGithub,
  SiPowerbi,
  SiTableau,
  SiArcgis,
  SiSelenium,
  SiApachehadoop,
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import JavaScriptSvg from "@/public/icons/javascript.svg";
import PythonSvg from "@/public/icons/python.svg";
import GcpSvg from "@/public/icons/gcp.svg";
import JavaSvg from "@/public/icons/java.svg";
import RSvg from "@/public/icons/r.svg";
import MatplotlibSvg from "@/public/icons/matplot.svg";
import SeabornSvg from "@/public/icons/seaborn.svg";

// Libraries
import ReactSvg from "@/public/icons/reactjs.svg";

import MongoDBSvg from "@/public/icons/mongodb.svg";
// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "Scratch" },
      {
        name: "Python",
        // icon: PythonSvg,
      },
      {
        name: "Java",
        // icon: JavaSvg,
      },
      {
        name: "JavaScript",
        // icon: JavaScriptSvg,
      },
      {
        name: "HTML",
        // icon: HtmlSvg,
      },
    ],
  },
  // {
  //   sectionName: "Others",
  //   skills: [
  //     {
  //       name: "TensorFlow",
  //       icon: SiTensorflow,
  //     },
  //     {
  //       name: "Pytorch",
  //       icon: SiPytorch,
  //     },
  //     {
  //       name: "Keras",
  //       icon: SiKeras,
  //     },
  //     {
  //       name: "Matplotlib",
  //       icon: MatplotlibSvg,
  //     },
  //     {
  //       name: "Seaborn",
  //       icon: SeabornSvg,
  //     },
  //     {
  //       name: "PySpark",
  //       icon: SiApachespark,
  //     },
  //     {
  //       name: "Plotly",
  //       icon: SiPlotly,
  //     },
  //   ],
  // },
  // {
  //   sectionName: "Frameworks",
  //   skills: [
  //     {
  //       name: "React",
  //       icon: ReactSvg,
  //     },
  //     {
  //       name: "Angular",
  //       icon: SiAngular,
  //     },
  //     {
  //       name: "Bootstrap",
  //       icon: SiBootstrap,
  //     },
  //     {
  //       name: "Kafka",
  //       icon: SiApachekafka,
  //     },
  //   ],
  // },
  // {
  //   sectionName: "Backend",
  //   skills: [
  //     {
  //       name: "Flask",
  //       icon: SiFlask,
  //     },
  //     {
  //       name: "Django",
  //       icon: SiDjango,
  //     },
  //   ],
  // },
  // {
  //   sectionName: "Databases",
  //   skills: [
  //     {
  //       name: "SQL",
  //       icon: SiMysql,
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: MongoDBSvg,
  //     },
  //   ],
  // },
  {
    sectionName: "Other Tools and Technologies",
    skills: [
      {
        name: "Arduino",
        // icon: SiSelenium,
      },
      {
        name: "Logic Design",
        // icon: SiSelenium,
      },
      {
        name: "3D Modeling/CAD Software",
        // icon: SiSelenium,
      },
      {
        name: "3D Printing",
        // icon: SiSelenium,
      },
    ],
  },
];
