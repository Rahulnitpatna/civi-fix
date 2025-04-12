
import React from 'react';
import { MapPin, ThumbsUp } from 'lucide-react';
import { Story } from './types';
import StatusBadge from './StatusBadge';

interface StoryCardProps {
  story: Story;
  isActive: boolean;
  onClick: () => void;
}

const StoryCard = ({ story, isActive, onClick }: StoryCardProps) => {
  return (
    <div
      className={`story-card p-4 cursor-pointer ${isActive ? 'story-card-active' : ''}`}
      onClick={onClick}
    >
      <div className="flex gap-3">
        <div className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
          <img 
            src={story.imageUrl} 
            alt={story.title} 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 dark:text-white text-sm">{story.title}</h3>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{story.location}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <StatusBadge status={story.status} />
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <ThumbsUp className="h-3 w-3 mr-1" />
              <span>{story.upvotes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
