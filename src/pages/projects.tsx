import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Nuveesh Reddy Somireddy"
        description="Explore a collection of projects by Nuveesh Reddy Somireddy"
        canonical={`${siteMetadata.siteUrl}/projects`}
      />
      <section className="w-full gap-20 px-6 mx-auto mt-6 mb-40 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="grid grid-cols-1 mt-8 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          {/* <div className="max-w-5xl mx-auto mt-16 text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I am currently building new projects and learning web development
              to expand my skill set.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my github to see some of the latest projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-semibold underline text-accent underline-offset-2 hover:text-accent/70"
              >
                Github
              </a>
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
}
