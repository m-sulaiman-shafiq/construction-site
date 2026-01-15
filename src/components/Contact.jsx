export default function Contact() {
    return (
      <section id="contact" className="w-full bg-slate-900 text-yellow-400 py-20 px-6">
        <div className="max-w-[1440px] mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg md:text-xl text-yellow-200">
            Have a project in mind? Send us a message and we'll get back to you!
          </p>
        </div>
  
        <div className="max-w-[800px] mx-auto bg-slate-800 p-8 rounded-2xl shadow-lg flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
          ></textarea>
          <button className="bg-yellow-400 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition">
            Send Message
          </button>
        </div>
      </section>
    );
  }
  