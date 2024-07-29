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

const TopicCard: React.FC<TopicCardProps> = ({ id, title, summary, date, likes, image, owner, type }) => {
    return (
        <Link href={`/contentpage/${id}`} passHref>
            <div className="block border rounded-lg p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 max-w-sm cursor-pointer">
                <img src={image} alt={title} className="w-full h-20 md:w-80 md:h-60 object-cover rounded-md" />
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-black">{title}</h3>
                        <p className="text-sm text-gray-500">{date}</p>
                        <p className="mt-2 text-gray-700">{summary}</p>
                    </div>
                    <div>
                        <p className="mt-2 text-gray-700">{likes.toLocaleString()} likes</p>
                        <p className="mt-2 text-gray-700">Owner: {owner}</p>
                        <p className="mt-2 text-gray-700">Type: {type}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default TopicCard;
