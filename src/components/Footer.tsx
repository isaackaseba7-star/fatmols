import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Fatmols Hotels</h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Comfortable, affordable, and reliable accommodation in the heart of Olympia Park, Lusaka.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/260955291548" className="text-gray-400 hover:text-white transition-colors">
                <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-brand-gold hover:text-brand-gold">
                  <Phone size={18} />
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#rooms" className="hover:text-brand-gold transition-colors">Accommodation</a></li>
              <li><a href="#amenities" className="hover:text-brand-gold transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2"><span className="text-brand-gold">Check-in:</span> 2:00 PM</li>
              <li className="flex items-center gap-2"><span className="text-brand-gold">Check-out:</span> 10:00 AM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fatmols Hotels - Lusaka, Zambia. All rights reserved.</p>
          <p>Designed for comfort.</p>
        </div>
      </div>
    </footer>
  );
}
