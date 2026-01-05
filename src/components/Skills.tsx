import { Palette, Layout, Search, Figma, Smartphone, Code } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Search,
      title: 'Research & Strategy',
      skills: [
        { name: 'User Research', level: 95 },
        { name: 'Competitive Analysis', level: 90 },
        { name: 'User Personas', level: 92 },
        { name: 'Journey Mapping', level: 88 }
      ]
    },
    {
      icon: Palette,
      title: 'Visual Design',
      skills: [
        { name: 'UI Design', level: 96 },
        { name: 'Design Systems', level: 93 },
        { name: 'Typography', level: 90 },
        { name: 'Color Theory', level: 91 }
      ]
    },
    {
      icon: Layout,
      title: 'UX Design',
      skills: [
        { name: 'Wireframing', level: 94 },
        { name: 'Prototyping', level: 92 },
        { name: 'Interaction Design', level: 90 },
        { name: 'Usability Testing', level: 89 }
      ]
    }
  ];

  const tools = [
    { icon: Figma, name: 'Figma', color: 'text-purple-600' },
    { icon: Smartphone, name: 'Sketch', color: 'text-orange-600' },
    { icon: Code, name: 'HTML/CSS', color: 'text-blue-600' },
    { icon: Layout, name: 'Adobe XD', color: 'text-pink-600' }
  ];

  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A blend of research, design, and technical skills to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6">
                <category.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Design Tools I Use
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <tool.icon className={`w-12 h-12 mb-3 ${tool.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="font-medium text-gray-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
