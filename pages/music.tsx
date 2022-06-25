import Head from 'next/head';
import {generateRSS} from '../rssUtil';
import {Markdown} from '../components/Markdown';
import {PostData, loadMusicPosts, loadMarkdownFile} from '../loader';
import {PostCard} from '../components/PostCard';

const Music = (props: {
    musicMarkdown: string;
    music: PostData[];
}) => {
    return (
        <div className="content">

        </div>
    )
}

export default Music;

