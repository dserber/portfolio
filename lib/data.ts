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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Tag Groceries",
    description:
      "I worked as a mobile developer on this more flexible grocery list app for 2 years. It has features such as filtering, photo uploads, notifications & list sharing. ",
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
      "A showcase of my experience with the latest web dev trends of React, Next.js SSR & server actions, Typescript, Tailwind CSS, & Framer Motion",
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
