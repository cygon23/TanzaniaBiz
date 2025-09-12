import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  language?: 'en' | 'sw';
}

const sampleMessages: Message[] = [
  {
    id: '1',
    content: 'Karibu! I\'m your AI business assistant. How can I help you today with your business journey in Tanzania?',
    sender: 'ai',
    timestamp: new Date(),
    language: 'en'
  }
];

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState<'en' | 'sw'>('en');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
      language
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(input, language),
        sender: 'ai',
        timestamp: new Date(),
        language
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userInput: string, lang: 'en' | 'sw'): string => {
    const responses = {
      en: {
        business: "I can help you with business registration, BRELA requirements, market analysis, and financial planning. What specific area would you like to focus on?",
        registration: "To register your business in Tanzania, you'll need to follow these BRELA steps: 1) Name reservation, 2) Company incorporation, 3) Tax registration with TRA. I can guide you through each step.",
        funding: "There are several funding options available: government grants, microfinance, angel investors, and bank loans. Based on your business type and stage, I can recommend the best options.",
        default: "I'm here to help with your business needs in Tanzania. You can ask me about registration, compliance, funding, market research, or any business-related questions."
      },
      sw: {
        business: "Ninaweza kukusaidia na usajili wa biashara, mahitaji ya BRELA, uchambuzi wa soko, na mipango ya kifedha. Ni eneo gani maalum ungependa kuzingatia?",
        registration: "Ili kusajili biashara yako Tanzania, utahitaji kufuata hatua hizi za BRELA: 1) Uhifadhi wa jina, 2) Uongozaji wa kampuni, 3) Usajili wa kodi na TRA. Ninaweza kukuongoza kila hatua.",
        funding: "Kuna chaguo kadhaa za fedha zinazopatikana: ruzuku za serikali, fedha ndogo, wawekezaji malaika, na mikopo ya benki. Kulingana na aina ya biashara yako na hatua, ninaweza kupendekeza chaguo bora zaidi.",
        default: "Nipo hapa kusaidia na mahitaji yako ya biashara Tanzania. Unaweza kuniuliza kuhusu usajili, mfumo, fedha, utafiti wa soko, au maswali yoyote yanayohusiana na biashara."
      }
    };

    const input = userInput.toLowerCase();
    const langResponses = responses[lang];

    if (input.includes('business') || input.includes('biashara')) {
      return langResponses.business;
    } else if (input.includes('register') || input.includes('sajili')) {
      return langResponses.registration;
    } else if (input.includes('funding') || input.includes('fedha')) {
      return langResponses.funding;
    }
    
    return langResponses.default;
  };

  return (
    <Card className="h-96 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">AI Business Assistant</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
        >
          <Languages className="w-4 h-4 mr-2" />
          {language === 'en' ? 'English' : 'Kiswahili'}
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            <div
              className={cn(
                "max-w-[80%] px-3 py-2 rounded-lg",
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              <div className="flex items-center space-x-2 mb-1">
                {message.sender === 'ai' ? (
                  <Bot className="w-3 h-3" />
                ) : (
                  <User className="w-3 h-3" />
                )}
                <span className="text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted text-muted-foreground px-3 py-2 rounded-lg">
              <div className="flex items-center space-x-1">
                <Bot className="w-3 h-3" />
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-current rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                  <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border/50">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={language === 'en' ? "Ask me anything about your business..." : "Niulize chochote kuhusu biashara yako..."}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};