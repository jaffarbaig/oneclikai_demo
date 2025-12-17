import { Phone, Calendar, Stethoscope } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4 mr-2" />
              Senior Nephrologist & Transplant Physician
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Dr. P. Pavan Kumar
            </h1>

            <p className="text-xl text-gray-600 mb-4">
              MBBS, MD (General Medicine), DM (Nephrology)
            </p>

            <div className="flex items-center text-gray-700 mb-6">
              <div className="flex items-center mr-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold text-lg">7+</span>
                </div>
                <span className="text-sm">Years of<br />Experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold text-lg">200+</span>
                </div>
                <span className="text-sm">Kidney<br />Transplants</span>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Expert in Kidney Diseases, Transplantation, and Critical Care Nephrology.
              Providing compassionate, evidence-based care for patients with acute and chronic kidney conditions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </button>
              <a
                href="tel:+919999999999"
                className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Languages Spoken:</p>
              <p className="text-gray-800 font-medium">Telugu, Hindi, English, Tamil</p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8 flex items-center justify-center min-h-[400px]">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Dr. P. Pavan Kumar"
                    className="rounded-2xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
