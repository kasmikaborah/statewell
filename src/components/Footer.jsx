import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-yellow-500">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>

          <h2 className="text-3xl font-bold text-yellow-400">
            Statewell Tech
          </h2>

          <p className="mt-4 text-gray-400">
            AI • Machine Learning • NLP • Bioinformatics • Drug Discovery
          </p>

        </div>

        <div>

          <h3 className="text-xl font-bold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li>Home</li>

            <li>About</li>

            <li>Services</li>

            <li>Research</li>

            <li>Contact</li>

          </ul>

        </div>

        <div>

          <h3 className="text-xl font-bold mb-4">
            Contact
          </h3>

          <p className="flex gap-3 items-center">
            <FaEnvelope />
            contact@statewell.tech
          </p>

          <div className="flex gap-5 mt-6">

            <FaGithub size={28} />

            <FaLinkedin size={28} />

          </div>

        </div>

      </div>

      <p className="text-center text-gray-500 mt-10">
        © 2026 Statewell Tech. All Rights Reserved.
      </p>

    </footer>
  );
}