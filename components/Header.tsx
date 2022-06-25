import React from 'react';
import {globals} from '../globals';

export const Header: React.FC = () => (
    <div className="header">
        <a href="/">{globals.siteName}</a>
        <div className="flex-spacer"/>
        <a href="https://github.com/jkriste">GitHub</a>
        <a href="/music">Music</a>
        <a href="/blogs">Blogs</a>
    </div>
);
