import React from 'react';

interface TopicCardProps {
    title: string;
    summary: string;
    date: string;
    likes: number;
    image: string;
    owner: string;
    type: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, summary, date, likes, image, owner, type }) => {
    return (
        <div className="border rounded-lg p-4 flex flex-col space-y-2">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
            <div>
                <h3 className="text-lg font-semibold text-black" >{title}</h3>
                <p className="text-sm text-gray-500">{date}</p>
                <p className="mt-2 text-gray-700">{summary}</p>
                <p className="mt-2 text-gray-700">{likes.toLocaleString()} likes</p>
                <p className="mt-2 text-gray-700">Owner: {owner}</p>
                <p className="mt-2 text-gray-700">Type: {type}</p>
            </div>
        </div>
    );
}

export default TopicCard;
