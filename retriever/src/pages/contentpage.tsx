/*import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import Image from "next/image";

const query = groq`*[_type == "post" && _id == $id][0]{
  title,
  summary,
  content,
  likes,
  date,
  owner,
  type,
  "imageUrl": image.asset->url
}`;

function ContentPage({ post }) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Image src={post.imageUrl} alt={post.title} />

        </div>
    );
}

export async function getStaticPaths() {
    const posts = await getClient().fetch(groq`*[_type == "post"]{_id}`);
    const paths = posts.map((post: { _id: any; }) => ({
        params: { id: post._id },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const post = await getClient().fetch(query, { id: params.id });

    return {
        props: {
            post,
        },
    };
}

export default ContentPage;
function getClient() {
    throw new Error('Function not implemented.');
}

*/