import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { UserPlus } from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log("Signup attempt:", { name, email, password });
    // Placeholder for authentication logic
    alert("Signup functionality not implemented yet");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-navy via-dark-teal to-accent-blue flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="glass-effect rounded-lg p-8 hover-glow">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-blue to-pale-blue flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-dark-navy" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-pale-blue">Join our AI tutoring platform</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-pale-blue">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-pale-blue/60 focus:border-accent-blue"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-pale-blue">
                Email
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
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-pale-blue/60 focus:border-accent-blue"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-pale-blue">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-pale-blue/60 focus:border-accent-blue"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90 font-semibold"
            >
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-pale-blue">
              Already have an account?{" "}
              <Link 
                href="/login" 
                className="text-accent-blue hover:text-pale-blue transition-colors underline"
              >
                Sign in
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