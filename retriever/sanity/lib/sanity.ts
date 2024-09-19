import { createClient } from '@sanity/client';

interface Post {
    _id: string;
    title: string;
    summary: string;
    content: string;
    likes: number;
    date: string;
    owner: string;
    type: string;
    image: string;
}

export const client = createClient({
    projectId: 'f6zsx54e',
    dataset: 'retriever',
    apiVersion: '2024-06-16',
    useCdn: true,
});


export async function getAllRelatos() {
    const query = `*[_type == "relatos"] {
        user,
        instagram,
        message,
        date,
        "photo": photo.asset->url
    }`;
    try {
        const relatos = await client.fetch(query);
        console.log("Relatos fetched:", relatos);
        return relatos;
    } catch (error) {
        const errorMessage = (error as Error).message || 'Unknown error occurred';
        console.error("Error fetching relatos:", errorMessage);
        throw error;
    }
}


export async function getAllPosts(): Promise<Post[]> {
    const query = `*[_type == "post"] {
        _id,
        title,
        summary,
        content,
        likes,
        date,
        owner,
        type,
        "image": image.asset->url
    }`;
    try {
        const posts = await client.fetch(query);
        console.log("Posts fetched:", posts);
        return posts;
    } catch (error) {
        const errorMessage = (error as Error).message || 'Unknown error occurred';
        console.error("Error fetching posts:", errorMessage);
        throw error;
    }
}


export async function getPostById(id: string) {
    const query = `*[id == $id] {
        _id,
        title,
        summary,
        content,
        likes,
        date,
        owner,
        type,
        "image": image.asset->url
    }`;
    const params = { id };
    try {
        const post = await client.fetch(query, params);
        console.log("Post fetched:", post);
        return post;
    } catch (error) {
        const errorMessage = (error as Error).message || 'Unknown error occurred';
        console.error("Error fetching post by ID:", errorMessage);
        throw error;
    }
}


export async function getAllPostIds() {
    const posts = await getAllPosts();
    return posts.map((post: Post) => ({
        params: { id: post._id }
    }));
}
