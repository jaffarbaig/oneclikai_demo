import { useState } from 'react';
import { ChevronDown, Droplet, Heart, ClipboardList } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      icon: Droplet,
      title: 'Dialysis',
      color: 'blue',
      faqs: [
        {
          question: 'What is dialysis and why is it needed?',
          answer:
            'Dialysis is a treatment that replicates kidney function to remove excess water and waste products from the blood. It is needed when kidneys can no longer filter waste effectively, usually when kidney function drops to 10-15% or less.',
        },
        {
          question: 'How long does a dialysis session take?',
          answer:
            'A typical hemodialysis session takes about 3-5 hours, usually performed 3 times per week. The duration and frequency may vary based on body weight and residual kidney function.',
        },
        {
          question: 'What is the difference between hemodialysis and peritoneal dialysis?',
          answer:
            'Hemodialysis uses an external machine to filter blood through a dialyzer. Peritoneal dialysis uses the peritoneal membrane inside your abdomen to filter blood. Both are effective; the choice depends on individual factors and patient preference.',
        },
        {
          question: 'Can I travel while on dialysis?',
          answer:
            'Yes, patients on dialysis can travel with proper planning. We help coordinate dialysis treatment at your destination and provide necessary medical documentation. Emergency dialysis is available in most major cities.',
        },
      ],
    },
    {
      icon: Heart,
      title: 'Kidney Transplant',
      color: 'green',
      faqs: [
        {
          question: 'What is kidney transplantation?',
          answer:
            'Kidney transplantation is a surgical procedure where a healthy kidney from a donor is placed into your body to filter waste and produce urine. It is the most effective long-term treatment for kidney failure.',
        },
        {
          question: 'What are the sources of kidney donors?',
          answer:
            'Kidneys can come from living donors (family, friends, altruistic donors) or deceased donors. Living donor transplants often have better long-term outcomes because surgery can be planned in advance.',
        },
        {
          question: 'How long does a transplanted kidney last?',
          answer:
            'A kidney from a living donor typically lasts 15-20 years, while a kidney from a deceased donor lasts 10-15 years on average. However, with modern immunosuppressive therapy, many transplants last much longer.',
        },
        {
          question: 'What medications are needed after transplant?',
          answer:
            'After transplantation, immunosuppressive medications are essential to prevent the body from rejecting the new kidney. These medications must be taken lifelong, and compliance is crucial for graft survival.',
        },
      ],
    },
    {
      icon: ClipboardList,
      title: 'Chronic Kidney Disease (CKD)',
      color: 'purple',
      faqs: [
        {
          question: 'What is Chronic Kidney Disease?',
          answer:
            'CKD is a long-term condition where the kidneys gradually lose function over time. It progresses through 5 stages based on the glomerular filtration rate (GFR), with stage 5 being kidney failure.',
        },
        {
          question: 'What are the causes of CKD?',
          answer:
            'Common causes include diabetes, hypertension, glomerulonephritis, polycystic kidney disease, and recurrent kidney infections. Early detection and management of these conditions can slow CKD progression.',
        },
        {
          question: 'What lifestyle changes help manage CKD?',
          answer:
            'Important modifications include controlling blood pressure and blood sugar, limiting sodium and phosphorus intake, staying physically active, maintaining a healthy weight, and quitting smoking. Regular monitoring of kidney function is essential.',
        },
        {
          question: 'Can CKD be prevented?',
          answer:
            'While you cannot reverse kidney damage, you can slow progression by managing blood pressure, controlling diabetes, avoiding nephrotoxic drugs, limiting NSAIDs, and maintaining a healthy lifestyle. Early diagnosis is key to effective management.',
        },
      ],
    },
  ];

  const colorMap: Record<
    string,
    { bg: string; border: string; icon: string; button: string }
  > = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'bg-blue-600',
      button: 'hover:bg-blue-50',
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'bg-green-600',
      button: 'hover:bg-green-50',
    },
    purple: {
      bg: 'bg-slate-50',
      border: 'border-slate-200',
      icon: 'bg-slate-600',
      button: 'hover:bg-slate-50',
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Get answers to common questions about kidney health and treatments
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colors = colorMap[category.color];

            return (
              <div key={categoryIndex}>
                <div
                  className={`${colors.bg} border-2 ${colors.border} rounded-xl p-6 mb-4 flex items-center`}
                >
                  <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    const isOpen = activeIndex === globalIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setActiveIndex(isOpen ? null : globalIndex)
                          }
                          className={`w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-gray-900 ${colors.button} transition-colors`}
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-600 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Have More Questions?
          </h3>
          <p className="text-gray-700 mb-6">
            Don't hesitate to reach out to Dr. Pavan Kumar for personalized answers to your specific kidney health concerns.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
