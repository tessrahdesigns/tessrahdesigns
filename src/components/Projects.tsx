import {ArrowRight } from 'lucide-react';

interface ProjectMetric {
  label: string;
  value: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  image: string;
  metrics?: ProjectMetric[];
  hasPDF?: boolean;
}

interface ProjectsProps {
  onCaseStudyClick?: (projectIndex: number) => void;
}

export default function Projects({ onCaseStudyClick }: ProjectsProps) {
  const projects: Project[] = [
    {
      title: 'OneAudi Digital Dealership',
      category: 'Automotive / Enterprise',
      description: 'A platform-led transformation that unified Audi’s fragmented dealer ecosystem — improving page speed by 400% and enabling a seamless customer journey across thousands of sites globally.',
      tags: ['Design System', 'Scalability', 'Enterprise', 'MACH Architecture'],
      gradient: 'from-red-600 to-orange-600',
      image: '/tyler-clemmensen-5q1xp_kresk-unsplash.jpg',
      metrics: [
        { label: 'Page Speed', value: '+400%' },
        { label: 'Detail Page Visits', value: '+25%' },
        { label: 'Cross-Platform Movement', value: '+100%' },
        { label: 'Global Markets', value: '14' }
      ],
      hasPDF: true
    },
    {
      title: 'Dealer Theme Activation Platform',
      category: 'Automotive / Backend System',
      description: 'I worked on a backend admin experience that enables admins and dealerships to manage dealer-specific themes for Audi loaner vehicles. These themes appear on the vehicle’s Multimedia Interface screen and can include branded imagery and QR codes that link customers to dealership inventory pages.',
      tags: ['Backend Admin', 'B2B', 'Adobe Spectrum', 'User Flows'],
      gradient: 'from-emerald-500 to-teal-500',
      image: '/Dealertheme-platform.jpg',
      metrics: [
        { label: 'Dealers Enrolled', value: '19' },
        { label: 'Vehicles Activated', value: '1,763' },
        { label: 'Delivery Timeline', value: '4 weeks' },
        { label: 'Capacity', value: '50%' }
      ],
      hasPDF: true
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of recent work that demonstrates my approach to solving complex design challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.hasPDF && (
                  <button
                    onClick={() => onCaseStudyClick?.(index)}
                    className="flex items-center space-x-2 text-blue-600 font-medium group-hover:space-x-3 transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
