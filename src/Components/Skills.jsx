const skills = [
  "HTML", "CSS", "JavaScript",
  "React", "Tailwind",
  "Git & GitHub"
]

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map(skill => (
            <div
              key={skill}
              className="bg-white/5 border border-white/10 
              backdrop-blur-md rounded-xl py-6 
              hover:scale-105 transition"
            >
              <p className="text-lg font-medium">{skill}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
