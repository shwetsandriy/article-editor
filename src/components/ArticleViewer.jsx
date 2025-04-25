import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ArticleViewer({ filePath }) {
    const [content, setContent] = useState('');

    useEffect(() => {
      if (!filePath) return;
  
      import(filePath).then((module) => {
        fetch(module.default)
          .then((res) => res.text())
          .then((text) => setContent(text));
      });
    }, [filePath]);

  return (
    <div className="article-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
