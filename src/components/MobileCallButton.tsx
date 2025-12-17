import { Phone } from 'lucide-react';

export default function MobileCallButton() {
  return (
    <a
      href="tel:+919999999999"
      className="fixed bottom-6 right-6 md:hidden bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-40 animate-pulse"
      title="Call Now"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
