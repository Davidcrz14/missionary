const QuickNav = ({ items }) => {
  return (
    <nav
      aria-label="Navegación rápida de historia"
      className="mb-12 rounded-[2rem] bg-white/70 backdrop-blur-sm border border-black/5 p-5"
    >
      <p className="text-xs uppercase tracking-widest text-black/40 mb-4">Ir a sección</p>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-black/70 hover:text-black hover:bg-[#FFF8E1] border border-transparent hover:border-black/10"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default QuickNav;
