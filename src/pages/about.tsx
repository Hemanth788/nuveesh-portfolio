import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Nuveesh Reddy Somireddy"
        description="Learn more about Nuveesh Reddy Somireddy"
        canonical={`${siteMetadata.siteUrl}/about`}
      />
      <AboutHero />
      {/* <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} /> */}
    </>
  );
}
