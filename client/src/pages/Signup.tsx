import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useLocation } from "wouter";

const Signup = () => {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeToTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy");
      return;
    }
    console.log("Signup clicked");
    alert("Sign up successful!");
  };

  const handleSkip = () => {
    console.log("Skip clicked");
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-navy via-dark-teal to-accent-blue flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="glass-effect rounded-lg p-8 hover-glow">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Sign Up</h1>
            <p className="text-pale-blue">Sign up to receive updates about new features and improvements.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-pale-blue/60 focus:border-accent-blue"
                required
              />
            </div>

            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Create a password (optional)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-pale-blue/60 focus:border-accent-blue"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                className="border-white/20 data-[state=checked]:bg-accent-blue data-[state=checked]:border-accent-blue"
              />
              <label htmlFor="terms" className="text-sm text-pale-blue">
                I agree to the{" "}
                <span className="text-accent-blue hover:underline cursor-pointer">Terms of Service</span>
                {" "}and{" "}
                <span className="text-accent-blue hover:underline cursor-pointer">Privacy Policy</span>
              </label>
            </div>

            <div className="flex space-x-4">
              <Button 
                type="button"
                onClick={handleSkip}
                variant="outline"
                className="flex-1 bg-transparent border-white/20 text-pale-blue hover:bg-white/10"
              >
                Skip
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90 font-semibold"
              >
                Sign Up
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-pale-blue">
              Already have an account?{" "}
              <Link 
                href="/login" 
                className="text-accent-blue hover:text-pale-blue transition-colors underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;