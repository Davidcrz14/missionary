const SectionHeader = ({ eyebrow, title, description, centered = true }) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-10`}>
      {eyebrow ? (
        <span className="text-black/40 text-sm uppercase tracking-widest font-medium">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-bold text-black/90 mt-2 mb-2">
        {title}
      </h2>
      {description ? (
        <p className="text-black/60 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
