import React from 'react';
import {globals} from '../globals';

export const Footer: React.FC = () => (
    <div className="footer" style={{width: "100%"}}>
        <p style={{color: "#212121", fontWeight: "bold"}}>{`© ${globals.yourName} ${new Date().getFullYear()}`}</p>
        <a href="/rss.xml">
            <img src="/img/rss-white.svg" alt="RSS Feed" height="30" width="30"/>
        </a>
    </div>
);
