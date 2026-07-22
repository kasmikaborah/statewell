import { motion } from "framer-motion";
import { FaRobot, FaLeaf, FaDna } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-yellow-400 mb-12"
        >
          About Statewell Tech
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-300 max-w-4xl mx-auto text-lg leading-8"
        >
          Statewell Tech is an innovative technology company dedicated to
          advancing Artificial Intelligence, Bioinformatics, Drug Discovery,
          and NLP. We develop intelligent software solutions that
          bridge cutting-edge AI with healthcare and sustainable technologies.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl p-8 border border-yellow-500"
          >
            <FaRobot className="text-yellow-400 text-5xl mb-6" />
            <h3 className="text-2xl font-bold mb-4">Artificial Intelligence</h3>

            <p className="text-gray-300">
              Building intelligent AI systems, LLM applications,
              RAG pipelines, and AI agents for scientific research.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl p-8 border border-yellow-500"
          >
            <FaDna className="text-yellow-400 text-5xl mb-6" />
            <h3 className="text-2xl font-bold mb-4">Bioinformatics</h3>

            <p className="text-gray-300">
              Developing computational pipelines for genomics,
              multi-omics integration, biomarker discovery,
              and precision medicine.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl p-8 border border-yellow-500"
          >
            <FaLeaf className="text-yellow-400 text-5xl mb-6" />
            <h3 className="text-2xl font-bold mb-4">NLP</h3>

            <p className="text-gray-300">
              Creating energy-efficient computing solutions
              and sustainable AI technologies for future innovation.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}