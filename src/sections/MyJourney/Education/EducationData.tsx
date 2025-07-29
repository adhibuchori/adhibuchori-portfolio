import type { EducationType } from "./EducationType";
import ImageEdu70 from "../../../assets/images/iv_education_70.png";
import ImageEduUPNVJ from "../../../assets/images/iv_education_UPNVJ.png";

export const educations: EducationType[] = [
  {
    institution: "Universitas Pembangunan Nasional Veteran Jakarta",
    degree: "Bachelor's degree",
    field: "Computer Science",
    startDate: "Aug 2020",
    endDate: "Jul 2024",
    grade: "3.94 of 4",
    logo: ImageEduUPNVJ,
    details: [
      "Learn Algorithms, Databases, Data Science, Software Development, and other IT subjects.",
      "Active in KSM Android (student org), leading & mentoring Kotlin and UI/UX Design.",
      "Active in SMF-IK UPNVJ, providing guidance and supervision of BEMF-IK.",
    ],
  },
  {
    institution: "SMA Negeri 70 Jakarta",
    degree: "High School Diploma",
    field: "Mathematics and Natural Science",
    startDate: "Jul 2017",
    endDate: "May 2020",
    logo: ImageEdu70,
    activities: [
      "Active in Jujitsu Bulungan, leading the club, organizing programs, and competitions.",
    ],
  },
];
