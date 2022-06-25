import Head from 'next/head';
import {generateRSS} from '../rssUtil';
import {Markdown} from '../components/Markdown';
import {PostData, loadMusicPosts, loadMarkdownFile} from '../loader';
import {PostCard} from '../components/PostCard';
import React from 'react';

const Music = (props: {
    musicMarkdown: string;
    music: PostData[];
}) => {
    return (
        <div className="content">
            <Head>
                <title>Music Reviews</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Markdown source={props.musicMarkdown}/>

            <div className="section">
                <div className="post-card-container">
                    {props.music.map((music, j) => {
                        return <PostCard post={music} key={j}/>;
                    })}
                </div>
            </div>
        </div>
    )
}

export default Music;

export const getStaticProps = async () => {
    const musicMarkdown = await loadMarkdownFile('music.md')
    const music = await loadMusicPosts()

    await generateRSS(music)

    const props = {
        musicMarkdown,
        music
    }

    return {props}
}