const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-[#0f1425]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-blue-400 tracking-widest mb-3">
            ABOUT ME
          </p>

          <h2 className="text-3xl font-bold mb-6">
            Frontend Developer <br /> who loves clean UI
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I’m Aditya, a frontend developer focused on building modern,
            responsive, and scalable web applications using
            <span className="text-white"> React JS</span> and
            <span className="text-white"> Tailwind CSS</span>.
            <br /><br />
            I enjoy converting ideas into real products and continuously
            improving my skills by building real-world projects.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white/5 border border-white/10 
          rounded-2xl p-8 backdrop-blur-md">

          <ul className="space-y-4 text-gray-300">
            <li>🚀 Strong in React fundamentals</li>
            <li>🎨 Clean & responsive UI</li>
            <li>⚡ Fast learner & problem solver</li>
            <li>💻 Passionate about frontend</li>
          </ul>

        </div>

      </div>
    </section>
  )
}

export default About
