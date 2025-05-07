import React, { useState } from 'react';
import Footer from './Footer';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi, I am your Helper. Type 'quit' to end the conversation." },
  ]);
  const [input, setInput] = useState('');

  const pairs = [
    [/(hi|hello|hey)/i, ["Hello! 👋 How can I assist you today?", "Hi there! 😊 What brings you here?", "Hey! 😎 What's up?"]],
    [/how are you\??/i, ["I'm doing great, thanks for asking! 😄", "Feeling awesome today! 🚀 How about you?"]],
    [/am good/i, ["Nice to hear that! 👍", "Glad you're doing well! 😊", "Awesome! 🌟 What's next?"]],
    [/(.*)name(.*)/i, ["My name is Clara 🤖", "You can call me Clara 😊", "It's Clara, your helpful assistant!"]],
    [/(who|whom)/i, ["I was created by amazing developers you might know! 💻✨"]],
    [/(.*)purpose(.*)/i, ["I'm here to make your life easier and more fun! 🎯", "I serve to bring you knowledge with a smile! 😄"]],
    [/(.*)question(.*)/i, ["Go on, I'm listening! 👂", "Ask away, I'm ready! 🔍", "Shoot your question! 🎯"]],
    [/about us/i, ["We’re a company in Eldoret 🏙️ offering fresh farm produce at friendly prices. 🥬🍅"]],
    [/(.*)location(.*)/i, ["We’re located in the heart of Eldoret 🏞️ – home of champions! 🏆"]],
    [/deliveries/i, ["Yes! 🚚 We deliver fresh produce to your doorstep at affordable rates."]],
    [/(.*)vegetables(.*)/i, ["Yes! 🥦 We have a variety of vegetables. What would you like today?"]],
    [/jokes|fun facts/i, [
      "😂 Why did the tomato blush? Because it saw the salad dressing!",
      "🤣 What do you get when you drop a pumpkin? Squash!",
      "😆 What did the lettuce say to the celery? Quit stalking me!"
    ]],
    [/(.*)purchase(.*)/i, ["Yes! 🛒 You can purchase items via the app and get a confirmation instantly! ✅"]],
    [/(.*)/, ["Sorry, I didn't quite get that. 🤔 Could you rephrase?", "Hmm... Can you clarify what you meant? 🧐"]],
  ];

  const getBotResponse = (input) => {
    for (let [pattern, responses] of pairs) {
      if (pattern.test(input)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return "Sorry, something went wrong.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    let botMessage;

    if (input.toLowerCase() === 'quit') {
      botMessage = { sender: 'bot', text: "Goodbye! Have a nice day." };
    } else {
      const response = getBotResponse(input);
      botMessage = { sender: 'bot', text: response };
    }

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="minee">
      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title">Helper ChatBot</h5>
            <div className="border p-2 mb-3" style={{ height: '300px', overflowY: 'auto' }}>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`d-flex mb-2 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                >
                  <div
                    className={`p-2 rounded ${
                      msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'
                    }`}
                    style={{ maxWidth: '75%' }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChatBot;
