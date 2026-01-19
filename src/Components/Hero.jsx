const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">

        <p className="text-blue-400 tracking-widest mb-3">
          FRONTEND DEVELOPER
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Building <span className="text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-400 to-purple-500">
            modern UI
          </span><br />
          with React
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          I'm <span className="font-bold underline text-xl">Aditya</span>, a React developer who builds clean, scalable
          and user-friendly interfaces.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-blue-500 
            hover:bg-blue-600 transition font-medium"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border 
            border-white/20 hover:bg-white/10 transition"
          >
            Contact
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
