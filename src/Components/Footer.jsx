const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0f1f]">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">
          Aditya Chauhan
        </h3>

        <p className="text-gray-400 max-w-lg mx-auto">
          MERN Stack Developer passionate about building modern, scalable and
          user-friendly web applications.
        </p>

        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Aditya Chauhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
