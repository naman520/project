export default function WorkPage() {
  const projects = ["Gravette", "Osin Lighting", "Itsettled"];

  return (
    <main className="py-16 bg-white px-10">
      <h3 className="text-3xl font-bold mb-10 text-center">Our Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="shadow-lg p-5 rounded-lg hover:scale-105 transition">
            <img src={`/images/project${idx + 1}.jpg`} alt={project} className="rounded mb-4" />
            <h4 className="text-xl font-semibold">{project}</h4>
            <p className="text-sm text-gray-500">High-impact branding with visual storytelling.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
