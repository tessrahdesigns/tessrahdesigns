import { Briefcase, BookOpen, Award } from 'lucide-react';

export default function Timeline() {
  const timelineItems = [
    {
      type: 'certification',
      icon: Award,
      title: 'User Experience Designer',
      organization: 'Uxcel',
      period: 'Issued Oct 2025',
      duration: 'Expires Oct 2027',
      description: 'Professional certification validating expertise in UX design principles and methodologies.',
      color: 'from-orange-500 to-pink-500'
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'User Experience Designer',
      organization: 'BIMM',
      period: 'Dec 2022 - Present',
      duration: '3 yr',
      description: 'Leading UX design initiatives and creating user-centered digital experiences for enterprise clients.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'UX/UI Designer',
      organization: 'Stacktics',
      period: 'Oct 2021 - Dec 2022',
      duration: '1 yr 3 mo',
      description: 'Designed intuitive interfaces and conducted user research to optimize product experiences.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      type: 'education',
      icon: BookOpen,
      title: 'Certificate in User Experience Design',
      organization: 'University of Toronto',
      period: 'School of Continuing Education',
      description: 'Comprehensive program covering UX research, interaction design, and usability testing.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Graphic Designer',
      organization: '10+ Years Experience',
      period: 'Sep 2009 - Oct 2019',
      duration: '10 yr',
      description: 'Shaped stories into striking visuals through years of creative problem solving.',
      color: 'from-red-500 to-rose-500'
    }
  ];

  return (
    <section id="timeline" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A timeline of professional growth, continuous learning, and career milestones.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-cyan-200 to-blue-200" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className={`font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                          {item.organization}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="text-sm text-gray-600">{item.period}</span>
                          {item.duration && (
                            <>
                              <span className="w-1 h-1 bg-gray-400 rounded-full" />
                              <span className="text-sm text-gray-500">{item.duration}</span>
                            </>
                          )}
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10" />

                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <p className="text-lg text-gray-700">
              <span className="font-bold text-gray-900">15+ years</span> of design experience spanning
              <br />
              graphic design and creating meaningful digital experiences that users love
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
