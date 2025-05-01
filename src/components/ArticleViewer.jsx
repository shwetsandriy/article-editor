import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import path from 'path-browserify';

export default function ArticleViewer({ filePath, onNavigate }) {
    const [content, setContent] = useState('');

    useEffect(() => {
      if (!filePath) return;
      
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

    const components = {
      a({ href, children }) {
        if (href.endsWith('.md')) {
          const baseDir = filePath.substring(0, filePath.lastIndexOf('/') + 1);
          const resolvedPath = path.normalize(baseDir + href);
    
          return (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.(resolvedPath);
              }}
            >
              {children}
            </a>
          );
        }
        return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
      }
    };
  

  return (
    <div className="article-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
