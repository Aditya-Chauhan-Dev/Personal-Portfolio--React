const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <p className="text-blue-400 tracking-[4px] uppercase font-medium mb-4">
          MERN Stack Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Building
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r
            from-blue-400 via-cyan-400 to-purple-500"
          >
            {" "}
            Scalable Full-Stack{" "}
          </span>
          <br />
          Web Applications
        </h1>

        <div>
          <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed">
            Hi, I'm <span className="font-bold text-white">Aditya Chauhan</span>
            . I develop modern, responsive and high-performance web applications
            using <span className="text-blue-400">MongoDB</span>,
            <span className="text-green-400"> Express.js</span>,
            <span className="text-cyan-400"> React</span> and
            <span className="text-yellow-400"> Node.js</span>.
            <br />
            Passionate about creating clean user experiences, scalable backend
            architectures and real-world solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
