import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/tessrah/', color: 'hover:text-blue-600' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/tessrahdesigns', color: 'hover:text-gray-900' },
    { icon: Mail, label: 'Email', href: 'mailto:tessrahdesigns@gmail.com', color: 'hover:text-red-600' }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Create Something
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600 mb-2">Email me at</p>
                <a
                  href="mailto:tessrahdesigns@gmail.com"
                  className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  tessrahdesigns@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-gray-200 text-center">

        <p className="text-gray-600">
          © 2026 Tessrah Designs.
        </p>
      </footer>
    </section>
  );
}
