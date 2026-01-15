import excavatorVideo from "../assets/excavator_video2.mp4";
import posterImg from "../assets/powertools2.webp";



export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen relative flex flex-col justify-center items-center text-center text-yellow-400 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={posterImg}
        className="absolute inset-0 w-full h-full object-cover filter brightness-50"
      >
        <source src={excavatorVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content on top */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Construction Equipment Rentals
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Reliable tools & machinery for every job — rent fast, work smarter
        </p>
        <div className="space-x-4">
          <a href="#services" className="hover:text-yellow-500">
            <button className="bg-yellow-400 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition">
              Our Equipment
            </button>
          </a>
          <a href="#contact" className="hover:text-yellow-500">
            <button className="border border-yellow-400 text-yellow-400 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-slate-900 transition cursor-pointer">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
