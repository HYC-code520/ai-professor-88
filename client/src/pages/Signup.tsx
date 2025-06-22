import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { UserPlus } from "lucide-react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up attempt:", { email, password, agreeToTerms });
    alert("Sign up functionality not implemented yet");
  };

  const handleSkip = () => {
    console.log("Skip clicked");
    alert("Skip functionality not implemented yet");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-navy via-dark-teal to-accent-blue flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="glass-effect rounded-lg p-8 hover-glow">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-blue to-pale-blue flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-dark-navy" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Sign Up</h1>
            <p className="text-pale-blue">Sign up to receive updates about new features and improvements.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-pale-blue">
                Enter your email
              </Label>
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
              <Label htmlFor="password" className="text-pale-blue">
                Create a password (optional)
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-pale-blue/60 focus:border-accent-blue"
              />
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="agree"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-accent-blue focus:ring-accent-blue focus:ring-offset-0"
                required
              />
              <label htmlFor="agree" className="text-sm text-pale-blue">
                I agree to the{" "}
                <a href="#" className="text-accent-blue hover:text-pale-blue underline">
                  Terms of Service
                </a>
                {" "}and{" "}
                <a href="#" className="text-accent-blue hover:text-pale-blue underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div className="flex space-x-4">
              <Button 
                type="button"
                variant="ghost"
                onClick={handleSkip}
                className="flex-1 text-pale-blue hover:text-accent-blue hover:bg-white/5"
              >
                Skip
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90"
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

          <div className="mt-6 text-center">
            <Link 
              href="/" 
              className="text-pale-blue hover:text-accent-blue transition-colors text-sm"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;