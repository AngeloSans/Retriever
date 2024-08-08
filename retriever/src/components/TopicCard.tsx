import React from 'react';
import Link from 'next/link';

interface TopicCardProps {
    id: string;
    title: string;
    summary: string;
    date: string;
    likes: number;
    image: string;
    owner: string;
    type: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ id, title, summary, image }) => {
    return (
        <Link href={`/contentpage/${id}`} passHref>
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer mb-6 max-w-sm">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h2 className="text-black text-md font-semibold">{title}</h2>
                    <p className="text-gray-600 text-sm mt-2">{summary}</p>
                </div>
            </div>
        </Link>
    );
};

export default TopicCard;
