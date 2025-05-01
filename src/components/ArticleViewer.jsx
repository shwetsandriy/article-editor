import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
          return (
            <a
              onClick={() => onNavigate?.(href)}
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
