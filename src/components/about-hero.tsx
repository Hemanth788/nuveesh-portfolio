import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/nuveesh-image.png";

export default function AboutHero() {
  return (
    <div className="flex flex-col items-center gap-6 px-6 pt-20 mx-auto mt-0 text-center max-w-7xl sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <Image
              src={heroProfileImg}
              width={512}
              height={512}
              className="w-full h-auto px-0 xl:px-16"
              alt="hero image"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="w-full mt-10 sm:1/2 lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Nuveesh Reddy Somireddy
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              As a soon to be college student, I’ve found myself thinking about the amount of time I spent on certain activities. No matter the activity there’s always a thought that I have: Could I be spending this time better? The reason for this thought is probably because I’m attempting to improve myself and really think about where my time is going. Having a goal would really help with that so I’ve decided to set a couple goals, some non-academic, and some academic. As I’m the youngest child in a family of 4 I’ve always received help with day-to-day tasks, however, I now want to become more independent. That would be my current non-academic goal.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              As for academic goals? Well as stated on the home page, I’m currently aspiring to pursue an education in Electrical/Electronic Engineering. Another goal is to participate in more projects
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Some of my hobbies would include gaming, electric guitar, reading (autobiographies, light novels, etc), chess, analyzing movies/anime.
            </p>
          </FadeUp>
        </AnimatePresence>
      </div>
    </div>
  );
}
