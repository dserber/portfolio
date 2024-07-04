import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import taggroceriesImg from "@/public/taggroceries.png";
import sizematchImg from "@/public/sizematch.png";
import portfolioImg from "@/public/portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated college (university of missouri)",
    location: "Columbia, MO",
    description:
      "I graduated with a Bachelor's of Journalism degree with an emphasis in photojournalism",
    icon: React.createElement(LuGraduationCap),
    date: "2005",
  },
  {
    title: "Non-Technical Founder",
    location: "Minneapolis, MN",
    description:
      "I was a non-technical founder building a startup called Margin using low-code tools. We launched an MVP using the Bubble.io platform.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Mobile Developer",
    location: "Minneapolis, MN",
    description:
      "I taught myself how to code and started a company called DSQUARED that built a mobile app called Tag Groceries using Flutter. The app is published in the iOS & Google Play app stores. My responsibilities included UI design, fontend coding, app architecture, and contributions to database design.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - Present",
  },
  {
    title: "Web & Mobile Developer",
    location: "Minneapolis, MN",
    description:
      "Lately, I'm working as a web & mobile developer freelancer as well as building a startup called Size Match. My tech stack is React, Next.js, TypeScript, Tailwind, and Prisma for web and Flutter & Firebase for mobile. I'm open to full-time job opportunities, contract, or freelance work.",
    icon: React.createElement(FaReact),
    date: "2021 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Tag Groceries",
    description:
      "I worked as a mobile developer on this published app that has photo uploads, in-app notifications, list sharing with permissions, and premium vs free subscription tiers. ",
    tags: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
    imageUrl: taggroceriesImg,
  },
  {
    title: "Size Match",
    description:
      "I worked as a mobile and web developer. I built an algorithm that predicts clothing fit based on 3-4 key body measurements and built all UI.",
    tags: ["Flutter Web", "Dart", "Firebase"],
    imageUrl: sizematchImg,
  },
  {
    title: "davidwserber.com",
    description:
      "This website you're on showcases my experience with the latest web dev trends of React, Next.js SSR & server actions, Typescript, Tailwind CSS, & Framer Motion",
    tags: ["React", "Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Flutter",
  "Dart",
  "Firebase",
  "NoSQL",
  "Tailwind",
  "Git",
  "Prisma",
  "Framer Motion",
] as const;
