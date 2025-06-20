
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-blue to-pale-blue flex items-center justify-center">
              <span className="text-dark-navy font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold gradient-text">AI tutor</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-pale-blue hover:text-accent-blue transition-colors">Home</a>
            <a href="#about" className="text-pale-blue hover:text-accent-blue transition-colors">About</a>
            <a href="#mentorship" className="text-pale-blue hover:text-accent-blue transition-colors">Mentorship</a>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-pale-blue hover:text-accent-blue hover:bg-white/5">
                Log in
              </Button>
              <Button className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90">
                Sign up
              </Button>
            </div>
          </nav>

          <button 
            className="md:hidden text-pale-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-pale-blue hover:text-accent-blue transition-colors">Home</a>
              <a href="#about" className="text-pale-blue hover:text-accent-blue transition-colors">About</a>
              <a href="#mentorship" className="text-pale-blue hover:text-accent-blue transition-colors">Mentorship</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-pale-blue hover:text-accent-blue hover:bg-white/5 justify-start">
                  Log in
                </Button>
                <Button className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90 justify-start">
                  Sign up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
