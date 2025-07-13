const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1', // ✅ Use OpenRouter's API endpoint
});

const getChapterContent = (chapterNumber) => {
  const filePath = path.join(__dirname, '..', 'chapters', `chapter_${chapterNumber}.txt`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
};

const askChapterAI = async (req, res) => {
  const { chapterNumber, question } = req.body;

  const context = getChapterContent(chapterNumber);
  if (!context) {
    return res.status(404).json({ message: 'Chapter content not found' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'mistralai/mistral-7b-instruct', // ✅ Free model
      messages: [
        {
          role: 'system',
          content: `You are a helpful educational assistant. Use the following chapter content to answer questions.\n\n${context}`,
        },
        {
          role: 'user',
          content: question,
        },
      ],
    });

    const answer = completion.choices[0].message.content;
    res.json({ answer });
  } catch (err) {
    console.error('❌ OpenRouter error:', err.message);
    res.status(500).json({ message: 'AI request failed', error: err.message });
  }
};

module.exports = { askChapterAI };
