import { motion } from "framer-motion";
import {
  FaBrain,
  FaDna,
  FaCapsules,
  FaCloud,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBrain size={45} />,
    title: "Artificial Intelligence",
    description:
      "Custom AI solutions, LLMs, RAG, AI Agents, NLP, Computer Vision, and Predictive analytics.",
  },
  {
    icon: <FaDna size={45} />,
    title: "Bioinformatics",
    description:
      "NGS analysis, multi-omics integration, single-cell sequencing analysis, biomarker discovery, and precision medicine.",
  },
  {
    icon: <FaCapsules size={45} />,
    title: "Natural Language Processing",
    description:
      "Emotion detection, NLP-task",
  },
  {
    icon: <FaCapsules size={45} />,
    title: "Drug Discovery",
    description:
      "AI-assisted target identification, drug-target binding interaction, and drug repurposing.",
  },
  {
    icon: <FaChartLine size={45} />,
    title: "Data Analytics",
    description:
      "Big-data, data visualization, dashboards, and statistical modeling.",
  },
  {
    icon: <FaLaptopCode size={45} />,
    title: "Software Development",
    description:
      "Modern web applications, APIs, tools, research platforms, and scientific software.",
  },
   {
    icon: <FaLaptopCode size={45} />,
    title: "Consultant",
    description:
      "Master, PhD, Postdoc, Corporate",
  },
  {
    icon: <FaLaptopCode size={45} />,
    title: "Scientific Writting",
    description:
      "Q1/SCOPUS journal writting, Review paper, Conference paper, Research grant, Dissertation, ATS-CV, High-quality presenttation",
  },
  {
    icon: <FaLaptopCode size={45} />,
    title: "Internship-Projects",
    description:
      "AI/ML, Computer Vision, Bioinformatics, NLP, Computational Oncology, Computational Biology",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#050505] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-yellow-400 mb-14"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-yellow-500 bg-gray-900 p-8 shadow-lg"
            >
              <div className="text-yellow-400 mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}