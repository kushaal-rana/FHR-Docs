// MarkdownDisplay.js

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import "./markdown.css";

function MarkdownDisplay({ markdownPath }) {
const [mdFile, setMdFile] = useState('');

console.log(markdownPath)
useEffect(() => {
    import(`../mdFiles/${markdownPath}`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setMdFile(res));
        })
        .catch(err => console.log(err));
});

  return (
    <div className="markdownDiv">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdFile}</ReactMarkdown>
    </div>
  );
}


export default MarkdownDisplay;
