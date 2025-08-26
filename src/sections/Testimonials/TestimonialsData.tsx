const gradientColors = [
  "fffff9,a0b0a8",
  "eeefe0,5d6e66",
  "d1d8be,3d4d45",
  "a7c1a8,2a332f",
  "819a91,1a1f1d",
];

export const testimonials = [
  {
    name: "Haruto Tanaka",
    role: "Front-End Engineer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "Aoi Nakamura",
    role: "Software Engineer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "Yui Takahashi",
    role: "Landscape Architect",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "Ren Fujimoto",
    role: "Front-End Engineer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "Souta Yamamoto",
    role: "Mobile Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "Itsuki Kobayashi",
    role: "UI Designer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "Mei Hayashi",
    role: "Back-End Engineer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "Daichi Sato",
    role: "Product Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "Hinata Shimizu",
    role: "Data Scientist",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
  },
  {
    name: "Kaito Matsumoto",
    role: "System Analyst",
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
