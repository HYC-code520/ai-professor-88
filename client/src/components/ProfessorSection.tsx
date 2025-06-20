
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, PlayCircle, FileText } from "lucide-react";

const ProfessorSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-dark-navy/50 to-dark-teal/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="glass-effect rounded-2xl p-8 hover-glow">
              <div className="relative mx-auto mb-6 w-fit">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-accent-blue to-pale-blue flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/138926b5-c3fd-40c4-a05e-627288a7842d.png" 
                    alt="Jeremy Kagan"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <img 
                  src="/lovable-uploads/fdddc300-a93a-4962-a134-2237c5d45af1.png" 
                  alt="NYU Stern"
                  className="absolute -top-2 -right-2 w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 gradient-text">
                Jeremy Kagan
              </h3>
              <p className="text-pale-blue text-center leading-relaxed">
                Professor at NYU Stern School of Business and a seasoned entrepreneur. 
                He specializes in helping founders launch ventures with clarity and confidence.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-6">
              Learn from the <span className="gradient-text">Best</span>
            </h2>
            <p className="text-pale-blue text-lg mb-8">
              We've extracted years of experience from Prof Kagan and we're sharing his decades of entrepreneurship with you.
            </p>
            
            <div className="grid gap-4">
              <Card className="glass-effect border-white/10 hover-glow">
                <CardContent className="p-6 flex items-center space-x-4">
                  <BookOpen className="w-8 h-8 text-accent-blue" />
                  <div>
                    <h4 className="font-semibold text-white">Textbooks</h4>
                    <p className="text-pale-blue text-sm">Comprehensive learning materials</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-white/10 hover-glow">
                <CardContent className="p-6 flex items-center space-x-4">
                  <FileText className="w-8 h-8 text-accent-blue" />
                  <div>
                    <h4 className="font-semibold text-white">Lecture Slides</h4>
                    <p className="text-pale-blue text-sm">Visual learning resources</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-white/10 hover-glow">
                <CardContent className="p-6 flex items-center space-x-4">
                  <PlayCircle className="w-8 h-8 text-accent-blue" />
                  <div>
                    <h4 className="font-semibold text-white">Recorded Lectures</h4>
                    <p className="text-pale-blue text-sm">On-demand video content</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessorSection;
