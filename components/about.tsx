"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My programming journey began with an idea for a{" "}
        <span className="font-medium">startup.</span> I brought an MVP to market
        using low-code tools and discovered that{" "}
        <span className="italic">I love building</span> software products. I
        decided to take my{" "}
        <span className="font-medium">front-end development</span> skills to the
        next level and build a mobile app that I launched in the iOS and Android
        mobile stores.{" "}
        <p>
          <span className="italic">My favorite part of programming</span> is
          leveraging technology to build solutions to real-world problems. I{" "}
          <span className="underline">love</span> the feeling of creating
          something from nothing and seeing users adopt it. I’m always on the
          lookout for the latest new technologies too.
        </p>
      </p>
      <p className="mb-3">
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> or{" "}
        <span className="font-medium">freelance opportunity</span> as a software
        developer. My core stack for mobile is{" "}
        <span className="font-medium">Flutter & Firebase (NoSQL)</span> and for
        web{" "}
        <span className="font-medium">
          React, Next.js, Node.js, & Typescript.
        </span>
      </p>
      <p>
        When <span className="italic">I’m not coding</span>, I enjoy traveling,
        reading, and playing saxophone. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about history and theology.
      </p>
    </motion.section>
  );
}
