const projects = [
  {
    title: "Developer Portfolio",
    desc: "React + Tailwind personal portfolio",
    tech: "React, Tailwind",
  },
  {
    title: "EMP Management System",
    desc: "Employee Management System for handling employee tasks, progress, and status.",
    tech: "React, State, Props, Context API, Local Storage",
  },
  {
  title: "Responsive Multi-Page React Website",
  desc: "A dynamic, responsive multi-page website built with React featuring routing, API data fetching, and interactive UI.",
  tech: "React 19, React Router DOM, Axios, Tailwind CSS"
  },
  {
    title: "Todo App",
    desc: "CRUD Todo application",
    tech: "React, State, Props",
  },
  {
  title: "Currency Converter API Integration",
  desc: "A a real-time currency converter with dynamic UI using HTML, CSS, and JavaScript, integrating live exchange rate data via API.",
  tech: "HTML, CSS, Js"
  },
  {
  title: "Interactive Quiz Web App",
  desc: "Developed a responsive quiz app that displays multiple-choice questions, evaluates answers, and shows scores in real time.Features include live answer validation, score tracking, and a clean gradient UI with modular JavaScript logic for smooth interactivity and enhanced user engagement.",
  tech: "HTML, CSS, Js"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 bg-[#0f1425]">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 
              rounded-2xl p-6 hover:-translate-y-2 
              transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">
                {p.title}
              </h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>

              <span className="text-sm text-blue-400">
                {p.tech}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
