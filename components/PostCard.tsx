import React from 'react';
import {format} from 'fecha';
import {PostData} from '../loader';
import {Tag} from './Tag';

export const PostCard: React.FC<{ post: PostData }> = (props) => {
    const post = props.post;
    return (
        <a className="post-card" href={`/${post.path}`}>
            <div className="post-card-inner">
                {post.thumbnailPhoto && (
                    <div
                        className="post-card-thumbnail"
                        style={{backgroundImage: `url(${post.thumbnailPhoto})`}}
                    />
                )}
                <div className="post-card-title">
                    {post.title && <h2>{post.title}</h2>}
                    {post.subtitle && <p>{post.subtitle}</p>}
                    <p>
                        {props.post.artist ?
                            props.post.artist :
                            (props.post.datePublished ?
                                format(new Date(props.post.datePublished), 'MMMM Do, YYYY') : '')
                        }
                    </p>
                    <div className="flex-spacer"></div>
                    <div className="tag-container">
                        {post.tags && (post.tags || []).map((tag, j) => <Tag tag={tag} key={j}/>)}
                    </div>
                </div>
            </div>
        </a>
    );
};
