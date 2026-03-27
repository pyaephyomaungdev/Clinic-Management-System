export default function Contact() {
  return (
    <div className="py-20 px-8 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Get in touch with <span className="text-indigo-600">Brainiacs.</span></h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Need technical support with the management system? Or perhaps a demo for your clinic staff? Our team is available 24/7.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">@</div>
              <span>support@braniacs.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-700">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">#</div>
              <span>+1 (234) 567-890</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}