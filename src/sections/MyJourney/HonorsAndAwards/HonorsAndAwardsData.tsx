import type { HonorsAndAwardsType } from "./HonorsAndAwardsType";
import ImageHaWFIKFair2023 from "../../../assets/images/iv_institution_fikfair2023.png";
import ImageHawBudoshinJujitsu from "../../../assets/images/iv_institution_budoshin_jujitsu.png";

export const honorsAndAwards: HonorsAndAwardsType[] = [
  {
    logo: ImageHaWFIKFair2023,
    title: "Runner-Up of UI/UX Design FIK FAIR 2023 Competition",
    issuedBy:
      'Issued by Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer UPN "Veteran" Jakarta',
    date: "Nov 2023",
    description:
      "EcoWear is a mobile User Interface (UI) designed to address Fast Fashion issues by providing features such as:",
    details: [
      "EcoWear is a mobile User Interface (UI) designed to address Fast Fashion issues by providing features such as: 1) The 3P feature (Pembelian, Penyewaan, dan Penukaran), enabling users to buy, rent, and exchange quality new and used clothing.",
      "A Community feature for discussions on clothing trends and other garment-related issues among users.",
      "A New Product feature that allows users to discover new and used clothing within a specific timeframe.",
    ],
  },
  {
    logo: ImageHawBudoshinJujitsu,
    title:
      "Runner-Up of Kejuaraan Ju-jitsu Terbuka Antar Pelajar Tingkat Daerah DKI Jakarta Kategori Newaza Fighting System",
    issuedBy: "Issued by Budoshin Ju-jitsu Indonesia",
    date: "Oct 2019",
    description:
      "Achieved runner-up in the DKI Jakarta Regional Open Ju-jitsu Championship, Newaza Fighting System category.",
    details: [],
  },
];
