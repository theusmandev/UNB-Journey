export type Stage = { year: string; title: string; urdu?: string; body: string; icon: "seed" | "flask" | "trend" | "alert" | "hammer" | "network" | "sun" | "compass" };

export const journey: Stage[] = [
  { year: "Stage 01", title: "The Beginning", urdu: "آغاز", icon: "seed", body: "A reader before anything else. One simple idea: put the Urdu novels I loved somewhere they were easy to find." },
  { year: "Stage 02", title: "Experimentation", icon: "flask", body: "Learning in public — blogging, basic web development, SEO, design, publishing routines and slowly building an audience." },
  { year: "Stage 03", title: "Growth", icon: "trend", body: "More readers arrived than I expected. Publishing became a daily habit, and the small site started behaving like a real platform." },
  { year: "Stage 04", title: "Challenges", icon: "alert", body: "Hosting and domain trouble, content-management pain, manual publishing load, weak discoverability, limited monetization. Each one taught me something." },
  { year: "Stage 05", title: "Rebuilding", icon: "hammer", body: "Instead of quitting, I rebuilt: cleaner structure, better workflows, tools instead of guesswork." },
  { year: "Stage 06", title: "The Ecosystem", icon: "network", body: "One site became several — publishing, writer tools, reader tools, community and archives, connected around the same idea." },
  { year: "Stage 07", title: "Today", urdu: "آج", icon: "sun", body: "Still publishing, still fixing, still listening to what readers and writers actually ask for." },
  { year: "Stage 08", title: "What's Next", icon: "compass", body: "Exploring better search, better writer tools and a stronger community — one honest step at a time." },
];

export const lessons = [
  { title: "Consistency", body: "Showing up on ordinary days did more than any single good idea." },
  { title: "Problem Solving", body: "Most progress came from fixing something that annoyed me for months." },
  { title: "Building for People", body: "A feature only matters if a real reader or writer feels it." },
  { title: "Listening to Readers", body: "Requests and complaints turned out to be the clearest roadmap." },
  { title: "Understanding Writers", body: "Writers need clarity — where their work is, and what happens next." },
  { title: "Learning by Doing", body: "No course taught me hosting failures. Breaking things did." },
  { title: "Patience", body: "Three years of small steps beat one imagined big launch." },
  { title: "Evolution", body: "Nothing here is final. Everything is version two of something." },
];

export type CaseStudy = { name: string; url: string; headline: string; steps: { label: string; body: string }[] };

export const caseStudies: CaseStudy[] = [
  {
    name: "Urdu Novel Bank",
    url: "https://www.urdunovelbanks.com/",
    headline: "From a scattered reading habit to an organized library",
    steps: [
      { label: "Problem", body: "Urdu novels lived in broken links, random groups and disappearing posts." },
      { label: "Idea", body: "One consistent place to publish and find them." },
      { label: "Process", body: "Publish → organize → improve → listen → rebuild." },
      { label: "Challenges", body: "Hosting limits, manual publishing and weak search." },
      { label: "Evolution", body: "Structure, categories and a real publishing rhythm." },
      { label: "Result", body: "A library readers return to instead of searching from scratch." },
    ],
  },
  {
    name: "Writers Portal",
    url: "https://portal.urdunovelbanks.com/",
    headline: "Making writer submissions more organized",
    steps: [
      { label: "Submission", body: "A single entry point instead of scattered messages." },
      { label: "Unique ID", body: "Every submission gets its own reference." },
      { label: "Tracking", body: "Writers can see where their work stands." },
      { label: "Review", body: "A clear, repeatable review step." },
      { label: "Publication", body: "From accepted to published without chasing anyone." },
    ],
  },
  {
    name: "Smart Urdu Novel Bank",
    url: "https://smart.urdunovelbanks.com/",
    headline: "When readers can't find it, they should be able to ask",
    steps: [
      { label: "Reader request", body: "A reader asks for a specific novel." },
      { label: "Unique request", body: "The request is recorded, not lost in a comment thread." },
      { label: "Organized processing", body: "Requests are grouped and worked through." },
      { label: "Better discovery", body: "Smarter search built from what people actually look for." },
    ],
  },
  {
    name: "Community",
    url: "https://community.urdunovelbanks.com/",
    headline: "Why it exists",
    steps: [
      { label: "Reading is social", body: "Readers shouldn't only consume stories — they should connect around them." },
      { label: "Discussion", body: "Space for recommendations, reactions and arguments about endings." },
      { label: "Writers included", body: "Writers can hear from the people actually reading them." },
    ],
  },
];
