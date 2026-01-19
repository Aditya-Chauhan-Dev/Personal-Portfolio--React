const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl 
      bg-white/10 backdrop-blur-md border border-white/20 
      px-6 py-3 rounded-2xl flex justify-between items-center z-50">

      <h1 className="text-lg font-bold tracking-wide">
        Aditya<span className="text-blue-400">.</span>
      </h1>

      <ul className="flex gap-6 text-sm text-gray-300">
        {["About","Skills","Projects","Contact"].map(item => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
