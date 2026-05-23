const projects = [
  {
    title: "Watch Party Platform",
    desc: "A real-time collaborative video streaming platform where users can create or join rooms, watch YouTube videos together, synchronize playback, and interact through live chat.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Aditya-Chauhan-Dev/Watch-Party",
    live: "https://watch-party-frontend-5x08.onrender.com",
  },

  {
    title: "AI Interview Preparation Platform",
    desc: "A full-stack interview preparation platform that helps users practice technical interviews with AI-generated questions, track progress, and improve their problem-solving skills.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github:
      "https://github.com/Aditya-Chauhan-Dev/Full-Stack-Gen-AI-Job-Prep-Platform",
    live: "https://full-stack-gen-ai-job-prep-platform-24ys.onrender.com",
  },
  {
    title: "E-Commerce Website",
    desc: "A modern and responsive e-commerce platform featuring product browsing, category filtering, shopping cart functionality, and an intuitive user experience. Designed to provide seamless online shopping with optimized performance and clean UI.",
    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "React Router DOM",
      "Context API",
      "Local Storage",
    ],
    github: "https://github.com/Aditya-Chauhan-Dev/E-commerce-Website",
    live: "https://aditya-chauhan-dev.github.io/E-commerce-Website/",
  },

  {
    title: "Employee Management System",
    desc: "Role-based employee management application for assigning tasks, tracking work progress, monitoring status, and managing employee activities efficiently.",
    tech: ["React", "Context API", "Local Storage"],
    github: "https://github.com/Aditya-Chauhan-Dev/Employee-Management-System",
    live: "https://aditya-chauhan-dev.github.io/Employee-Management-System/",
  },

  {
    title: "Responsive Multi-Page React Website",
    desc: "Modern multi-page web application with client-side routing, API integration, responsive layouts, and interactive user experience built using React.",
    tech: ["React", "React Router DOM", "Axios", "Tailwind CSS"],
    github: "https://github.com/Aditya-Chauhan-Dev/Multi-Page-Website",
    live: "https://aditya-chauhan-dev.github.io/Multi-Page-Website/",
  },

  {
    title: "Currency Converter",
    desc: "Real-time currency conversion application that fetches live exchange rates through APIs and provides an intuitive and responsive user interface.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "#",
    live: "#",
  },

  {
    title: "Interactive Quiz Application",
    desc: "Responsive quiz platform featuring multiple-choice questions, instant answer validation, real-time score tracking, and an engaging user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 bg-[#0f1425]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 tracking-[4px] uppercase mb-3">
            Featured Projects
          </p>

          <h2 className="text-4xl font-bold mb-4">Things I've Built</h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my experience in full-stack
            development, real-time applications, API integration, and modern web
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-6
                backdrop-blur-md
                hover:-translate-y-2
                hover:border-blue-500/40
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-1
                      rounded-full
                      text-sm
                      bg-blue-500/10
                      border border-blue-500/20
                      text-blue-300
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-4 py-2
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-700
                    transition
                  "
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-4 py-2
                    rounded-xl
                    border border-white/20
                    hover:bg-white/10
                    transition
                  "
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
