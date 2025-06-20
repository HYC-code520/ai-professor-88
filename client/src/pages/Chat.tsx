import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Volume2, Send, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'jeremy'}>>([]);

  const handleStartConversation = () => {
    setIsStarted(true);
    setMessages([
      { text: "Hello, My name is Jeremy, What's your name?", sender: 'jeremy' }
    ]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages(prev => [...prev, { text: message, sender: 'user' }]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-navy via-dark-teal to-dark-navy">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-md">
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
            
            <nav className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" className="text-pale-blue hover:text-accent-blue hover:bg-white/5">
                Log in
              </Button>
              <Button className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90">
                Sign up
              </Button>
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
                <Button variant="ghost" className="text-pale-blue hover:text-accent-blue hover:bg-white/5 justify-start">
                  Log in
                </Button>
                <Button className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90 justify-start">
                  Sign up
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <div className="mb-4">
              <Link href="/">
                <button className="text-pale-blue hover:text-accent-blue transition-colors text-sm inline-flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to homepage
                </button>
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Pave your way to Entrepreneurship
            </h1>
            <p className="text-pale-blue text-lg">
              413 people like yourself have talked with our experts' digital twins.
            </p>
          </div>

          {/* Professor Card */}
          <Card className="glass-effect border-white/10 mb-8 max-w-2xl mx-auto">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-accent-blue to-pale-blue p-4 sm:p-6 rounded-t-lg">
                <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-20 h-20 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white flex-shrink-0">
                    <img 
                      src="/lovable-uploads/138926b5-c3fd-40c4-a05e-627288a7842d.png" 
                      alt="Jeremy Kagan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-dark-navy">Prof. Jeremy Kagan</h3>
                    <p className="text-dark-navy/80 text-sm sm:text-base">NYU Stern, Entrepreneurship</p>
                  </div>
                  <div className="w-full sm:w-auto sm:ml-auto">
                    <Button 
                      className="bg-white text-accent-blue hover:bg-white/90 w-full sm:w-auto"
                      onClick={handleStartConversation}
                    >
                      Start Conversation
                    </Button>
                  </div>
                </div>
              </div>

              {!isStarted ? (
                <div className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-3 h-3 bg-accent-blue rounded-full mx-auto mb-4 animate-pulse"></div>
                  </div>
                  <p className="text-pale-blue mb-6">
                    Ask Prof. Kagan about startup strategies, business models, product market fit, 
                    or how to launch your venture with confidence.
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90 mb-4"
                    onClick={handleStartConversation}
                  >
                    <Volume2 className="w-4 h-4 mr-2" />
                    Start Conversation
                  </Button>
                  <p className="text-accent-blue text-sm">Free for 5 Minutes</p>
                </div>
              ) : (
                <div className="p-6">
                  {/* Chat Area */}
                  <div className="min-h-[300px] mb-4 bg-white/5 rounded-lg p-4 overflow-y-auto">
                    <div className="space-y-3">
                      {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] p-3 rounded-lg ${
                            msg.sender === 'user' 
                              ? 'bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy' 
                              : 'bg-white/10 text-white border border-white/20'
                          }`}>
                            {msg.sender === 'jeremy' && (
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-6 h-6 rounded-full overflow-hidden bg-white">
                                  <img 
                                    src="/lovable-uploads/138926b5-c3fd-40c4-a05e-627288a7842d.png" 
                                    alt="Jeremy"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <span className="text-xs text-pale-blue font-medium">Prof. Jeremy</span>
                              </div>
                            )}
                            <p className="text-sm">{msg.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Message Input */}
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-pale-blue/60 flex-1"
                    />
                    <Button type="submit" className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy">
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Additional Info Card */}
          <div className="max-w-2xl mx-auto">
            <Card className="glass-effect border-white/10">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="hidden sm:block w-24 h-32 bg-gradient-to-b from-accent-blue to-pale-blue rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/138926b5-c3fd-40c4-a05e-627288a7842d.png" 
                      alt="Prof. Kagan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h4 className="font-bold text-white text-lg">Prof. Kagan</h4>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-medium rounded-full">NYU STERN</span>
                    </div>
                    <p className="text-accent-blue font-medium text-sm mb-4">
                      Entrepreneurship & Business
                    </p>
                    <p className="text-pale-blue text-sm mb-5 leading-relaxed">
                      This digital twin is brought to you through AI training on Professor's past
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                        <span className="text-pale-blue text-sm font-medium">Audio chats</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                        <span className="text-pale-blue text-sm font-medium">Textbooks</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                        <span className="text-pale-blue text-sm font-medium">Lecture Slides</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                        <span className="text-pale-blue text-sm font-medium">Recorded Lectures</span>
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity">
                      Make your own Digital Twin here
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-gradient-to-r from-dark-teal to-accent-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white hover:text-pale-blue transition-colors">Terms</a>
              <a href="#" className="text-white hover:text-pale-blue transition-colors">Privacy</a>
            </div>
            
            <div className="text-white text-sm">
              Copyright AI tutors 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Chat;