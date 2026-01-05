import { ArrowLeft, Target, Lightbulb, Award } from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
}

export default function OneAudiCaseStudy({ onBack }: CaseStudyProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>

        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
            Automotive / Enterprise
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            OneAudi Digital Dealership
          </h1>

          <p className="text-2xl text-gray-600 leading-relaxed mb-8">
            Audi’s customers don’t shop in straight lines — they move fluidly between OEM and dealer sites as they research, compare, and decide. The OneAudi Digital Dealership (oADD) was created to support this reality. We built a unified Audi’s digital dealership experience across North America, United Kingdom, and Germany.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
              <p className="text-3xl md:text-4xl font-bold text-red-600 mb-2">400%</p>
              <p className="text-sm text-gray-700">Page Speed Improvement</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
              <p className="text-3xl md:text-4xl font-bold text-red-600 mb-2">+25%</p>
              <p className="text-sm text-gray-700">Detail Page Visits</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
              <p className="text-3xl md:text-4xl font-bold text-red-600 mb-2">+100%</p>
              <p className="text-sm text-gray-700">Cross-Platform Movement</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
              <p className="text-3xl md:text-4xl font-bold text-red-600 mb-2">14</p>
              <p className="text-sm text-gray-700">Global Markets</p>
            </div>
          </div>
        </div>

        <div className="h-96 bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <img
            src="/tyler-clemmensen-5q1xp_kresk-unsplash.jpg"
            alt="OneAudi Digital Dealership"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">The Problem</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
            Audi’s dealer sites were hosted on third-party platforms that prioritized dealer autonomy over customer experience.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Key pain points included:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-red-600 font-bold mt-1">•</span>
                <span>Dealers needed to keep functionality for: chat, finance forms, vehicle trade-ins, service scheduling</span>
              </li>
        
              <li className="flex items-start space-x-3">
                <span className="text-red-600 font-bold mt-1">•</span>
                <span>Inconsistent brand experience across markets - leading Audi to not appear as a premium brand to consumers</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Lightbulb className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">The Solution</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              I built information architecture and wireframes that were leveraged by developers to build a unified digital ecosystem in Adobe Experience Manager, ultimately replacing the need for third-party platforms such as Dealer.com.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Key initiatives included:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-red-600 font-bold mt-1">•</span>
                <span>Conducted comprehensive analysis of information architecture across multiple markets before developing one that worked across the board</span>
              </li>
        
              <li className="flex items-start space-x-3">
                <span className="text-red-600 font-bold mt-1">•</span>
                <span>Conducted expansive audit of vendor integrations that should be included in wireframes. Developed wireframes that were used for all markets and used Audi Design system</span>
              </li>
        
            </ul>
                  
          </div>
        </div>
        
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Award className="w-6 h-6 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">Design Process</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-l-4 border-red-600 pl-8 py-6 rounded-r-lg bg-gradient-to-r from-red-50 to-transparent">
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. Information Architecture</h3>
              <p className="text-gray-700">
                Restructured navigation and content hierarchy to support both dealer and customer workflows.
              </p>
            </div>

            <div className="bg-white border-l-4 border-red-600 pl-8 py-6 rounded-r-lg bg-gradient-to-r from-red-50 to-transparent">
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. Wireframing & Prototyping</h3>
              <p className="text-gray-700">
                Created comprehensive wireframes for 40+ screens and interactive prototypes for user testing. Utilized Figma for real-time collaboration across distributed teams.
              </p>
            </div>
<div className="mb-8">
              <img
                src="/Vendor Integrations.png"
                alt="Manage Dealers admin screen showing dealer search, filters, and activation status"
                className="w-full rounded-xl border border-gray-200 shadow-sm"
              />
            </div>
            <div className="bg-white border-l-4 border-red-600 pl-8 py-6 rounded-r-lg bg-gradient-to-r from-red-50 to-transparent">
              <h3 className="text-lg font-bold text-gray-900 mb-2">3. Design System Development</h3>
              <p className="text-gray-700">
                Built a scalable design system with 100+ components, comprehensive guidelines, and accessibility standards. Ensured consistency across all markets while allowing regional customization.
              </p>
            </div>
            <div className="bg-white border-l-4 border-red-600 pl-8 py-6 rounded-r-lg bg-gradient-to-r from-red-50 to-transparent">
              <h3 className="text-lg font-bold text-gray-900 mb-2">4. Implementation & Handoff</h3>
              <p className="text-gray-700">
                Provided detailed design specifications, component documentation, and conducted training sessions with development teams. Supported engineering through QA and launch phases.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold mt-0.5">✓</span>
                  <span>25% increase in detail page visits driving qualified leads</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold mt-0.5">✓</span>
                  <span>$2.3M estimated annual savings through platform consolidation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold mt-0.5">✓</span>
                  <span>Enabled rapid scaling to 14 markets in 18 months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Key Learnings</h2>
          <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-white">
              <p className="text-lg mb-3">
                <span className="font-bold">Lack of Data-Driven Design:</span> Although I was able to sit in on some user interviews conducted by the UX Research team; the business didn't allocate many resources into hearing what our users needed. In the future I'd advocate harder for those resources.
              </p>
            </div>
        
            <div className="text-white">
              <p className="text-lg mb-3">
                <span className="font-bold"> The different user types:</span> This roll-out affected not only Audi consumers, but also the Dealers. They are our other user who needed to learn to use AEM rather than Dealer.com from the backend. There wasn't enough guidance created for the Dealer user type which became a problem later on.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Details</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Timeline</h3>
              <p className="text-gray-700">24 months (Discovery: 4mo, Design: 8mo, Implementation: 12mo)</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Team</h3>
              <p className="text-gray-700">15-person cross-functional team including 4 designers, 8 engineers, PM, and stakeholders</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">My Role</h3>
              <p className="text-gray-700">UX Designer: experience architecture, system-level UX decisions, and ensuring customer journeys remained cohesive across OEM and dealer touchpoints.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
