const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],

  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Socket.io",
  ],

  Database: ["MongoDB", "Mongoose"],

  Tools: ["Git", "GitHub", "Postman", "VS Code"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 tracking-[4px] uppercase mb-3">
            Technical Skills
          </p>

          <h2 className="text-4xl font-bold">Technologies I Work With</h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of technologies and tools I use to build modern,
            scalable and high-performance web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white/5 border border-white/10
              rounded-3xl p-8 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold mb-6">{category}</h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full
                    bg-blue-500/10 border border-blue-500/20
                    text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
