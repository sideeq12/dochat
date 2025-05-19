import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const LandingPage = () => {
  const { isDark, toggleTheme } = useTheme()
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How does DocChat work?",
      answer: "DocChat uses advanced AI to analyze your uploaded documents. You can ask questions in natural language, and our system will search through your documents to provide relevant answers and insights."
    },
    {
      question: "What file formats are supported?",
      answer: "Currently, we support PDF, DOC, and DOCX files. We're working on adding support for more formats in the future."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security seriously. Your documents are encrypted and stored securely. We never share your data with third parties."
    },
    {
      question: "Can I use DocChat for multiple documents?",
      answer: "Absolutely! You can upload multiple documents and ask questions across all of them. Our AI will search through all your uploaded documents to find the most relevant information."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Research Analyst",
      content: "DocChat has revolutionized how I handle research papers. I can now quickly find information across multiple documents without spending hours searching.",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Michael Chen",
      role: "Legal Professional",
      content: "As a lawyer, I deal with numerous legal documents daily. DocChat helps me extract key information and find relevant precedents quickly.",
      image: "https://i.pravatar.cc/150?img=2"
    },
    {
      name: "Emily Rodriguez",
      role: "Content Writer",
      content: "The ability to chat with my documents has made my research process so much more efficient. It's like having a research assistant available 24/7.",
      image: "https://i.pravatar.cc/150?img=3"
    }
  ]

  const howItWorks = [
    {
      step: "01",
      title: "Upload Your Documents",
      description: "Start by uploading your PDF, DOC, or DOCX files. Our system supports multiple file formats and can handle large documents.",
      icon: (
        <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      step: "02",
      title: "AI Processing",
      description: "Our advanced AI analyzes your documents, creating a searchable knowledge base that understands context and relationships.",
      icon: (
        <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Ask Questions",
      description: "Simply type your questions in natural language. Our AI will search through your documents and provide accurate, contextual answers.",
      icon: (
        <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      step: "04",
      title: "Get Insights",
      description: "Receive detailed answers, summaries, and insights from your documents. Our AI can even provide relevant quotes and references.",
      icon: (
        <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    }
  ]

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
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-8">
            Chat with Your Documents
            <span className="text-blue-600 dark:text-blue-400"> Intelligently</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Upload your PDFs and documents, and let our AI help you understand and extract insights from them through natural conversation.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            Start Chatting Now
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="Document Upload"
              description="Upload PDFs and Word documents with ease. Our system supports multiple file formats."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              }
              title="Natural Conversation"
              description="Ask questions in plain English and get accurate answers based on your documents."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
              title="Smart Insights"
              description="Get intelligent summaries and key insights from your documents automatically."
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-lg relative`}
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="mb-4">{step.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {testimonial.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <button
                  className={`w-full px-6 py-4 text-left focus:outline-none ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div
                    className={`px-6 pb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of users who are already using DocChat to make their document management more efficient.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Start Your Free Trial
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-8 ${isDark ? 'bg-gray-900' : 'bg-white'} border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">DocChat</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`}>
                Privacy Policy
              </a>
              <a href="#" className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`}>
                Terms of Service
              </a>
              <a href="#" className={`${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'}`}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }) => {
  const { isDark } = useTheme()
  
  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
      <div className="mb-4">{icon}</div>
      <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  )
}

export default LandingPage 