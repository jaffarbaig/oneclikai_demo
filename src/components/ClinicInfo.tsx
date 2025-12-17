import { MapPin, Clock, Phone, AlertCircle } from 'lucide-react';

export default function ClinicInfo() {
  const opdTimings = [
    { day: 'Monday', timing: '9:00 AM - 12:00 PM', sessions: '2:00 PM - 6:00 PM' },
    { day: 'Tuesday', timing: '9:00 AM - 12:00 PM', sessions: '2:00 PM - 6:00 PM' },
    { day: 'Wednesday', timing: '9:00 AM - 12:00 PM', sessions: '2:00 PM - 6:00 PM' },
    { day: 'Thursday', timing: '9:00 AM - 12:00 PM', sessions: '2:00 PM - 6:00 PM' },
    { day: 'Friday', timing: '9:00 AM - 12:00 PM', sessions: '2:00 PM - 6:00 PM' },
    { day: 'Saturday', timing: '9:00 AM - 12:00 PM', sessions: 'By Appointment' },
    { day: 'Sunday', timing: 'Closed', sessions: 'Emergency Only' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Clinic Information
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-8 border border-blue-200">
              <div className="flex items-start mb-6">
                <MapPin className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Clinic Location</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">Nephrology & Transplant Center</span>
                    <br />
                    Abhirami Hospital
                    <br />
                    Coimbatore, Tamil Nadu
                    <br />
                    <span className="text-sm text-gray-600">
                      (Equipped with state-of-the-art dialysis facilities)
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-8 h-8 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quick Contact</h4>
                  <a href="tel:+919999999999" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                    +91 99999 99999
                  </a>
                  <p className="text-sm text-gray-600 mt-1">For appointments and emergencies</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Emergency Services Available</h3>
              </div>
              <p className="text-gray-700">
                24/7 emergency services for acute kidney conditions and critical care dialysis.
                Contact clinic for emergency protocols.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-blue-600 text-white px-6 py-4 flex items-center">
                <Clock className="w-6 h-6 mr-3" />
                <h3 className="text-xl font-bold">OPD Timings</h3>
              </div>

              <div className="divide-y">
                {opdTimings.map((item, index) => (
                  <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center md:items-start">
                      <div>
                        <h4
                          className={`font-semibold text-gray-900 ${
                            item.day === 'Sunday' ? 'text-gray-500' : ''
                          }`}
                        >
                          {item.day}
                        </h4>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-sm ${
                            item.day === 'Sunday' ? 'text-gray-500' : 'text-gray-700'
                          }`}
                        >
                          {item.timing}
                        </p>
                        <p
                          className={`text-xs font-medium ${
                            item.day === 'Sunday'
                              ? 'text-gray-400'
                              : 'text-blue-600'
                          }`}
                        >
                          {item.sessions}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 px-6 py-4 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Note: </span>
                Please call ahead for appointment confirmation. Emergency cases are attended to outside OPD hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
