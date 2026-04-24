import { Phone, MapPin, Mail, Navigation } from 'lucide-react';

export default function ContactBooking() {
  return (
    <section id="contact" className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Booking Info & Location */}
          <div>
            <span className="text-brand-green font-medium tracking-wider uppercase text-sm mb-3 block">Reach Out</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-8">Ready to book your stay?</h2>
            
            <p className="text-gray-600 mb-10">
              Call or WhatsApp for instant booking. Guarantee the best rates and personalized service when you book directly with us.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-brand-green">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone & WhatsApp</h4>
                  <p className="text-gray-600 text-lg mt-1">095 5291548</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-brand-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600 mt-1">Chakeluka Rd, Olympia Park<br/>Lusaka, Zambia</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/260955291548"
                className="flex-1 bg-[#25D366] hover:bg-[#20BE5C] text-white text-center py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone size={20} /> WhatsApp Us Now
              </a>
              <a 
                href="tel:0955291548"
                className="flex-1 bg-brand-gold hover:bg-yellow-500 text-white text-center py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone size={20} /> Click to Call
              </a>
            </div>
          </div>

          {/* Booking Form and Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">Request a Reservation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-shadow" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-shadow" placeholder="Your phone number" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                     <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-shadow bg-white">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3+ Guests</option>
                    </select>
                  </div>
                </div>
                <button type="button" className="w-full py-4 mt-2 bg-brand-green-dark hover:bg-black text-white font-medium rounded-xl transition-colors">
                  Send Booking Request
                </button>
              </form>
            </div>

            <div id="location" className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 h-64 overflow-hidden relative group">
              {/* Minimal placeholder for google maps embedding */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.33777241031!2d28.29749171738279!3d-15.385501899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f36746815cf1%3A0x6bbaeee09cf525b6!2sOlympia%20Park%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1714041234567!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow-sm flex items-center gap-2 pointer-events-none">
                 <Navigation size={14} className="text-brand-green" /> Nearby shopping & transport
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
