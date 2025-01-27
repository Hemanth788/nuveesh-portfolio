import dynamic from "next/dynamic";
import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const SkillsShowcase = dynamic(
  () => import("@/components/skills/skills-showcase"),
  {
    ssr: true,
  },
);

const ProjectShowcase = dynamic(
  () => import("@/components/projects/project-showcase"),
  {
    ssr: true,
  },
);

export default function Home() {
  return (
    <>
      <CursorTrailCanvas className="fixed inset-0 w-full h-full pointer-events-none -z-10" />
      <NextSeo
        title="Nuveesh Reddy Somireddy"
        description="Explore the professional portfolio of Nuveesh Reddy Somireddy"
        canonical={siteMetadata.siteUrl}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      {/* <ProjectShowcase projects={PROJECT_SHOWCASE} /> */}
    </>
  );
}
