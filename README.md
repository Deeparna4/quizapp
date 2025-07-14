📚 QuizVerse - AdTech Chapter-Based AI Quiz App
QuizVerse is a chapter-wise quiz web application built using the MERN Stack (MongoDB, Express, React, Node.js) and integrated with Mistral AI via OpenRouter to provide a smart educational assistant chatbot per chapter.

🚀 Features
🧠 Chapter-wise Quizzes with 5 MCQs per chapter for all 16 chapters.
📈 Performance Dashboard for tracking scores
🤖 AI Chatbot per Chapter using Mistral AI (via OpenRouter) (mistral-7b-instruct via OpenRouter)
🪪 JWT Authentication with secure login/register
🎨 Modern UI with soft lavender-pink theme
⚙️ Backend built with Node.js + Express + MongoDB


📦 Installation & Setup

 Backend Setup

cd backend
npm install              
node seed.js               
node server.js   


Make sure to configure your .env with the following:
env

PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key


💻 Frontend Setup
cd frontend
npm install                
npm start                  


🧠 What Can the AI Chatbot Do?

Explain all questions related to the particular chapter
Explain key concepts in simple terms
Summarize important paragraphs
Define chapter-specific terms
Act like a teacher trained only on that chapter
Give answer with proper explanation of the quiz questions

Working of Mistral AI:
Each chapter has a .txt file, and the AI is contextually trained on that file only, ensuring accurate, focused answers.
The chapter_{chapternumber}.txt file will be read using readFileSync . 
Then this content of the chapter and the user's query will be sent to the AI and then the AI will be trained on the particular chapter and provides answers related to the book.



