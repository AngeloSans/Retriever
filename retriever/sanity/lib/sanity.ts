import { createClient } from '@sanity/client';

const client = createClient({
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
        console.error("Error fetching relatos:", error.message);
        throw error;
    }
}

export async function getAllPosts() {
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
        console.error("Error fetching posts:", error.message);
        throw error;
    }
}

export async function getPostById(id: string) {
    const query = `*[_type == "post" && _id == $id][0] {
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
        console.error("Error fetching post by ID:", error.message);
        throw error;
    }
}

export async function getAllPostIds() {
    const posts = await getAllPosts();
    return posts.map(post => ({
        params: { id: post._id }
    }));
}
