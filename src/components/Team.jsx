import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const team = [
  {
    name: "Dr. Akash Maity",
    role: "Consultant",
    description:
      "Cancer Biology | Bioinformatics",
    image: "https://via.placeholder.com/250",
  },
  {
    name: "Ms. Kasmika Borah",
    role: "Founder",
    description:
      "8 years of Experience in AI/ML Researcher | Bioinformatician | Computational Biologist | Drug Discovery Researcher",
    image: "https://via.placeholder.com/250",
  },
  {
    name: "Ms. Sagarika Sengupta",
    role: "Founder",
    description:
      "5 years of Experience in AI/ML Researcher | Computer Science & IT | NLP| ",
    image: "https://via.placeholder.com/250",
  },
];


export default function Team() {
  return (
    <section id="team" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-12">
          Meet Our Team
        </h2>

        <div className="flex justify-center">

          {team.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-yellow-500 rounded-3xl p-8 w-80 text-center"
            >
              <img
                src={member.image}
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
              />

              <h3 className="text-2xl font-bold">
                {member.name}
              </h3>

              <p className="text-yellow-400 mt-2">
                {member.role}
              </p>

              <p className="text-gray-300 mt-4">
                {member.description}
              </p>

              <div className="flex justify-center gap-5 mt-6">

                <FaLinkedin size={28} />

                <FaGithub size={28} />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}