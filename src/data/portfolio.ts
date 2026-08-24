export const CATEGORIES = ["All", "Bitcoin", "Geopolitics"] as const;

export type Category = Exclude<(typeof CATEGORIES)[number], "All">;

export type Cut = {
  id: string;
  code: string;
  title: string;
  logline: string;
  category: Category;
  duration: number;
  date: string;
  still: string;
  youtubeId: string;
  featured?: boolean;
  latest?: boolean;
};

export const CUTS: Cut[] = [
  {
    id: "capitalists",
    code: "CAP",
    title: "Capitalists VS Fundamentalists",
    logline:
      "Treasury conviction versus the node-and-keys crowd. A cut for Bitcoiners who still argue in public.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-Ivd6lkcVZoQ.jpg",
    youtubeId: "Ivd6lkcVZoQ",
    featured: true,
    latest: true,
  },
  {
    id: "lightning",
    code: "LIT",
    title: "Lightning in a Bottle",
    logline:
      "Saylor caught the corporate treasury wave. The marketing still has to catch the promise.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-XtXtMSGwlZ4.jpg",
    youtubeId: "XtXtMSGwlZ4",
    featured: true,
    latest: true,
  },
  {
    id: "digital-gold",
    code: "GLD",
    title: "Bitcoin is Digital Gold",
    logline:
      "Adoption as a self-fulfilling store of value. Cut for people who already know the asset.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-X2UiomCqnWQ.jpg",
    youtubeId: "X2UiomCqnWQ",
    featured: true,
  },
  {
    id: "lows",
    code: "LOW",
    title: "Bitcoin Lows Inbound",
    logline:
      "Bear-market math without the thumbnail panic. Realized price, balance price, no hopium.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-JhnDfG7mKZA.jpg",
    youtubeId: "JhnDfG7mKZA",
  },
  {
    id: "surveillance",
    code: "SUR",
    title: "Surveillance 24/7",
    logline:
      "Flock cameras, facial recognition, and the new normal. A short for feeds that do not flinch.",
    category: "Geopolitics",
    duration: 0,
    date: "2026",
    still: "/work/yt-X1JXCTbES7w.jpg",
    youtubeId: "X1JXCTbES7w",
    featured: true,
  },
  {
    id: "ukraine",
    code: "UKR",
    title: "Real Players",
    logline:
      "Who actually profits from the war narrative. A geopolitics cut built for the timeline.",
    category: "Geopolitics",
    duration: 0,
    date: "2026",
    still: "/work/yt-Vr5kzsDgf3I.jpg",
    youtubeId: "Vr5kzsDgf3I",
  },
  {
    id: "bounces",
    code: "BNC",
    title: "Bitcoin Bounces",
    logline:
      "The bounce you did not buy. Limit orders, patience, and the next pullback.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-6x_kPqghkfk.jpg",
    youtubeId: "6x_kPqghkfk",
    latest: true,
  },
  {
    id: "dying",
    code: "DYN",
    title: "Bitcoin is Dying",
    logline:
      "Past ETFs and treasury theater. Freedom money, cut without the funeral.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-Jm9rhD7fHmI.jpg",
    youtubeId: "Jm9rhD7fHmI",
    latest: true,
  },
  {
    id: "cult",
    code: "CLT",
    title: "Don't Join a Cult",
    logline:
      "Vote the bloc. Don't join the cult. A cut that asks whose interests you are serving.",
    category: "Geopolitics",
    duration: 0,
    date: "2026",
    still: "/work/yt-DIVcwxeFqWs.jpg",
    youtubeId: "DIVcwxeFqWs",
    featured: true,
    latest: true,
  },
  {
    id: "credit",
    code: "CRD",
    title: "Credit on BTC",
    logline:
      "Credit that pays the holder, not the issuer. Basis, heirs, and the long stretch.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-HT63lqgTv14.jpg",
    youtubeId: "HT63lqgTv14",
  },
  {
    id: "rothschilds",
    code: "RTH",
    title: "Rothschilds Buy BTC",
    logline:
      "Old money showing up on-chain. A cut for Bitcoiners who watch who is buying.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-NUdhQLcN8A4.jpg",
    youtubeId: "NUdhQLcN8A4",
  },
  {
    id: "two-types",
    code: "TYP",
    title: "The 2 Types of Bitcoiners",
    logline:
      "Hold forever, or flinch. Deflationary math without the pep talk.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-YqL5HvMiggA.jpg",
    youtubeId: "YqL5HvMiggA",
  },
  {
    id: "robots",
    code: "RBT",
    title: "Robot Wars",
    logline:
      "US versus China on the factory floor. Hardware, AI, and who actually ships.",
    category: "Geopolitics",
    duration: 0,
    date: "2026",
    still: "/work/yt-TmHrEJB0XDg.jpg",
    youtubeId: "TmHrEJB0XDg",
    featured: true,
  },
  {
    id: "ai-money",
    code: "AIM",
    title: "AI Money",
    logline:
      "Robots get paid in Bitcoin. Digital capital, cut for people who see the demand.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-OUuinhOArQk.jpg",
    youtubeId: "OUuinhOArQk",
  },
  {
    id: "baby",
    code: "BBY",
    title: "Baby Bitcoin Beats Everyone",
    logline:
      "Saylor on digital credit that scales. STRC, equity-like yield, no hopium edit.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-8tilPgQp1ts.jpg",
    youtubeId: "8tilPgQp1ts",
    featured: true,
  },
  {
    id: "freedom",
    code: "FRD",
    title: "This is Freedom Money",
    logline:
      "Lummis on self-custody after the bank shut the door. A short that actually lands.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-lGlFj-y2D0k.jpg",
    youtubeId: "lGlFj-y2D0k",
    featured: true,
  },
  {
    id: "sec",
    code: "SEC",
    title: "A New Day at the SEC",
    logline:
      "Atkins on onshore digital assets. Policy, cut as a feed argument, not a presser.",
    category: "Bitcoin",
    duration: 0,
    date: "2026",
    still: "/work/yt-c9nQLFVmH3k.jpg",
    youtubeId: "c9nQLFVmH3k",
  },
];

export const FEATURED = CUTS.filter((c) => c.featured);
export const LATEST = CUTS.filter((c) => c.latest);

export function youtubeEmbedSrc(id: string, autoplay = false) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (autoplay) params.set("autoplay", "1");
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export function lengthLabel(cut: Cut) {
  return cut.duration > 0 ? formatLength(cut.duration) : "Short";
}

function formatLength(totalSeconds: number) {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export type Client = {
  id: string;
  name: string;
  handle: string;
  href: string;
  role: string;
  note: string;
  avatar: string;
};

export const CLIENTS: Client[] = [
  {
    id: "bitcoin-news",
    name: "Bitcoin News",
    handle: "@BitcoinNewsCom",
    href: "https://x.com/BitcoinNewsCom",
    role: "Daily Bitcoin news",
    note: "Shorts for a newsroom that already has an audience. Quote still incoming.",
    avatar: "/clients/bitcoin-news.jpg",
  },
];

export const SERVICES = [
  "Short-form series",
  "Podcast clips",
  "Influencer cuts",
  "Bitcoin explainers",
  "Hooks in two seconds",
  "Color",
  "Sound",
  "Pacing",
];
