
import React from 'react';
import { Button } from '@/components/ui/button';
import StoryCard from './StoryCard';
import { Story } from './types';

interface StoriesListProps {
  stories: Story[];
  selectedStory: Story;
  onSelectStory: (story: Story) => void;
  onViewAllClick: () => void;
}

const StoriesList = ({ 
  stories, 
  selectedStory, 
  onSelectStory,
  onViewAllClick 
}: StoriesListProps) => {
  return (
    <div className="w-full md:w-1/3 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Issues</h2>
        <Button 
          variant="outline" 
          size="sm"
          onClick={onViewAllClick}
          aria-label="View all issues"
        >
          View All
        </Button>
      </div>
      
      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            isActive={selectedStory.id === story.id}
            onClick={() => onSelectStory(story)}
          />
        ))}
      </div>
    </div>
  );
};

export default StoriesList;
