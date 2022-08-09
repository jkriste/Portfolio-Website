import React from 'react';
import ReactMarkdown from 'react-markdown';
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light";

export const Markdown: React.FC<{ source: string }> = (props) => {
    return (
        <div style={{width: '100%'}} className="devii-markdown">
            <ReactMarkdown
                key="content"
                children={props.source}
                components={{code: ({node, ...props}) =>
                        <SyntaxHighlighter
                        language={(language === 'ts' ? 'typescript' : language) || 'typescript'}
                        style={darcula}
                    >
                        {value}
                    </SyntaxHighlighter>}}
                escapeHtml={false}
            />
        </div>
    );
};
