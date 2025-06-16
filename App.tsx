
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './components/Header';
import { ChatInput } from './components/ChatInput';
import { ChatMessageDisplay } from './components/ChatMessageDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Message, UserType, AIResponse } from './types';
import { askAI } from './services/geminiService';
import { SIMULATED_KNOWLEDGE_BASE } from './constants';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const chatDisplayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatDisplayRef.current) {
      chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    setMessages([
      {
        id: 'initial-greeting',
        sender: UserType.AI,
        text: "Hello! I'm the CBIT AI Assistant. How can I help you today regarding CBIT?",
        timestamp: new Date(),
      }
    ]);
  }, []);

  const handleSendMessage = useCallback(async () => {
    if (userInput.trim() === '' || isLoading) return;

    const newUserMessage: Message = {
      id: Date.now().toString() + '-user',
      sender: UserType.USER,
      text: userInput,
      timestamp: new Date(),
    };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    const currentInput = userInput; // Capture userInput before clearing
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
      const aiResponse: AIResponse = await askAI(currentInput, SIMULATED_KNOWLEDGE_BASE);
      const aiMessage: Message = {
        id: Date.now().toString() + '-ai',
        sender: UserType.AI,
        text: aiResponse.text,
        sources: aiResponse.sources, 
        timestamp: new Date(),
      };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (e: any) {
      const errorMessage = e.message || 'An unexpected error occurred.';
      setError(errorMessage); 
      setMessages(prevMessages => [...prevMessages, {
          id: Date.now().toString() + '-ai-error',
          sender: UserType.AI,
          text: `Sorry, I encountered an error: ${errorMessage}`,
          timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [userInput, isLoading]); 


  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto bg-white shadow-xl">
      <Header />
      <div ref={chatDisplayRef} className="flex-grow p-6 space-y-4 overflow-y-auto bg-slate-50">
        {messages.map(msg => (
          <ChatMessageDisplay key={msg.id} message={msg} />
        ))}
        {isLoading && (
          <div className="flex justify-center py-2">
            <LoadingSpinner />
          </div>
        )}
      </div>
       {error && ( 
        <div className="p-3 bg-red-100 text-red-700 text-sm text-center">
          Error: {error}
        </div>
      )}
      <ChatInput
        userInput={userInput}
        onUserInput={setUserInput}
        onSubmit={handleSendMessage}
        isLoading={isLoading}
      />
      <footer className="p-2 text-center text-xs text-gray-500 bg-gray-100 border-t">
        CBIT AI Assistant. Powered by Gemini. For informational purposes only. Knowledge limited to provided documents.
      </footer>
    </div>
  );
};

export default App;
