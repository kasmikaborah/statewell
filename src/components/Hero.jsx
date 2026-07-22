import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold text-yellow-400"
        >
          Statewell Tech
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl text-white mt-6"
        >
        Artificial Intelligence & Machine Learning & Bioinformatics & NLP & Healthcare
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-3xl mx-auto mt-8 text-gray-300 text-xl"
        >
          We build cutting-edge AI solutions for Healthcare, and Scientific Research.
        </motion.p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">

          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Explore Services
          </button>

          <button className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition">
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}