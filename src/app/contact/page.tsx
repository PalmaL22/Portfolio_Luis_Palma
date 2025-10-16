'use client';

import { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: "Hi! Ask me about my projects, skills, or experience!" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage = { sender: 'user' as const, text: trimmed };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const payloadMessages = [
      { role: 'system', content: `You are Luis' portfolio assistant. Luis is a Computer Science student at Kean University with experience in software development and machine learning.

Most Recent Role: Software Developer Intern at AWS (May-Aug 2025) working with Java, TypeScript, and AWS.

Recent Experience:
- Research Intern (Jan-Apr 2025): Built ChatGPT-based tutor with Google sponsorship using JavaScript, Next.js, MySQL
- Research Intern (Jun-Aug 2024): Led ML team for SpaceX wetlands UAS imagery project using Python, PyTorch

Key Projects:
- Rice Disease Classifier: CNN model for agricultural research (Python, PyTorch)
- AI Tutor Application: ChatGPT integration for tutoring (JavaScript, Next.js, MySQL)
- WAV Player: Audio app with custom UI (Next.js, TypeScript, Tailwind)

Skills: Python, JavaScript, TypeScript, Java, Next.js, React, PyTorch, MySQL, AWS

Answer questions about Luis's experience, projects, and skills concisely.` },
      { role: 'user', content: trimmed },
    ];

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      const data = await res.json();
      if (data?.reply) {
        setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);
      } else if (data?.error) {
        console.error('API Error:', data.error);
        if (data.error === 'Empty response from AI') {
          setMessages(prev => [...prev, { sender: 'bot', text: 'The AI response was cut off. Please try asking your question again.' }]);
        } else {
          setMessages(prev => [...prev, { sender: 'bot', text: `Sorry, there was an error: ${data.error}` }]);
        }
      } else {
        setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, something went wrong. Try again later.' }]);
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { sender: 'bot', text: 'Network error. Try again later.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
              Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Connect</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact + Chat Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-400 mb-8">I&apos;m always interested in new opportunities and exciting projects.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-indigo-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <a href="mailto:palmal@kean.edu" className="text-gray-400 hover:text-indigo-400 transition-colors">palmal@kean.edu</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <FaLinkedin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/palmaluis/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">linkedin.com/in/palmaluis</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <FaGithub className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">GitHub</h3>
                    <a href="https://github.com/PalmaL22" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">github.com/luis-palma</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-gray-400">New Jersey, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chatbox */}
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700/50 flex flex-col h-[500px]">
              <div ref={scrollRef} className="flex-1 overflow-y-auto mb-4 space-y-3 pr-2">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`px-4 py-2 rounded-xl max-w-xs ${msg.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-700 text-gray-200'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && <div className="text-sm text-gray-400">Bot is typing...</div>}
              </div>

              <form onSubmit={sendMessage} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button disabled={loading} type="submit" className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg flex items-center justify-center disabled:opacity-60">
                  <FaPaperPlane size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}