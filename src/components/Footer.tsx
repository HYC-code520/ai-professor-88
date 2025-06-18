
const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-pale-blue hover:text-accent-blue transition-colors">Terms</a>
            <a href="#" className="text-pale-blue hover:text-accent-blue transition-colors">Privacy</a>
          </div>
          
          <div className="text-pale-blue text-sm">
            Copyright aitutor.io 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
