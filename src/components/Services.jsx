import generatorImg from "../assets/generator.jpeg";
import pumpImg from "../assets/pump.jpg";
import grinderImg from "../assets/grinder4.png";
import scaffoldingImg from "../assets/scaffolding.jpg";

export default function Services() {
  const services = [
    {
      title: "Portable Generators",
      desc: "Reliable power solutions for construction sites and outdoor work.",
      img: generatorImg,
    },
    {
      title: "Suction & Water Pumps",
      desc: "Efficient pumping solutions for dewatering and drainage needs.",
      img: pumpImg,
    },
    {
      title: "Metal Cutting Grinders",
      desc: "High-performance tools for cutting metal with precision and safety.",
      img: grinderImg,
    },
    {
      title: "Scaffolding",
      desc: "Safe and durable scaffolding solutions available for short and long-term rental.",
      img: scaffoldingImg,
    },
  ];

  return (
    <section id="services" className="w-full bg-slate-100 py-20 px-6">
      <div className="max-w-[1440px] mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Equipment for Rent</h2>
      </div>

      {/* Grid container */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center py-4 border-t-4 border-yellow-400"
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-auto h-[230px] object-cover"
            />

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600 flex-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
