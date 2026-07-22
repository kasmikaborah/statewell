import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Get in Touch
            </h3>

            <div className="space-y-5 text-lg">

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" />
                statewell9@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-400" />
                +91 9101371877
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                Assam, India
              </p>

              <p className="flex items-center gap-3">
                <FaLinkedin className="text-yellow-400" />
                linkedin.com/company/statewell-tech
              </p>


            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-yellow-500">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded bg-black border border-gray-700"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 rounded bg-black border border-gray-700"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-3 mb-4 rounded bg-black border border-gray-700"
            ></textarea>

            <button className="bg-yellow-400 text-black px-6 py-3 rounded font-bold hover:bg-yellow-300">
              Send Message
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}