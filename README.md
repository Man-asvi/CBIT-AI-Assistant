# CBIT AI Assistant

This is a chatbot application designed to provide information about Chaitanya Bharathi Institute of Technology (CBIT). It leverages the Google Gemini API to answer user questions based on a curated, pre-loaded knowledge base about the college.

The application serves as a responsive and user-friendly resource for prospective students, current students, and anyone seeking information about CBIT's programs, admissions, placements, and more.

## Features

- **Conversational Interface:** An intuitive chat UI to ask questions and receive answers.
- **Knowledge-Based Responses:** The AI's knowledge is strictly limited to a provided set of documents, ensuring answers are accurate and relevant to CBIT.
- **Real-time Interaction:** Get instant responses from the Gemini API.
- **Clear UI States:** Visual indicators for when the AI is processing a request (`"AI is thinking..."`) and for handling potential errors gracefully.
- **Responsive Design:** A clean, mobile-first layout that works well on both desktop and mobile devices.
- **Source Highlighting:** When an answer is derived from specific documents in the knowledge base, the application is structured to display those sources.

## Tech Stack

- **Frontend:** React with TypeScript
- **Styling:** Tailwind CSS
- **AI Service:** Google Gemini API (`@google/genai`)
- **Module Loading:** ES Modules with `importmap` for dependency management directly in the browser.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- A modern web browser that supports ES Modules and `importmap`.
- A valid **Google Gemini API Key**.

### Setup & Installation

1.  **Get the Code:**
    Ensure you have all the project files (`index.html`, `index.tsx`, `App.tsx`, etc.) in a single project directory.

2.  **API Key Configuration:**
    This application requires a Google Gemini API key to function. The key must be available as an environment variable named `API_KEY`.

    The application is designed to be run in an environment where `process.env.API_KEY` is defined. When developing locally, you can use a tool or a local web server that can inject environment variables. If your server doesn't support this, you may need to temporarily hardcode the key for testing, but **never commit it to version control**.


3.  **Running the Application:**
```bash
npm run build
```
Once the server is running, open your web browser and navigate to `http://localhost:8000` (or the address provided by your server).

## How It Works

The user asks a question in the chat interface. This question, along with the entire pre-loaded knowledge base from `constants.ts`, is sent to the Gemini API. A detailed system prompt instructs the AI to answer **only** using the provided text, ensuring that it acts as a specialized "CBIT Assistant" and does not use its general knowledge. The response is then displayed in the chat window.
