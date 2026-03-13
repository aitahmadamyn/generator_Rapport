
import React from 'react';
// Since we cannot use npm packages, we import ReactMarkdown from a CDN via esm.sh
// This works with modern browsers and bundlers that support ES modules.
import ReactMarkdown from 'https://esm.sh/react-markdown@9';
import remarkGfm from 'https://esm.sh/remark-gfm@4';
import Spinner from './Spinner';

interface ReportOutputProps {
  content: string;
  isLoading: boolean;
  error: string | null;
  onDownload: () => void;
}

const ReportOutput: React.FC<ReportOutputProps> = ({ content, isLoading, error, onDownload }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Aperçu du Rapport
            </h2>
            {content && !isLoading && (
            <button
                onClick={onDownload}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Télécharger (.doc)
            </button>
            )}
      </div>

      <div className="flex-grow w-full border border-gray-200 dark:border-gray-700 rounded-md overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900/50 prose dark:prose-invert max-w-none prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-p:text-sm">
        {isLoading && <Spinner />}
        {error && <div className="text-red-500 dark:text-red-400 p-4 bg-red-100 dark:bg-red-900/50 rounded-md">{error}</div>}
        {!isLoading && !error && !content && (
          <div className="text-center text-gray-500 dark:text-gray-400 h-full flex items-center justify-center">
            <p>Le rapport généré apparaîtra ici.</p>
          </div>
        )}
        {content && (
            <div id="report-preview">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
        )}
      </div>
      {/* Hidden div for DOCX export */}
      <div id="html-source" style={{ display: 'none' }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ReportOutput;
