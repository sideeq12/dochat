import { useState, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'

const DocumentUpload = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false)
  const { isDark } = useTheme()

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    files.forEach(file => {
      if (file.type.includes('pdf') || file.type.includes('word') || file.type.includes('docx')) {
        onUpload(file)
      }
    })
  }, [onUpload])

  const handleFileInput = useCallback((e) => {
    const files = Array.from(e.target.files)
    files.forEach(file => {
      if (file.type.includes('pdf') || file.type.includes('word') || file.type.includes('docx')) {
        onUpload(file)
      }
    })
  }, [onUpload])

  return (
    <div
      className={`p-4 border-t ${
        isDragging
          ? isDark
            ? 'bg-blue-900/20 border-blue-500'
            : 'bg-blue-50 border-blue-500'
          : isDark
          ? 'bg-gray-800 border-gray-700'
          : 'bg-white border-gray-200'
      }`}
    >
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center ${
          isDragging
            ? 'border-blue-500'
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
          id="file-upload"
          className="hidden"
          multiple
          accept=".pdf,.doc,.docx"
          onChange={handleFileInput}
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer"
        >
          <div className="space-y-2">
            <svg
              className={`mx-auto h-12 w-12 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <span className={`font-medium ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>
                Upload a file
              </span>{' '}
              or drag and drop
            </div>
            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              PDF, DOC, or DOCX up to 10MB
            </p>
          </div>
        </label>
      </div>
    </div>
  )
}

export default DocumentUpload 