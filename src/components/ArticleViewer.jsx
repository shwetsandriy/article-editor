import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import path from 'path-browserify';
import { useNavigate } from 'react-router-dom';

export default function ArticleViewer({ filePath, onNavigate }) {
    const [content, setContent] = useState('');
    const navigate = useNavigate();

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

    const containerRef = useRef();

    useEffect(() => {
      if (content && containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'instant' });
      }
    }, [content]);

    const components = {
      a({ href, children }) {
        if (href.endsWith('.md')) {
          const baseDir = filePath.substring(0, filePath.lastIndexOf('/') + 1);
          const resolvedPath = path.posix.normalize(`${baseDir}${href}`);
          const relativePath = resolvedPath.replace(/^(\.\/)?/, '');
  
          return (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${encodeURIComponent(relativePath)}`);
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
    <div ref={containerRef} className="article-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
