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
        title,
        summary,
        content,
        likes,
        date,
        person,
        contentType,
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
