import { motion } from "framer-motion";

const projects = [
  {
    title: "AI for Drug Discovery",
    description:
      "Developing intelligent pipelines for target identification and drug repurposing.",
  },
  {
    title: "Cancer Biomarker Discovery",
    description:
      "Machine learning models for identifying biomarkers from multi-omics datasets.",
  },
  {
    title: "NGS Analysis Pipeline",
    description:
      "Automated workflows for variant calling and genomic data analysis.",
  },
  {
    title: "Biomedical NLP",
    description:
      "LLM-based systems for literature mining and biomedical knowledge extraction.",
  },
  {
    title: "Scientific Software",
    description:
      "Research software, APIs, and cloud-enabled platforms for life sciences.",
  },
  {
    title: "AI Agents",
    description:
      "Agentic AI systems for biomedical research automation.",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#050505] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-12">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="bg-gray-900 border border-yellow-500 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300">
                {project.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}