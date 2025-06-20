import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, ArrowLeft, User, Bot } from "lucide-react";
import { Link } from "wouter";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm Professor Jeremy Kagan from NYU Stern. I'm here to help you with entrepreneurship and business strategy. What would you like to discuss today?",
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "That's a great question! As an entrepreneur myself, I'd recommend focusing on validating your market first. Can you tell me more about your target audience and the problem you're solving?",
        sender: "ai",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-navy to-dark-teal">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-pale-blue hover:text-accent-blue">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-blue to-pale-blue flex items-center justify-center">
                  <Bot className="w-5 h-5 text-dark-navy" />
                </div>
                <div>
                  <h2 className="text-white font-semibold">Jeremy Kagan</h2>
                  <p className="text-pale-blue text-sm">NYU Stern Professor</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-pale-blue text-sm">Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex flex-col h-[calc(100vh-80px)]">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="container mx-auto max-w-4xl">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-blue to-pale-blue flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-dark-navy" />
                  </div>
                )}
                
                <Card className={`max-w-[80%] ${
                  message.sender === "user" 
                    ? "bg-gradient-to-r from-accent-blue to-pale-blue" 
                    : "glass-effect border-white/10"
                }`}>
                  <CardContent className="p-4">
                    <p className={`${
                      message.sender === "user" ? "text-dark-navy" : "text-white"
                    }`}>
                      {message.content}
                    </p>
                    <span className={`text-xs mt-2 block ${
                      message.sender === "user" ? "text-dark-navy/70" : "text-pale-blue/70"
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </CardContent>
                </Card>

                {message.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-pale-blue" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-blue to-pale-blue flex items-center justify-center">
                  <Bot className="w-4 h-4 text-dark-navy" />
                </div>
                <Card className="glass-effect border-white/10">
                  <CardContent className="p-4">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-pale-blue rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-pale-blue rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-pale-blue rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-md p-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex space-x-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask Jeremy about entrepreneurship, business strategy, or startups..."
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-pale-blue/60 focus:border-accent-blue"
                disabled={isTyping}
              />
              <Button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-accent-blue to-pale-blue text-dark-navy hover:opacity-90 px-6"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;