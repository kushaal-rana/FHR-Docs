// MarkdownDisplay.js

import React, { useEffect, useState } from 'react';
import MarkDown from 'markdown-to-jsx';


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
    <div className="markdown-container">
     	<MarkDown>
				{mdFile}
			</MarkDown>
    </div>
  );
}


export default MarkdownDisplay;
