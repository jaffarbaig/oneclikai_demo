import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. P. Pavan Kumar</h3>
            <p className="text-gray-400 leading-relaxed">
              Senior Nephrologist & Transplant Physician
              <br />
              MBBS, MD, DM (Nephrology)
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Doctor
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition">
                  Areas of Expertise
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: +91 99999 99999</li>
              <li>Email: dr.pavankumar@example.com</li>
              <li>Location: Coimbatore, Tamil Nadu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> by{' '}
            <a 
              href="https://oneclikai.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors mx-1"
            >
              OneClikAI
            </a>{' '}
            for better kidney health
          </p>
          <p className="text-gray-500 text-sm mt-2">
            &copy; {currentYear} Dr. P. Pavan Kumar. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-4">
            This website is for informational purposes only and does not constitute medical advice.
            Please consult with Dr. Pavan Kumar for professional medical guidance.
          </p>
        </div>
      </div>
    </footer>
  );
}
