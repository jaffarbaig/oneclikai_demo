import { TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

export default function Statistics() {
  const stats = [
    {
      icon: Users,
      number: '200+',
      label: 'Kidney Transplants',
      description: 'Live, cadaver, and high-risk transplants',
    },
    {
      icon: TrendingUp,
      number: '7500+',
      label: 'Dialysis Procedures',
      description: 'Temporary catheter placements',
    },
    {
      icon: CheckCircle,
      number: '1000+',
      label: 'Kidney Biopsies',
      description: 'Successful diagnostic procedures',
    },
    {
      icon: Award,
      number: '7+',
      label: 'Years Experience',
      description: 'Specialized nephrology care',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience That Matters
          </h2>
          <p className="text-xl text-blue-100">
            Proven track record in delivering exceptional kidney care
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <p className="text-sm text-blue-100">{stat.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Why Choose Dr. P. Pavan Kumar?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Expert Diagnosis</h4>
              <p className="text-sm text-blue-100">
                Accurate identification of kidney conditions using advanced diagnostic techniques
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Personalized Care</h4>
              <p className="text-sm text-blue-100">
                Tailored treatment plans designed for each patient's unique needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2">Comprehensive Support</h4>
              <p className="text-sm text-blue-100">
                Continuous care from diagnosis through treatment and recovery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
