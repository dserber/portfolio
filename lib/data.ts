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
    title: "Mobile Developer",
    location: "Minneapolis, MN",
    description:
      "I worked as a mobile developer building a startup called Margin using low-code tools. I started a company called DSQUARED that built an app called Tag Groceries with Flutter and launched it in the iOS & Android app stores. My responsibilities were UI design, font-end code, app architecture, & contributions to database design.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2024",
  },
  {
    title: "Web & Mobile Developer",
    location: "Minneapolis, MN",
    description:
      "I'm now a web developer working as a freelancer & building a startup called Size Match. My stack for web includes React, Next.js, TypeScript, Tailwind & Prisma and for mobile Flutter & Firebase. I'm open to full-time opportunities, contract, or freelance work.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Tag Groceries",
    description:
      "I worked as a mobile developer on this app that has filtering, photo uploads, in-app notifications, list sharing with permissions, and free vs premium pricing tiers. ",
    tags: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
    imageUrl: taggroceriesImg,
  },
  {
    title: "Size Match",
    description:
      "I worked as a mobile developer. I built an algorithm that predicts clothing fit based on 3-4 key measurements and built all UI.",
    tags: ["Flutter Web", "Dart", "Firebase"],
    imageUrl: sizematchImg,
  },
  {
    title: "My Portfolio (this site)",
    description:
      "This website showcases my experience with the latest web dev trends of React, Next.js SSR & server actions, Typescript, Tailwind CSS, & Framer Motion",
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
  "NOSQL",
  "Tailwind",
  "Node.js",
  "Git",
  "Prisma",
  "Redux",
  "PostgreSQL",
  "Framer Motion",
] as const;
