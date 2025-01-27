import Image from "next/image";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import Corosel from "@/components/utility/corosel";
import { GithubIcon } from "@/components/icons";
import Link from "next/link";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className="w-full overflow-hidden transition-shadow duration-150 border rounded-lg shadow-md border-accent/20 bg-background hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
    >
      <Corosel images={props.imageUrl} aspectRatio={2.1} />
      <div className="p-3 text-foreground sm:p-4">
        <div className="flex items-center gap-3">
          {/* <span className="relative w-5 h-5">
            <Image src={props.favicon} alt="logo" fill />
          </span> */}
          <span className="text-sm font-semibold">{props.name}</span>
        </div>
        <div className="mt-3">
          <p className="text-xs md:text-sm">{props.description}</p>
        </div>
        <Link target="_blank" href={'/Project_Report_Nuveesh.pdf'} legacyBehavior download >
          <a target="_blank" className="text-xs underline md:text-sm" download>
            Download Report
          </a>
        </Link>
        {/* <div className="flex items-center justify-end gap-6 mt-6">
          <a
            href={props.sourceCodeHref}
            target="_blank"
            className="flex items-center gap-1 text-xs underline md:text-sm"
          >
            <GithubIcon className="w-5 h-5" /> Source code
          </a>
          {props.liveWebsiteHref && (
            <a
              href={props.liveWebsiteHref}
              target="_blank"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <FiExternalLink className="w-5 h-5" /> Live
            </a>
          )}
        </div> */}
      </div>
    </motion.div>
  );
}
