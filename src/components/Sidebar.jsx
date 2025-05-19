import { useTheme } from '../context/ThemeContext'

const Sidebar = ({ documents }) => {
  const { isDark } = useTheme()

  return (
    <div className={`w-64 ${isDark ? 'bg-gray-800' : 'bg-white'} border-r ${isDark ? 'border-gray-700' : 'border-gray-200'} p-4 flex flex-col`}>
      <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Documents</h2>
      
      {/* Document List */}
      <div className="flex-1 overflow-y-auto">
        {documents.length === 0 ? (
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            No documents uploaded yet
          </p>
        ) : (
          <ul className="space-y-2">
            {documents.map((doc, index) => (
              <li
                key={index}
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
                  isDark
                    ? 'hover:bg-gray-700 text-gray-200'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <DocumentIcon type={doc.type} isDark={isDark} />
                <span className="text-sm truncate">{doc.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Stats */}
      <div className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {documents.length} document{documents.length !== 1 ? 's' : ''} uploaded
        </p>
      </div>
    </div>
  )
}

const DocumentIcon = ({ type, isDark }) => {
  const iconClass = `w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`
  
  if (type.includes('pdf')) {
    return (
      <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
      </svg>
    )
  }
  
  if (type.includes('word') || type.includes('docx')) {
    return (
      <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
      </svg>
    )
  }

  return (
    <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
    </svg>
  )
}

export default Sidebar 