import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    "Convenient Olympia Park location",
    "Affordable comfort without compromise",
    "Relaxing and secure environment",
    "Friendly and welcoming staff",
    "Ideal for both business & leisure"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1542314831-c6a4d270b22a?auto=format&fit=crop&q=80&w=1200" 
                alt="Relaxing environment" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-6 rounded-2xl shadow-xl w-64 border border-brand-green-light">
              <p className="text-4xl font-serif text-brand-gold font-bold mb-2">3-Star</p>
              <p className="font-medium text-gray-800 leading-tight">Premium Comfort in Lusaka</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-brand-green font-medium tracking-wider uppercase text-sm mb-3 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900 mb-6 leading-tight">
              Comfort and Reliability You Can Trust
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Fatmols Hotels, we blend the warmth of Zambian hospitality with modern conveniences. Whether you're in Lusaka for an important business meeting or a relaxing staycation, our dedicated team ensures your stay is seamless.
            </p>
            
            <ul className="space-y-4 mb-10">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-center text-gray-800 font-medium">
                  <CheckCircle2 className="text-brand-gold w-6 h-6 mr-4 shrink-0" />
                  {reason}
                </li>
              ))}
            </ul>

            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green text-white font-medium rounded-full hover:bg-brand-green-dark transition-colors">
              Book Directly For Best Rates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
