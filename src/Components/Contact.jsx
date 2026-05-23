import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-blue-400 tracking-[4px] uppercase mb-3">Contact</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Build Something Amazing Together
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I'm currently open to internships, full-time opportunities, freelance
          projects, and collaborations. If you have an idea, project, or
          opportunity in mind, feel free to reach out.
        </p>

        <a
          href="mailto:aditya.kchauhan04@gmail.com"
          className="
            inline-block
            px-8 py-4
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-purple-500
            font-medium
            hover:scale-105
            transition
          "
        >
          Get In Touch
        </a>

        <div className="flex justify-center gap-8 mt-10 text-2xl">
          <a
            href="https://github.com/Aditya-Chauhan-Dev"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-chauhan-087a76390"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:aditya.kchauhan04@gmail.com"
            className="text-gray-400 hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
