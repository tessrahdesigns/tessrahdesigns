import { Heart, Users, Lightbulb, Target } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Empathy First',
      description: 'Understanding user needs and pain points drives every design decision I make.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with teams to create solutions that exceed expectations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Exploring creative solutions while maintaining usability and accessibility.'
    },
    {
      icon: Target,
      title: 'Impact Driven',
      description: 'Measuring success through user satisfaction and business outcomes.'
    }
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-center mb-20">
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <img
                src="/Tessrah-Thinesh-73.png"
                alt="Profile"
                className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white font-bold text-lg">5+</p>
                  <p className="text-white text-xs">Years</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Designing with purpose and passion
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                With over 5 years of experience in UX design, I've helped startups and established companies create digital products that users love. My approach combines research, creativity, and strategic thinking to deliver designs that are both beautiful and functional.
              </p>
              <p>
                I believe great design is invisible. It guides users naturally, anticipates their needs, and creates delightful moments that keep them coming back.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
