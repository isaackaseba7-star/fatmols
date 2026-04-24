import { Phone, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2670"
          alt="Modern hotel pool in Zambia"
          className="w-full h-full object-cover"
        />
        {/* Dark/green gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/80 to-black/50 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-6 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium tracking-wide uppercase">
            Olympia Park, Lusaka 🇿🇲
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-balance drop-shadow-lg">
            Comfortable & Affordable Stays in <span className="text-brand-gold italic">Lusaka</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-green-light max-w-2xl mx-auto drop-shadow text-balance">
            Experience relaxation, convenience, and warm hospitality at Fatmols Hotels in Olympia Park.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-yellow-500 text-white rounded-full font-medium text-lg transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar size={20} /> Book Your Stay
            </a>
            <a
              href="https://wa.me/260955291548"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white text-white rounded-full font-medium text-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} /> WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
