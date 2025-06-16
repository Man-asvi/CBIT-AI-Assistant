
import React from 'react';
import { Message, UserType, DocumentSource, DocumentType } from '../types';

interface ChatMessageDisplayProps {
  message: Message;
}

const formatDate = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const ChatMessageDisplay: React.FC<ChatMessageDisplayProps> = ({ message }) => {
  const isUser = message.sender === UserType.USER;
  const bubbleClasses = isUser
    ? 'bg-blue-500 text-white self-end rounded-l-xl rounded-tr-xl'
    : 'bg-gray-200 text-gray-800 self-start rounded-r-xl rounded-tl-xl';
  
  const containerClasses = isUser ? 'flex justify-end' : 'flex justify-start';

  // Function to render the source based on its type and properties
  const renderSource = (source: DocumentSource) => {
    let sourceText = source.title;
    if (source.type === DocumentType.PDF) {
      sourceText = `${source.title} (PDF)`;
    } else if (source.type === DocumentType.WEBSITE) {
      sourceText = `${source.title}`; // Keep it clean for website titles from search
    } else if (source.type === DocumentType.INTERNAL) {
      sourceText = `${source.title} (Internal Document)`;
    }

    const content = source.url ? (
      <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-600 visited:text-purple-600">
        {sourceText}
      </a>
    ) : (
      sourceText
    );

    return (
      <li key={source.id} className="text-xs text-gray-700">
        {content}
        {source.snippet && source.type === DocumentType.WEBSITE && ( // Display snippet if available for web sources
            <p className="pl-2 mt-0.5 text-gray-500 italic text-xs">"{source.snippet}"</p>
        )}
      </li>
    );
  };

  return (
    <div className={`${containerClasses} mb-3`}>
      <div className={`max-w-xl p-3 shadow-md ${bubbleClasses}`}>
        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
        <div className={`text-xs mt-1 ${isUser ? 'text-blue-200 text-right' : 'text-gray-500 text-left'}`}>
          {formatDate(message.timestamp)}
        </div>
        {message.sender === UserType.AI && message.sources && message.sources.length > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-300/70">
            <h4 className="text-xs font-semibold text-gray-600 mb-1">Sources:</h4>
            <ul className="list-none pl-0 space-y-1"> {/* Changed to list-none for cleaner look */}
              {message.sources.map(renderSource)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
