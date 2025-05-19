import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const UploadPage = () => {
  const { isDark } = useTheme()
  const navigate = useNavigate()
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    level: '',
    year: ''
  })

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && (droppedFile.type === 'application/pdf' || 
        droppedFile.type === 'application/msword' || 
        droppedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFile(droppedFile)
    }
  }

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && (selectedFile.type === 'application/pdf' || 
        selectedFile.type === 'application/msword' || 
        selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setFile(selectedFile)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file || !formData.title || !formData.department || !formData.level || !formData.year) {
      alert('Please fill in all fields and select a file')
      return
    }

    // Here you would typically handle the file upload and form data submission
    // For now, we'll just navigate back to the dashboard
    navigate('/dashboard')
  }

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Upload Document
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Document Details */}
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Document Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Title of the Book
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter book title"
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter department"
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Level
                </label>
                <input
                  type="text"
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter level"
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Year
                </label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter year"
                  required
                />
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div
            className={`p-6 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}
          >
            <h2 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Upload Document
            </h2>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center ${
                isDragging
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : isDark
                  ? 'border-gray-600'
                  : 'border-gray-300'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer"
              >
                <svg
                  className={`mx-auto h-12 w-12 ${
                    isDark ? 'text-gray-400' : 'text-gray-300'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className={`mt-2 text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {file ? file.name : 'Drag and drop your file here, or click to select'}
                </p>
                <p className={`mt-1 text-xs ${
                  isDark ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  PDF, DOC, or DOCX up to 10MB
                </p>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Upload Document
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UploadPage 