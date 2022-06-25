import React from 'react';
import glob from 'glob';
import {MusicPost} from '../../components/MusicPost';
import {loadPost} from '../../loader';

function Post(props: any) {
    const {post} = props;
    return <MusicPost post={post}/>;
}

export const getStaticPaths = () => {
    const ops = glob.sync('./md/music/*.md');
    const slugs = ops.map((file: string) => {
        const popped = file.split('/').pop();
        if (!popped) throw new Error(`Invalid music path: ${file}`);
        return popped.slice(0, -3).trim();
    });

    const paths = slugs.map((slug) => `/music/${slug}`);
    return {paths, fallback: false};
};

export const getStaticProps = async ({params}: any) => {
    const post = await loadPost(`music/${params.music}.md`);
    return {props: {post}};
};

export default Post;
