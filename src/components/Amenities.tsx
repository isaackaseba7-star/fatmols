import { Wifi, Coffee, Waves, Car, Wind, Baby } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    { icon: <Wifi size={28} />, name: "Free Wi-Fi" },
    { icon: <Coffee size={28} />, name: "Free Breakfast" },
    { icon: <Waves size={28} />, name: "Swimming Pool" },
    { icon: <Car size={28} />, name: "Free Parking" },
    { icon: <Wind size={28} />, name: "Air Conditioning" },
    { icon: <Baby size={28} />, name: "Kid-Friendly Environment" }
  ];

  return (
    <section id="amenities" className="py-24 bg-brand-green-dark text-white relative overflow-hidden">
      {/* Decorative background oval */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-16">Hotel Amenities</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {amenities.map((item, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-2 group-hover:bg-brand-gold">
                {item.icon}
              </div>
              <span className="font-medium text-sm md:text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
