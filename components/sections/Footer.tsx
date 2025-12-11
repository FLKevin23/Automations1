import { CircuitBoard } from 'lucide-react';
 
export function Footer() {
  return (
    <footer className="container mx-auto px-6 py-12 border-t border-white/10">
      <div className="grid md:grid-cols-2 gap-8 justify-center mb-8">
        {/* Column 1 – Branding */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <CircuitBoard className="w-6 h-6 text-[#D4AF37]" />
            <span className="text-xl font-bold">NeuralSync</span> 
          </div>
          <p className="text-white/60 text-sm text-center">
            Building the future of business automation with AI
          </p>
        </div>

        {/* Column 2 – Services */}
        <div className="flex flex-col items-center">
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-white/60 text-sm text-center">
            <li>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                AI Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Automation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">
                Consulting
              </a>
            </li>
          </ul> 
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
        © 2025 NeuralSync AI. All rights reserved.
      </div>
    </footer>
  );
}
