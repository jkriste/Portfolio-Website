import React from 'react';
import {Author} from './Author';
import {Markdown} from './Markdown';
import {PostData} from '../loader';
import {PostMeta} from './PostMeta';

const css = `
    h4 {
        color: #0D7377;
    }
`

export const MusicPost: React.FunctionComponent<{ post: PostData }> = ({post,}) => {
    const {title, artist, score} = post;
    return (
        <div className="blog-post">
            <PostMeta post={post}/>
            <div className="music-post-title">
                <div className="music-post-image">
                    <img src={post.bannerPhoto} alt="Album Photo"/>
                </div>
                <div className="blog-post-title">
                    {title && <h1>{title}</h1>}
                    {<h2>by {artist && artist}
                        <span style={{color: "white", float: "right"}}>{score}</span>
                        <div id="progress" style={{marginLeft: "10px"}}>
                            <div style={{width: `${score && score * 10}%`}}></div>
                        </div>
                    </h2>}
                </div>
            </div>

            <Author post={post}/>

            <div className="music-post-content">
                <style>{css}</style>
                <Markdown source={post.content}/>
            </div>
        </div>
    );
};
