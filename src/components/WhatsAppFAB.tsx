import { Phone } from 'lucide-react';

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/260955291548"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BE5C] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="WhatsApp Booking"
    >
      <Phone size={28} className="drop-shadow-sm" />
      <span className="absolute -top-12 right-0 bg-white text-gray-900 text-sm py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium">
        Message us to book!
      </span>
    </a>
  );
}
