import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import ChatInterface from '../components/ChatInterface'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  const { isDark, toggleTheme } = useTheme()
  const [messages, setMessages] = useState([])
  const [documents, setDocuments] = useState([])

  const handleSendMessage = (message) => {
    setMessages([...messages, { role: 'user', content: message }])
    // Here you would typically make an API call to process the message
    // For now, we'll just echo the message back
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: `You said: ${message}` }])
    }, 1000)
  }

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">DocChat</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/upload"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Upload Document
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDark ? (
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 flex h-screen">
        <Sidebar documents={documents} />
        <div className="flex-1 overflow-hidden">
          <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard 