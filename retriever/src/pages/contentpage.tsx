import { useRouter } from 'next/router';
import Image from 'next/image';
import { getPostById} from '../../sanity/lib/sanity';

interface Post {
    _id: string;
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

    console.log("Post fetched:", post); 

    return {
        props: {
            post,
        },
        revalidate: 60,
    };
}

export default ContentPage;
