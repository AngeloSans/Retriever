import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostById, getAllPostIds } from '../../../sanity/lib/sanity';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Post {
    id: string;
    title: string;
    summary: string;
    content: string;
    likes: number;
    date: string;
    owner: string;
    type: string;
    imageUrl: string;
}

interface Params {
    id: string;
}

interface ContentPageProps {
    post: Post;
}

function ContentPage({ post }: ContentPageProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Image src={post.imageUrl} alt={post.title} width={800} height={500} />
        </div>
    );
}

export async function getStaticProps({ params }: { params: Params }) {
    const post = await getPostById(params.id);

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
        },
        revalidate: 60,
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const paths = await getAllPostIds();
        
        // Verifique os caminhos retornados
        console.log('Paths:', paths);

        return {
            paths,
            fallback: 'blocking', 
        };
    } catch (error) {
        console.error('Error fetching paths:', error);
        return {
            paths: [],
            fallback: 'blocking',
        };
    }
};

export default ContentPage;
