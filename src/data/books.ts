import bookGratitude from "@/assets/book-gratitude.jpg";
import bookLifeStageGuide from "@/assets/book-life-stage-guide.jpg";
import bookSurahYusuf from "@/assets/book-surah-yusuf.jpg";
import bookIdentityRebuilding from "@/assets/book-identity-rebuilding.jpg";
import bookJannahInspired from "@/assets/book-jannah-inspired.jpg";
import bookIslamicFamily from "@/assets/book-islamic-family.jpg";

export type Book = {
  slug: string;
  cover: string;
  title: string;
  status: string;
  desc: string;
  about: string[];
  themes: string[];
};

export const books: Book[] = [
  {
    slug: "the-life-stage-guide",
    cover: bookLifeStageGuide,
    title: "The Life Stage Guide",
    status: "In Development",
    desc: "A practical framework for navigating life's seasons with clarity, faith, and intentional design.",
    about: [
      "A working framework for the recurring seasons of adult life, the building, the rebuilding, the steady, and the surrendered.",
      "Written for readers who want a structured, faith-aware way of understanding where they are and what the season is asking of them.",
    ],
    themes: ["Seasons", "Identity", "Design", "Faith"],
  },
  {
    slug: "gratitude-journal",
    cover: bookGratitude,
    title: "Gratitude Journal",
    status: "In Development",
    desc: "A guided companion for the daily practice of gratitude, short reflections, structured prompts, lasting orientation.",
    about: [
      "A guided companion designed for daily use, structured prompts, short reflections, and weekly returns.",
      "Built to make gratitude a discipline of perception rather than a sentiment that fades.",
    ],
    themes: ["Gratitude", "Practice", "Reflection"],
  },
  {
    slug: "surah-yusuf-reflections",
    cover: bookSurahYusuf,
    title: "Surah Yusuf Reflections",
    status: "Forthcoming",
    desc: "Meditations on patience, providence, and the long arc of trust drawn from one of the Qur'an's most luminous narratives.",
    about: [
      "Meditations on one of the Qur'an's most luminous narratives, written with the rhythm of slow, devotional reading.",
      "Themes of patience, providence, and the long arc of trust, drawn into the texture of contemporary life.",
    ],
    themes: ["Faith", "Patience", "Providence"],
  },
  {
    slug: "identity-rebuilding-reflections",
    cover: bookIdentityRebuilding,
    title: "Identity Rebuilding Reflections",
    status: "Forthcoming",
    desc: "Quiet, structured reflections for the work of returning to oneself, and being rebuilt with intention.",
    about: [
      "Quiet, structured reflections for those in the work of returning to themselves.",
      "Written for the reader who is not starting over so much as being rebuilt with intention.",
    ],
    themes: ["Identity", "Rebuilding", "Reflection"],
  },
  {
    slug: "jannah-inspired-books",
    cover: bookJannahInspired,
    title: "Jannah Inspired Books",
    status: "Series in Development",
    desc: "An evolving collection oriented toward gentle living, sacred imagination, and faith-rooted hope.",
    about: [
      "An evolving collection of titles oriented toward gentle living, sacred imagination, and faith-rooted hope.",
      "A literary home for readers seeking work that is both beautiful and grounded.",
    ],
    themes: ["Hope", "Imagination", "Faith"],
  },
  {
    slug: "islamic-family-and-human-development",
    cover: bookIslamicFamily,
    title: "Islamic Family & Human Development",
    status: "Forthcoming",
    desc: "A systems view of family, formation, and flourishing, anchored in tradition, accessible to all.",
    about: [
      "A systems view of family, formation, and flourishing.",
      "Anchored in Islamic tradition and written for a global readership invested in human development.",
    ],
    themes: ["Family", "Formation", "Flourishing"],
  },
];
