export type Project = {
  name: string;
  urdu?: string;
  url: string;
  category: string;
  description: string;
  status: string;
  featured: boolean;
  icon: "book" | "pen" | "users" | "search" | "archive" | "library" | "flask" | "link";
};

export const projects: Project[] = [
  {
    name: "Urdu Novel Bank",
    urdu: "اردو ناول بینک",
    url: "https://www.urdunovelbanks.com/",
    category: "Publishing",
    description:
      "The main platform to discover and read Urdu novels and serialized fiction in one organized place.",
    status: "Active",
    featured: true,
    icon: "book",
  },
  {
    name: "Writers Portal",
    url: "https://portal.urdunovelbanks.com/",
    category: "Writer Tools",
    description:
      "An organized submission, tracking and publication workflow that replaced scattered WhatsApp and email threads.",
    status: "Active",
    featured: true,
    icon: "pen",
  },
  {
    name: "Community",
    url: "https://community.urdunovelbanks.com/",
    category: "Community",
    description:
      "A space where readers and writers discuss, recommend and discover Urdu literature together.",
    status: "Active",
    featured: true,
    icon: "users",
  },
  {
    name: "Smart Urdu Novel Bank",
    url: "https://smart.urdunovelbanks.com/",
    category: "Reader Tools",
    description:
      "Smart search with a 'request a novel' system, built to make discovery far less frustrating.",
    status: "Active",
    featured: true,
    icon: "search",
  },
  {
    name: "Urdu Digest Bank",
    url: "https://urdudigestbank.blogspot.com/",
    category: "Archive",
    description: "A literary archive dedicated to Urdu digest content and its long publishing history.",
    status: "Active",
    featured: true,
    icon: "archive",
  },
  {
    name: "Urdu Fiction Bank",
    url: "https://urdunfictionbank.com/",
    category: "Archive",
    description: "A related digital publishing and archive project around Urdu fiction.",
    status: "Active",
    featured: true,
    icon: "library",
  },
  {
    name: "Urdu Novel Bank (legacy)",
    url: "https://urdu-novel-bank.blogspot.com/",
    category: "Experiment",
    description: "The earlier web presence where much of this was first learned — kept as part of the story.",
    status: "Archived",
    featured: false,
    icon: "flask",
  },
  {
    name: "Urdu Novel Links",
    url: "https://urdunovelslinks.blogspot.com/",
    category: "Experiment",
    description: "A resource hub connecting readers to novel resources across the web.",
    status: "Archived",
    featured: false,
    icon: "link",
  },
];

export const mainSite = "https://www.urdunovelbanks.com/";
