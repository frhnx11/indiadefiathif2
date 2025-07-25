import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Bot, X, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

const FloatingBot = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const questions = [
    {
      question: "How familiar are you with DeFi protocols?",
      options: [
        { text: "Never heard of DeFi", score: 0 },
        { text: "Know the basics", score: 1 },
        { text: "Used a few protocols", score: 2 },
        { text: "Active DeFi user", score: 3 },
      ],
    },
    {
      question: "Have you ever provided liquidity to a DeFi protocol?",
      options: [
        { text: "What's liquidity provision?", score: 0 },
        { text: "I understand the concept", score: 1 },
        { text: "I've tried it once or twice", score: 2 },
        { text: "I'm a regular LP", score: 3 },
      ],
    },
    {
      question: "How comfortable are you with smart contract risks?",
      options: [
        { text: "What are smart contracts?", score: 0 },
        { text: "I know they exist", score: 1 },
        { text: "I understand basic risks", score: 2 },
        { text: "I always check audits", score: 3 },
      ],
    },
    {
      question: "Have you participated in DeFi governance?",
      options: [
        { text: "Never heard of it", score: 0 },
        { text: "I know what it is", score: 1 },
        { text: "I've voted occasionally", score: 2 },
        { text: "I'm active in governance", score: 3 },
      ],
    },
    {
      question: "How do you manage DeFi portfolio risks?",
      options: [
        { text: "I don't know about risks", score: 0 },
        { text: "I invest small amounts", score: 1 },
        { text: "I diversify across protocols", score: 2 },
        { text: "I use advanced risk tools", score: 3 },
      ],
    },
  ];

  const getResult = (totalScore: number) => {
    if (totalScore <= 3) {
      return {
        level: "DeFi Newbie",
        color: "bg-blue-100 text-blue-800",
        description: "You're just starting your DeFi journey! Our educational resources are perfect for you.",
        recommendation: "Start with our DeFi Basics video series and interactive glossary.",
      };
    } else if (totalScore <= 7) {
      return {
        level: "DeFi Explorer",
        color: "bg-green-100 text-green-800", 
        description: "You have a good foundation! Ready to dive deeper into DeFi protocols.",
        recommendation: "Check out our comprehensive DeFi handbook and join our community discussions.",
      };
    } else if (totalScore <= 11) {
      return {
        level: "DeFi Enthusiast",
        color: "bg-purple-100 text-purple-800",
        description: "You're actively engaged with DeFi! Time to explore advanced strategies.",
        recommendation: "Join our Full Membership for exclusive research and policy insights.",
      };
    } else {
      return {
        level: "DeFi Expert",
        color: "bg-yellow-100 text-yellow-800",
        description: "You're a DeFi power user! Consider contributing to the ecosystem.",
        recommendation: "Apply for Founding Membership and help shape DeFi policy in India.",
      };
    }
  };

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const result = getResult(totalScore);

  return (
    <>
      {/* Floating Bot Button */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Open DeFi Quiz"
          >
            <Bot className="w-8 h-8 text-white" />
          </Button>
        </DialogTrigger>
        
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              How DeFi Are You?
            </DialogTitle>
          </DialogHeader>

          {!showResult ? (
            <Card className="border-0 shadow-none">
              <CardHeader className="px-0 pb-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    Question {currentQuestion + 1} of {questions.length}
                  </Badge>
                  <div className="text-xs text-muted-foreground">
                    {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </CardHeader>
              
              <CardContent className="px-0">
                <h3 className="font-semibold text-primary mb-6 text-lg">
                  {questions[currentQuestion].question}
                </h3>
                
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full text-left justify-start h-auto p-4 hover:bg-primary/10"
                      onClick={() => handleAnswer(option.score)}
                    >
                      {option.text}
                      <ArrowRight className="w-4 h-4 ml-auto" />
                    </Button>
                  ))}
                </div>

                <div className="flex justify-between mt-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={goBack}
                    disabled={currentQuestion === 0}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-0 shadow-none">
              <CardHeader className="px-0 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Quiz Complete!</CardTitle>
                <Badge className={`mx-auto mt-2 ${result.color}`}>
                  {result.level}
                </Badge>
              </CardHeader>
              
              <CardContent className="px-0 text-center">
                <div className="mb-6">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {totalScore}/{questions.length * 3}
                  </div>
                  <p className="body-text mb-4">{result.description}</p>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2">Recommended Next Step:</h4>
                    <p className="body-text text-sm">{result.recommendation}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      // Could add analytics tracking here
                    }}
                  >
                    Explore Resources
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={resetQuiz}
                  >
                    Retake Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingBot;