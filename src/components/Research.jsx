import { motion } from "framer-motion";
import {
  FaDna,
  FaBrain,
  FaFlask,
  FaMicroscope,
} from "react-icons/fa";

const research = [
  {
    icon: <FaDna size={40} />,
    title: "Multi-omics Integration",
    description:
      "Integration of genomics, transcriptomics, epigenomics, and proteomics using AI-driven computational methods.",
  },
  {
    icon: <FaBrain size={40} />,
    title: "Artificial Intelligence",
    description:
      "Machine Learning, Deep Learning, NLP, LLMs, Agentic AI, and Retrieval-Augmented Generation (RAG) for scientific applications.",
  },
  {
    icon: <FaFlask size={40} />,
    title: "NLP",
    description:
      "NLP solution using AI/ML.",
  },
  {
    icon: <FaFlask size={40} />,
    title: "Drug Discovery",
    description:
      "AI-assisted target identification, drug repurposing, virtual screening, molecular docking, and precision medicine.",
  },
  {
    icon: <FaMicroscope size={40} />,
    title: "Biomedical Research",
    description:
      "Computational biology, biomarker discovery, cancer genomics, and translational research for healthcare innovation.",
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center text-yellow-400 mb-12"
        >
          Research & Innovation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-gray-300 max-w-4xl mx-auto text-lg mb-16"
        >
          Our research combines Artificial Intelligence, Bioinformatics,
          Biomedical Sciences, and Data Science to develop innovative
          solutions for healthcare and scientific discovery.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">

          {research.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="bg-gray-900 border border-yellow-500 rounded-2xl p-8"
            >
              <div className="text-yellow-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}