import { Heart, Syringe, Activity, ClipboardList } from 'lucide-react';

export default function Expertise() {
  const expertiseAreas = [
    {
      icon: Heart,
      title: 'Clinical Nephrology',
      color: 'blue',
      services: [
        'Acute and Chronic Kidney Diseases',
        'Nephrotic Syndrome (Adult & Pediatric)',
        'Glomerulonephritis',
        'Kidney and Urinary Tract Infections',
        'Secondary and Young-Onset Hypertension',
        'Diabetic Kidney Disease',
        'Congenital Kidney and Urinary Tract Disorders',
      ],
    },
    {
      icon: Activity,
      title: 'Kidney Transplantation',
      color: 'green',
      services: [
        'Part of 200+ Kidney Transplants',
        'Live and Cadaver Kidney Transplantation',
        'High-Risk Transplants including ABO Incompatible',
        'Management of Transplant Rejection',
        'Post-Transplant Infection Management',
      ],
    },
    {
      icon: Syringe,
      title: 'Interventional Nephrology',
      color: 'purple',
      services: [
        'Temporary Dialysis Catheter Placements (7500+)',
        'Permcath / Tunneled Dialysis Catheters (200+)',
        'Percutaneous CAPD Catheter Placement (20–30)',
        'Kidney Biopsies (1000+)',
      ],
    },
    {
      icon: ClipboardList,
      title: 'Critical Care Nephrology',
      color: 'red',
      services: [
        'Hemodialysis & Hemodiafiltration',
        'SLED (Sustained Low-Efficiency Dialysis)',
        'CRRT (CVVH, CVVHD, CVVHDF, SCUF)',
        'Hemoperfusion for Poisoning and Drug Overdose',
        'Plasmapheresis / Plasma Exchange',
      ],
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; icon: string }> = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'bg-blue-600' },
    green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'bg-green-600' },
    purple: { bg: 'bg-slate-50', border: 'border-slate-200', icon: 'bg-slate-600' },
    red: { bg: 'bg-rose-50', border: 'border-rose-200', icon: 'bg-rose-600' },
  };

  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Areas of Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive kidney care with specialized expertise in diagnosis, treatment, and management
            of all kidney-related conditions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            const colors = colorMap[area.color];

            return (
              <div
                key={index}
                className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-8 hover:shadow-xl transition-shadow`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center mr-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                </div>

                <ul className="space-y-3">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Comprehensive Patient Care Approach
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Every patient receives personalized treatment plans based on the latest medical evidence
            and best practices in nephrology. Dr. Pavan Kumar works closely with patients and their
            families to ensure they understand their condition and treatment options, fostering a
            collaborative approach to kidney health management.
          </p>
        </div>
      </div>
    </section>
  );
}
