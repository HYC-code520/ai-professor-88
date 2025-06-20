
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Clock, DollarSign, Target, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Access",
      description: "Get immediate answers from world-class experts"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "No Long-term Commitments",
      description: "Pay per session, cancel anytime"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Sessions",
      description: "Premium mentorship at accessible prices"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Proven Results",
      description: "Learn from experts who've succeeded"
    }
  ];

  return (
    <section id="mentorship" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Achieve more, <span className="gradient-text">faster</span>
          </h2>
          <p className="text-xl text-pale-blue max-w-3xl mx-auto leading-relaxed">
            Great decisions come from great advice. Skip the guesswork and get instant access to professionals who've been where you are; and succeeded.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="glass-effect border-white/10 hover-glow group">
              <CardContent className="p-6 text-center">
                <div className="text-accent-blue mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-pale-blue text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90 px-8 py-6 text-lg hover-glow group"
          >
            Try it for Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
