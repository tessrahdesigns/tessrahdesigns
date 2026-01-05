import { ArrowLeft, Users, Target, Lightbulb, Clock, Award, CheckCircle2, AlertCircle } from 'lucide-react';

interface CaseStudyProps {
  onBack: () => void;
}

export default function DealerThemeCaseStudy({ onBack }: CaseStudyProps) {
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
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium mb-6">
            Automotive / Backend Admin
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Dealer Theme Activation Platform
          </h1>

          <p className="text-2xl text-gray-600 leading-relaxed mb-8">
           In March 2025, I worked on a backend admin experience that enables admins and dealerships to manage dealer-specific themes for Audi loaner vehicles. These themes appear on the vehicle’s Multimedia Interface screen and can include branded imagery and QR codes that link customers to dealership inventory pages.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
              <p className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">19</p>
              <p className="text-sm text-gray-700">Dealers Enrolled</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
              <p className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">1,763</p>
              <p className="text-sm text-gray-700">Vehicles Activated</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
              <p className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">4 weeks</p>
              <p className="text-sm text-gray-700">Delivery Timeline</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
              <p className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">50%</p>
              <p className="text-sm text-gray-700">Design Capacity</p>
            </div>
          </div>
        </div>

        <div className="h-96 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <img
            src="/Dealertheme-platform.jpg"
            alt="Dealer Theme Activation Platform"
            className="w-full h-full object-cover opacity-90"
          />
  
        </div>
        <p className="text-2xl text-gray-600 leading-relaxed mb-8">
           The project had a four-week delivery timeline and evolving business and technical requirements. I supported the team at 50% capacity, collaborating closely with product management and engineering to translate complex backend workflows into a simple, scalable admin experience.</p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">Problem Statement</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Admins needed a simple and intuitive backend interface to manage dealer-specific themes for Audi loaner vehicles.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Key requirements:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold mt-1">•</span>
                <span>Enroll and manage eligible dealerships and vehicles across North America</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold mt-1">•</span>
                <span>Upload and activate dealer-specific themes with branded imagery</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold mt-1">•</span>
                <span>Track loaner vehicles by VINs</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-emerald-600 font-bold mt-1">•</span>
                <span>Monitor activations that succeeded and failed for reporting</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">Users & Personas</h2>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100 mb-4">
              <h3 className="font-bold text-gray-900 mb-2">Primary Persona</h3>
              <p className="text-gray-700 mb-3">
                Internal admins and backend operators responsible for managing dealer enrollment, theme activation, and vehicle status monitoring.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold">Key Traits:</span></p>
                <p>• Task-focused with high volume of daily operations</p>
                <p>• Manages multiple dealers simultaneously</p>
                <p>• Requires clear system feedback for successful activations</p>
                <p>• Needs efficiency in repetitive workflows</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <AlertCircle className="w-6 h-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Constraints & Challenges</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
                <h3 className="text-lg font-bold text-gray-900">Tight Timeline</h3>
              </div>
              <p className="text-gray-700">
                Four-week delivery timeline with limited opportunity for iteration. Joined the project after initial lo-fi wireframes had already been created by the PM.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Backend Complexity</h3>
              <p className="text-gray-700">
                Backend-heavy logic handled outside the UI. Background image storage, theme uploads, and daily VIN polling all managed server-side.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Evolving Requirements</h3>
              <p className="text-gray-700">
                Business and technical requirements evolved throughout the project. Continuous collaboration with PM and engineering was essential for alignment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Balancing Perspectives</h3>
              <p className="text-gray-700">
                Aligning UX perspective with pre-existing PM wireframes while advocating for clarity, scalability, and usability.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Lightbulb className="w-6 h-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">UX Approach</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-l-4 border-emerald-600 pl-8 py-6 rounded-r-lg bg-gradient-to-r from-emerald-50 to-transparent">
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. User Flow Mapping</h3>
              <p className="text-gray-700">
                Started by mapping a comprehensive user flow to align stakeholders on how admins move through dealer management and VIN activation before diving into detailed screens.
              </p>
            </div>

            <div className="bg-white border-l-4 border-emerald-600 pl-8 py-6 rounded-r-lg bg-gradient-to-r from-emerald-50 to-transparent">
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. Lo-Fi Wireframe Evaluation</h3>
              <p className="text-gray-700">
                Used PM's initial lo-fi wireframes as a starting point. Evaluated gaps and developed expanded lo-fi concepts to better support search and filtering at scale, clear system states, and reduced cognitive load.
              </p>
            </div>

            <div className="bg-white border-l-4 border-emerald-600 pl-8 py-6 rounded-r-lg bg-gradient-to-r from-emerald-50 to-transparent">
              <h3 className="text-lg font-bold text-gray-900 mb-2">3. Design System Implementation</h3>
              <p className="text-gray-700">
                Leveraged Adobe Spectrum Design System for backend admin tool, aligning with engineering implementation while avoiding unnecessary use of Audi's consumer-facing brand system.
              </p>
            </div>

            <div className="bg-white border-l-4 border-emerald-600 pl-8 py-6 rounded-r-lg bg-gradient-to-r from-emerald-50 to-transparent">
              <h3 className="text-lg font-bold text-gray-900 mb-2">4. High-Fidelity Design & Annotation</h3>
              <p className="text-gray-700">
                Progressed designs to mid- and high-fidelity with detailed annotations to clarify functionality, reference Spectrum components, and provide edge-case handling for developer handoff.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Award className="w-6 h-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Key Screens & Features</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manage Dealers</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                This screen enables admins to search dealers by name or ID, filter by enrollment status, and view dealer location.
              </p>
          <div className="mt-8 aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            src="https://embed.figma.com/proto/TdNUdnShIzYy17CBnBCkkt/Dealer-Theme-Activation-Platform?page-id=0%3A1&node-id=1-11817&p=f&viewport=25%2C268%2C0.09&scaling=contain&content-scaling=fixed&embed-host=share"
            allowFullScreen
            className="w-full h-full"
            title="Manage Dealers Figma Prototype"
          />
        </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Advanced search and filtering for dealer discovery at scale</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Edit dealer details with confirmation flows for enrollment changes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Preview dealer-specific themes including branded imagery and QR codes</span>
                  </li>
      
            
                </ul>
              </div>
        
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">VIN Activations</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                This view enables admins to track activated loaner vehicles by VIN, monitor activation status, and filter by dealer and activation date for operational oversight.
              </p>
              <div className="mb-8">
              <img
                src="/VIN Activations-03-All Activations view.png"
                alt="Manage Dealers admin screen showing dealer search, filters, and activation status"
                className="w-full rounded-xl border border-gray-200 shadow-sm"
              />
            </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Real-time VIN activation status tracking with clear visual indicators</span>
                  </li>
            
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Filter by dealer, activation date, and status for monitoring and reporting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Display of most recent daily VINs</span>
                  </li>
                </ul>
              </div>
        
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Outcome & Results</h2>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 mb-8">
            <p className="text-lg text-gray-700 mb-4">
              As of <span className="font-bold text-gray-900">July 2025</span>, the Dealer Theme Activation Platform successfully launched with strong adoption and operational stability:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Platform Metrics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><span className="font-semibold">19 dealers</span> successfully enrolled in the program</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><span className="font-semibold">1,763 vehicles</span> activated through the platform</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Smooth deployment with no critical issues</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Stable backend monitoring and daily VIN processing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Operational Success</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Validated scalability for future dealer expansion</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Efficient admin workflows reduced task completion time</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Clear system feedback improved operational confidence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Annotated Figma designs facilitated smooth developer handoff</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Key Learnings</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-white">
              <p className="text-lg mb-3">
                <span className="font-bold">1. Backend-Frontend Alignment:</span> Early alignment on backend vs frontend responsibilities is critical for admin tools. Clear boundaries prevent scope confusion and streamline implementation.
              </p>
            </div>
            <div className="text-white">
              <p className="text-lg mb-3">
                <span className="font-bold">2. PM Collaboration:</span> PM-created wireframes can be valuable starting points, but UX still plays a key role in ensuring scalability, clarity, and usability for end users.
              </p>
            </div>
            <div className="text-white">
              <p className="text-lg mb-3">
                <span className="font-bold">3. Annotation Value:</span> Detailed design annotations significantly improve developer handoff under tight timelines, reducing ambiguity and implementation questions.
              </p>
            </div>
            <div className="text-white">
              <p className="text-lg mb-3">
                <span className="font-bold">4. System Feedback:</span> Clear system states and feedback mechanisms are essential for operational tools where admins need confidence in successful task completion.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Details</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Timeline</h3>
              <p className="text-gray-700 mb-6">March 2025 - 4 weeks (Design and delivery)</p>

              <h3 className="font-bold text-gray-900 mb-2">Team</h3>
              <p className="text-gray-700 mb-6">Cross-functional team including Product Management, Engineering, and UX Design</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Design System</h3>
              <p className="text-gray-700 mb-6">Adobe Spectrum Design System for backend admin consistency</p>

              <h3 className="font-bold text-gray-900 mb-2">My Role</h3>
              <p className="text-gray-700">UX Designer at 50% capacity - User flows, wireframes, high-fidelity design, annotations, cross-functional collaboration</p>
            </div>
          </div>

          <div className="mt-8 bg-emerald-50 rounded-xl p-6 border border-emerald-100">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Note:</span> Some UI details and data points have been simplified or anonymized to respect confidentiality. This case study reflects the design approach, methodology, and outcomes achieved within project constraints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
