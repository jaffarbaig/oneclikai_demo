import { Award, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: 'DM (Nephrology)',
      institution: 'PSG Institute of Medical Sciences, Coimbatore',
    },
    {
      degree: 'MD (General Medicine)',
      institution: 'Vydehi Medical College, Bangalore',
    },
    {
      degree: 'MBBS',
      institution: 'PES Medical College, Kuppam',
    },
  ];

  const experience = [
    'Consultant Nephrologist, Abhirami Hospital, Coimbatore',
    'Consultant Physician, Kamakshi Care Hospital, Chirala',
    'Intensivist & CMO, Health Hospital, Tenali',
    'Medical Officer, Community Health Center, Amaravathi',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Dr. P. Pavan Kumar
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{exp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="flex items-start">
            <Award className="w-8 h-8 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-3">Clinical Excellence</h3>
              <p className="text-blue-50 leading-relaxed">
                Dr. P. Pavan Kumar brings extensive experience in managing complex kidney diseases
                and has been part of over 200 successful kidney transplants. His expertise spans
                clinical nephrology, interventional procedures, and critical care, making him a
                trusted specialist for comprehensive kidney care. He is committed to providing
                personalized, compassionate treatment to every patient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
