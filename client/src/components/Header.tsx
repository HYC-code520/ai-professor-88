
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-blue to-pale-blue flex items-center justify-center">
                <span className="text-dark-navy font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold gradient-text">AI tutors</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-pale-blue hover:text-accent-blue hover:bg-white/5">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90">
                Sign up
              </Button>
            </Link>
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
            <nav className="flex flex-col space-y-2 mt-4">
              <Link href="/login">
                <Button variant="ghost" className="text-pale-blue hover:text-accent-blue hover:bg-white/5 justify-start w-full">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90 justify-start w-full">
                  Sign up
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
