import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ArticleViewer({ filePath }) {
    const [content, setContent] = useState('');

    useEffect(() => {
      if (!filePath) return;
      
      // Import the file content using Vite's import.meta.glob
      const files = import.meta.glob('../articles/**/*.md', { as: 'raw' });
      const fullPath = `../articles/${filePath}`;
      
      if (files[fullPath]) {
        files[fullPath]().then((text) => {
          setContent(text);
        }).catch(error => {
          console.error('Error loading file:', error);
          setContent('Error loading content');
        });
      }
    }, [filePath]);

  return (
    <div className="article-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
