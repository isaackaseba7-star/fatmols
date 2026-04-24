/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustValue from './components/TrustValue';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import ContactBooking from './components/ContactBooking';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="font-sans text-gray-900 antialiased bg-gray-50 selection:bg-brand-green/20 selection:text-brand-green-dark">
      <Navigation />
      <main>
        <Hero />
        <TrustValue />
        <Rooms />
        <Amenities />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <ContactBooking />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
