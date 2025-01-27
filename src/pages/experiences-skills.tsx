import { NextSeo } from "next-seo";

import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
    return (
        <>
            <NextSeo
                title="About Nuveesh Reddy Somireddy"
                description="Learn more about Nuveesh Reddy Somireddy"
                canonical={`${siteMetadata.siteUrl}/about`}
            />
            <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
        </>
    );
}
