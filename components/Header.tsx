import React from 'react';

export const Header: React.FC = () => (
    <div className="header">
        <a href="/">
                <img src='/img/jkriste-dev.png' style={{maxHeight: "16px", verticalAlign: "middle"}} alt='Logo'/>
        </a>
        <div className="flex-spacer"/>
        <a href="https://github.com/jkriste">GitHub</a>
        <a href="/music">Music</a>
        <a href="/blogs">Blogs</a>
    </div>
);
