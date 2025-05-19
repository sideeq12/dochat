import { useState, useRef, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const ChatInterface = ({ messages, onSendMessage }) => {
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)
  const { isDark } = useTheme()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onSendMessage(input)
      setInput('')
    }
  }

  return (
    <div className={`flex flex-col h-full ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : isDark
                  ? 'bg-gray-700 text-gray-200'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className={`p-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about your documents..."
            className={`flex-1 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark
                ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
                : 'bg-white text-gray-900 border-gray-300'
            }`}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatInterface 