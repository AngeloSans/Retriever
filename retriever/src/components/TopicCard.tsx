import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { client } from '@/sanity/lib/client';

interface post {
    _id: string;
    title: string;
    summary: string;
    date: string;
    likes: number;
    image: string;
    owner: string;
    type: string;
}

const TopicCard: React.FC<post> = ({ _id, title, summary, image }) => {
    return (
        <Link href={`/contentpage/${_id}` } passHref>
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer mb-6 max-w-sm">
                <Image src={image} alt={title} height={1800} width={1800} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h2 className="text-black text-md font-semibold">{title}</h2>
                    <p className="text-gray-600 text-sm mt-2">{summary}</p>
                </div>
            </div>
        </Link>
    );
};

export const getStaticProps = async () => {
    const query = `*[_type == "post"]{ _id, title, summary, "image": image.asset->url }`;
    const posts = await client.fetch(query);
  
    return {
      props: {
        posts,
      },
    };
  };

export default TopicCard;
