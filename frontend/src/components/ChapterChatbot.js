import React, { useState } from 'react';
import API from '../api/axios';

const ChapterChatbot = ({ chapterNumber }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me anything about Chapter ' + chapterNumber },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await API.post('/chat', {
        chapterNumber,
        question: input,
      });

      const botMessage = { sender: 'bot', text: res.data.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Sorry, something went wrong.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const styles = {
  wrapper: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#fff0f5', // very light pink
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    fontFamily: 'Segoe UI, sans-serif',
    maxWidth: '900px',         // 💡 increased from default to 900px
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontWeight: 'bold',
    color: '#ad1457',
    marginBottom: '15px',
    fontSize: '16px',
  },
  chatBox: {
    maxHeight: '300px',
    overflowY: 'auto',
    backgroundColor: '#ffe6f0',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '12px',
  },
  message: (sender) => ({
    textAlign: sender === 'user' ? 'right' : 'left',
    color: sender === 'user' ? '#880e4f' : '#c2185b',
    marginBottom: '8px',
    userSelect: 'text',
  }),
  inputGroup: {
    display: 'flex',
    gap: '8px',
  },
  input: {
    flex: 1,
    padding: '8px 12px',
    borderRadius: '20px',
    border: '1px solid #f8bbd0',
    backgroundColor: '#fff5fa',
    color: '#880e4f',
    outline: 'none',
  },
  sendButton: {
    backgroundColor: '#ec407a',
    border: 'none',
    color: 'white',
    borderRadius: '20px',
    padding: '8px 18px',
    cursor: 'pointer',
  },
};

  return (
    <div style={styles.wrapper}>
      <div style={styles.title}>🤖 Ask AI about Chapter {chapterNumber}</div>

      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div key={i} style={styles.message(msg.sender)}>
            <strong>{msg.sender === 'user' ? 'You' : 'AI'}:</strong> {msg.text}
          </div>
        ))}
        {loading && <div style={{ color: '#999' }}><em>AI is typing...</em></div>}
      </div>

      <div style={styles.inputGroup}>
        <input
          style={styles.input}
          type="text"
          value={input}
          placeholder="Ask something..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button style={styles.sendButton} onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChapterChatbot;
