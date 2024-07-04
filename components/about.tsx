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
        <span className="font-medium">startup.</span> As a{" "}
        <span className="italic">non-technical</span> founder, I brought an MVP
        to market using <span className="font-medium">low-code</span> tools and
        discovered that{" "}
        <span className="italic underline">I love the technical</span> aspects
        of building software products too. I decided to teach myself to code by
        building a mobile app that I published to the iOS and Google Play app
        stores.{" "}
        <p>
          <span className="italic">My favorite part of programming</span> is
          leveraging technology to build solutions to real-world problems. I{" "}
          <span className="underline">love</span> the feeling of creating
          something from nothing and seeing users adopt it to improve their
          lives. I’m always on the lookout for the latest new technologies too.
        </p>
      </p>
      <p className="mb-3">
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> or{" "}
        <span className="font-medium">freelance opportunity</span> as a web &
        mobile developer. My core stack is{" "}
        <span className="font-medium">Flutter & Firebase</span> for mobile and{" "}
        <span className="font-medium">
          Javascript, Typescript, and React (Next.js)
        </span>{" "}
        for web.
      </p>
      <p>
        When <span className="italic">I’m not coding</span>, I enjoy traveling
        to Mexico, reading, lifting weights, and playing saxophone. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about minimilism.
      </p>
    </motion.section>
  );
}
