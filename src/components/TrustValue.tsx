import { MapPin, Wallet, Users, Wifi, Coffee, ShieldCheck } from 'lucide-react';

export default function TrustValue() {
  const highlights = [
    {
      icon: <MapPin className="w-8 h-8 text-brand-gold" />,
      title: "Great Location",
      desc: "Perfectly situated in Olympia Park, close to business districts and shopping."
    },
    {
      icon: <Wallet className="w-8 h-8 text-brand-gold" />,
      title: "Affordable Pricing",
      desc: "Premium comfort without the premium price tag. Great value for your money."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-gold" />,
      title: "Friendly Staff",
      desc: "Experience genuine Zambian hospitality from our welcoming team."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-green-dark mb-4">
            Affordable Comfort in Olympia Park
          </h2>
          <p className="text-gray-600">
            Ideal for business travelers, local staycations, and tourists looking for a reliable home base in Lusaka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {highlights.map((item, i) => (
            <div key={i} className="bg-brand-green-light/30 rounded-2xl p-8 text-center hover:-translate-y-1 transition-transform border border-brand-green-light">
              <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-brand-green dark:bg-brand-green-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-brand-gold blur-[100px] opacity-20 rounded-full" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-full"><Wifi className="text-brand-gold" /></div>
              <span className="font-medium text-lg">Free Wi-Fi</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-full"><Coffee className="text-brand-gold" /></div>
              <span className="font-medium text-lg">Free Breakfast</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/10 rounded-full"><ShieldCheck className="text-brand-gold" /></div>
              <span className="font-medium text-lg">Secure Parking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
