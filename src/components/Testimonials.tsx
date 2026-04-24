import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "Great value for money and friendly staff. Made my business trip much easier.",
      author: "James M.",
      type: "Business Traveler"
    },
    {
      text: "Nice location and comfortable stay. The kids loved the pool area.",
      author: "Sarah N.",
      type: "Family Staycation"
    },
    {
      text: "Perfect for short stays in Lusaka. Clean rooms and great breakfast.",
      author: "David L.",
      type: "Tourist"
    }
  ];

  return (
    <section className="py-20 bg-brand-green-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">Guest Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear what our guests have to say about their stay at Fatmols Hotels.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex gap-1 mb-6 text-brand-gold">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-500">{review.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
