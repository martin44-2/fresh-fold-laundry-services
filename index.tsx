
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- CONSTANTS ---
const SERVICES = [
  { id: 'wash-fold', name: 'Wash & Fold', description: 'Perfect for everyday laundry. We wash, dry, and neatly fold your clothes.', price: 'GH₵ 35.00 / kg', basePrice: 35.00, icon: '🧺', image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800' },
  { id: 'dry-cleaning', name: 'Dry Cleaning', description: 'Specialized care for delicate fabrics, suits, and formal wear.', price: 'GH₵ 85.00 / item', basePrice: 85.00, icon: '👔', image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800' },
  { id: 'ironing', name: 'Ironing', description: 'Professional pressing service to keep your garments crisp and wrinkle-free.', price: 'GH₵ 45.00 / item', basePrice: 45.00, icon: '💨', image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&q=80&w=800' },
  { id: 'express', name: 'Express Service', description: 'Need it fast? Same-day turnaround for urgent laundry needs.', price: '+50% Surcharge', basePrice: 1.5, icon: '⚡', image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&q=80&w=800' }
];

const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Order Now', path: '/order' },
  { name: 'Contact', path: '/contact' }
];

// --- COMPONENTS ---

// Fix: Destructure children with a default null value to handle cases where it might be missing in type definitions
const Layout = ({ children = null }: { children?: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-2xl font-black text-blue-600 tracking-tighter italic">FRESHFOLD</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_LINKS.map((link) => (
                <Link key={link.path} to={link.path} className={`${location.pathname === link.path ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-blue-500'} transition-all text-sm uppercase tracking-widest`}>
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} /> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} />}
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-2">
            {NAVIGATION_LINKS.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="block py-3 text-base font-bold text-slate-800 border-b border-slate-50 last:border-0">
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white text-2xl font-black mb-6 italic">FRESHFOLD</h3>
              <p className="max-w-md text-slate-400 leading-relaxed">
                Premium laundry care delivered to your doorstep. Quality, reliability, and convenience are the fabrics of our business.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
              <ul className="space-y-3">
                {NAVIGATION_LINKS.map(link => (
                  <li key={link.path}><Link to={link.path} className="hover:text-blue-400 transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
              <p className="text-sm text-slate-400">Accra, Dansoman<br />(233) 59-399-7536<br />support@freshfold.com</p>
            </div>
          </div>
          <div className="pt-12 mt-12 border-t border-slate-800 text-xs text-center font-medium uppercase tracking-widest text-slate-500">
            &copy; {new Date().getFullYear()} FreshFold Laundry Services.
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- PAGES ---

const Home = () => (
  <div>
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/50"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[0.9] drop-shadow-2xl">CLEAN CLOTHES,<br/><span className="text-blue-400">FRESH LIFE.</span></h1>
          <p className="text-xl md:text-2xl text-blue-50 mb-10 font-medium max-w-xl">Premium door-to-door laundry services. We handle the dirty work so you don't have to.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/order" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all text-center shadow-2xl shadow-blue-900/40">BOOK PICKUP</Link>
            <Link to="/services" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center">OUR SERVICES</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {SERVICES.map(s => (
            <div key={s.id} className="p-8 bg-slate-50 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all duration-500 group border border-slate-100">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.description}</p>
              <div className="text-blue-600 font-black">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const About = () => (
  <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="text-5xl font-black mb-8">Professionalism in <span className="text-blue-600">Every Thread.</span></h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">FreshFold began with a simple mission: to give people their time back. We treat every garment as an investment, using eco-friendly processes and state-of-the-art machinery.</p>
        <div className="grid grid-cols-2 gap-8">
          <div><div className="text-4xl font-black text-blue-600">10k+</div><div className="text-xs uppercase font-bold text-slate-400">Clients</div></div>
          <div><div className="text-4xl font-black text-blue-600">250k+</div><div className="text-xs uppercase font-bold text-slate-400">Items</div></div>
        </div>
      </div>
      <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
        <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
);

const Services = () => {
  const [weight, setWeight] = useState(0);
  const [selected, setSelected] = useState(SERVICES[0].id);
  const calc = () => {
    const s = SERVICES.find(x => x.id === selected);
    return ((s?.basePrice || 0) * weight).toFixed(2);
  };
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-black text-center mb-16">Care Options</h1>
        <div className="grid lg:grid-cols-2 gap-12">
          {SERVICES.map(s => (
            <div key={s.id} className="flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
              <img src={s.image} className="md:w-1/3 h-48 md:h-auto object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{s.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{s.description}</p>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 text-white text-center">
          <h2 className="text-3xl font-black mb-8">Price Estimator</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <select onChange={(e) => setSelected(e.target.value)} className="bg-slate-800 border-none rounded-xl px-6 py-3">
              {SERVICES.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
            <input type="number" onChange={(e) => setWeight(parseFloat(e.target.value) || 0)} placeholder="Weight/Items" className="bg-slate-800 border-none rounded-xl px-6 py-3" />
          </div>
          <div className="text-6xl font-black text-blue-400">GH₵ {calc()}</div>
        </div>
      </div>
    </div>
  );
};

const Order = () => {
  const [done, setDone] = useState(false);
  if (done) return (
    <div className="py-32 text-center">
      <div className="text-6xl mb-6">✅</div>
      <h2 className="text-4xl font-black mb-4">Order Received!</h2>
      <p className="text-slate-500 mb-8">We'll call you in 15 minutes to confirm pickup.</p>
      <button onClick={() => setDone(false)} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold">New Order</button>
    </div>
  );
  return (
    <div className="py-24 max-w-3xl mx-auto px-4">
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100">
        <h1 className="text-3xl font-black mb-8">Book Pickup</h1>
        <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-6">
          <input required type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 rounded-2xl border-none" />
          <input required type="tel" placeholder="Phone Number" className="w-full p-4 bg-slate-50 rounded-2xl border-none" />
          <select className="w-full p-4 bg-slate-50 rounded-2xl border-none">
            {SERVICES.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <input required type="date" className="w-full p-4 bg-slate-50 rounded-2xl border-none" />
          <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">CONFIRM BOOKING</button>
        </form>
      </div>
    </div>
  );
};

const Contact = () => {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="relative h-[300px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
          <h1 className="text-5xl font-black text-white">GET IN TOUCH</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 -mt-12 pb-24 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="font-bold mb-1">Main Office</h3>
            <p className="text-sm text-slate-500">Accra, Dansoman, Adole Abla ST</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="font-bold mb-1">Phone</h3>
            <p className="text-sm text-slate-500">(233) 59-399-7536</p>
          </div>
          <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl">
            <h3 className="font-bold text-xl mb-4">Area Coverage</h3>
            <p className="text-sm text-blue-100">We service Accra, East Legon, Cantonments, and Dansoman.</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
            {sent ? (
              <div className="py-12 text-center text-emerald-600 font-bold">Message sent successfully! We'll reply shortly.</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input required placeholder="Name" className="p-4 bg-slate-50 rounded-2xl border-none w-full" />
                  <input required type="email" placeholder="Email" className="p-4 bg-slate-50 rounded-2xl border-none w-full" />
                </div>
                <textarea required placeholder="How can we help?" rows={5} className="p-4 bg-slate-50 rounded-2xl border-none w-full resize-none"></textarea>
                <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl">SEND MESSAGE</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- APP ENTRY ---

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/order" element={<Order />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Layout>
);

const root = createRoot(document.getElementById('root')!);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
