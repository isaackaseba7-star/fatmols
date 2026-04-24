import { Wind, Bath, BedDouble, Check } from 'lucide-react';

export default function Rooms() {
  const rooms = [
    {
      name: "Standard Room",
      image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80&w=1200",
      desc: "Perfect for solo business travelers or short stays, offering clean, simple comfort.",
      features: ["Double Bed", "Air Conditioning", "Private Bathroom", "Free Wi-Fi"]
    },
    {
      name: "Deluxe Room",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200",
      desc: "More space to relax with upgraded amenities, ideal for couples or longer stays.",
      features: ["Queen Bed", "Air Conditioning", "Private Bathroom", "Work Desk"]
    },
    {
      name: "Family Suite",
      image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&q=80&w=1200",
      desc: "Spacious accommodation designed for families or small groups traveling together.",
      features: ["Multiple Beds", "Air Conditioning", "Private Bathroom", "Sitting Area"]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-brand-green font-medium tracking-wider uppercase text-sm mb-3 block">Comfortable Living</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">Rooms & Accommodation</h2>
          </div>
          <p className="hidden md:block text-brand-gold font-medium">Limited rooms available</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                 <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-serif font-medium text-white">{room.name}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{room.desc}</p>
                <ul className="space-y-3 mb-8">
                  {room.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-brand-green-light flex items-center justify-center mr-3 text-brand-green shrink-0">
                        <Check size={12} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact"
                  className="block w-full text-center py-3 px-4 border border-brand-green text-brand-green font-medium rounded-xl hover:bg-brand-green hover:text-white transition-colors"
                >
                  Check Availability
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
