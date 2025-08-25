const gradientColors = [
  "fffff9,a0b0a8",
  "eeefe0,5d6e66",
  "d1d8be,3d4d45",
  "a7c1a8,2a332f",
  "819a91,1a1f1d",
];

export const testimonials = [
  {
    name: "Ilham Fathoni",
    role: "Front-End Engineer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "Hendri Heryanto",
    role: "Software Engineer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "Yasmin Ayu Handayani",
    role: "Landscape Architect",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "Eriko Ferdian Winarko",
    role: "Front-End Engineer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "I Wayan Pande Putra Yudha",
    role: "Front-End Engineer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
].map((item, index) => ({
  ...item,
  avatar: `https://api.dicebear.com/9.x/lorelei/svg?seed=${encodeURIComponent(
    item.name.replace(/\s/g, "")
  )}&backgroundColor=${
    gradientColors[index % gradientColors.length]
  }&backgroundType=gradientLinear`,
}));
