import { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Dr. P. Pavan Kumar
              </h1>
              <p className="text-xs md:text-sm text-gray-600">Nephrologist & Transplant Physician</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Contact
            </button>
            <a
              href="tel:+919999999999"
              className="text-gray-700 hover:text-blue-600 transition font-medium flex items-center"
            >
              <Phone className="w-4 h-4 mr-1" />
              Call
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors flex items-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition font-medium text-left py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('expertise')}
                className="text-gray-700 hover:text-blue-600 transition font-medium text-left py-2"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition font-medium text-left py-2"
              >
                Contact
              </button>
              <a
                href="tel:+919999999999"
                className="text-gray-700 hover:text-blue-600 transition font-medium py-2 flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
