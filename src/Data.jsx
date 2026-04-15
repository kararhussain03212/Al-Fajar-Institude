import { BsTranslate } from "react-icons/bs";
import { FaCalculator, FaBriefcase, FaLaptop } from "react-icons/fa";

const programs = [
  {
    id: 1,
    title: "BS English",
    color: "bg-gray-500",
    icon: BsTranslate,
    path: "/academic/english",
  },
  {
    id: 2,
    title: "BS Mathematics",
    color: "bg-[#ff6b4a]",
    icon: FaCalculator,
    path: "/academic/mathematics",
  },
  {
    id: 3,
    title: "BS Business Administration",
    color: "bg-[#6c5ce7]",
    icon: FaBriefcase,
    path: "/academic/hons",
  },
  {
    id: 4,
    title: "BS Computer Science",
    color: "bg-[#27ae60]",
    icon: FaLaptop,
    path: "/academic/computerscience",
  },
];

export default programs;
