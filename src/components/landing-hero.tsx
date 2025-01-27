import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20"
    >
      <div className="-mt-[112px] w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="py-2 text-5xl font-bold text-transparent bg-accent bg-clip-text sm:text-6xl md:text-7xl xl:text-8xl">
                Nuveesh Reddy Somireddy
              </h1>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="max-w-3xl mt-8 text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-2xl">
                My name is <span className="text-accent">Nuveesh Reddy Somireddy</span>, currently I am a senior at Herschel V. Jenkins High School and a part of their Engineering choice program called School of Engineering. I’m currently aspiring to pursue an education in Electrical/Electronic Engineering. This website will highlight some of my experiences and projects that I have accomplished.
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
