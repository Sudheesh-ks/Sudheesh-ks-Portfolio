import type { Project } from "../types/projects";

export const projects: Project[] = [
  { id: 1, image: "/medislot.png",   title: "MediSlot",        placeholder: "M", hero: true,
    desc: "A full-stack doctor consultation platform enabling seamless appointment booking, real-time consultation, and patient management. Built with scalability in mind from day one.",
    tags: [{label:"React",cls:"sk-tag-a"},{label:"Typescript",cls:"sk-tag-b"},{label:"Node.js",cls:"sk-tag-c"}],
    link: "https://github.com/Sudheesh-ks/MEDISLOT",
    livelink: "https://medislot-eight.vercel.app"
  },
  { id: 2, image: "/techyzone.png",  title: "Techy Zone",      placeholder: "T", hero: false,
    desc: "A modern ecommerce web app for tech gadgets with cart, payments, and product management.",
    tags: [{label:"ejs",cls:"sk-tag-a"},{label:"Node.js",cls:"sk-tag-b"},{label:"MongoDB",cls:"sk-tag-c"}],
    link: "https://github.com/Sudheesh-ks/TECHY-ZONE-ecommerce",
    livelink: "https://techyzone.onrender.com"
  },
  { id: 3, image: "/colearnix.png",  title: "Colearnix",       placeholder: "N", hero: false,
    desc: "A modern collaborative learning platform with real-time study rooms, shared boards, and progress tracking for new-gen learners. (currently on development phase.)",
    tags: [{label:"Next.js",cls:"sk-tag-a"},{label:"Node.js",cls:"sk-tag-b"},{label:"MongoDB",cls:"sk-tag-c"}],
    link: "https://github.com/Sudheesh-ks/COLEARNIX",
    livelink: ""
  },
  { id: 4, image: "/wishly.png",   title: "Wishly",    placeholder: "P", hero: false,
    desc: "A scalable letter management system for Santa to organize, track, and process kids’ wishes with an elf-friendly admin dashboard 🎄",
    tags: [{label:"Next.js",cls:"sk-tag-a"},{label:"Node.js",cls:"sk-tag-b"},{label:"MongoDB",cls:"sk-tag-c"}],
    link: "https://github.com/Sudheesh-ks/Wishly",
    livelink: "https://wishly-saen.onrender.com" 
  },
  { id: 5, image: "/notezaura.png",   title: "NotezAura",    placeholder: "F", hero: false,
    desc: "A clean notes app built with Next.js 15, Shadcn UI, and Better Auth. Fast, minimal, and reliable. (currently on development phase.)",
    tags: [{label:"Next.js",cls:"sk-tag-a"},{label:"ShadcnUI",cls:"sk-tag-b"},{label:"Auth",cls:"sk-tag-c"}],
    link: "https://github.com/Sudheesh-ks/Notezaura",
    livelink: "" 
  },
];