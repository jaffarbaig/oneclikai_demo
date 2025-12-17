import { Star, User } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      age: '52',
      condition: 'Chronic Kidney Disease',
      rating: 5,
      text: 'Dr. Pavan Kumar has been an exceptional doctor. His thorough approach and compassionate care made managing my kidney disease much easier. Highly recommended!',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Priya Sharma',
      age: '45',
      condition: 'Post-Transplant Patient',
      rating: 5,
      text: 'I received my kidney transplant under Dr. Pavan Kumar\'s care. The entire process was well-managed and the follow-up care has been excellent. I feel in safe hands.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Venkat Reddy',
      age: '58',
      condition: 'Diabetic Kidney Disease',
      rating: 5,
      text: 'Dr. Pavan Kumar explained my condition clearly and provided a comprehensive treatment plan. His expertise in diabetic kidney disease is truly commendable.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied patients about their experiences with Dr. Pavan Kumar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.condition}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="text-sm text-gray-500 flex items-center">
                <User className="w-4 h-4 mr-1" />
                Age: {testimonial.age}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Your Health is Our Priority</h3>
          <p className="mb-6 text-blue-100">
            Join hundreds of patients who have found relief and better health management under Dr. Pavan Kumar's care
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Schedule Your Consultation Today
          </button>
        </div>
      </div>
    </section>
  );
}
