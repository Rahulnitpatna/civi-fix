
import React from 'react';
import { Clock, MapPin, MessageCircle, Share2, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Story } from './types';
import VotingButtons from './VotingButtons';
import StatusBadge from './StatusBadge';
import { VoteType } from './types';

interface StoryDetailProps {
  story: Story;
  votedState: VoteType;
  isVoting: boolean;
  isSharing: boolean;
  onVote: (id: number, type: 'up' | 'down') => void;
  onOpenComment: () => void;
  onShare: () => void;
}

const StoryDetail = ({
  story,
  votedState,
  isVoting,
  isSharing,
  onVote,
  onOpenComment,
  onShare
}: StoryDetailProps) => {
  return (
    <div className="story-card overflow-hidden animate-zoom-in">
      <div className="h-80 bg-gray-200 dark:bg-gray-700 relative">
        <img 
          src={story.imageUrl} 
          alt={story.title} 
          className="h-full w-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-sm font-medium">{story.category}</span>
        </div>
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
          <Clock className="h-3 w-3 text-white mr-1" />
          <span className="text-white text-xs">{story.timestamp}</span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{story.title}</h2>
          <StatusBadge status={story.status} />
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{story.location}</span>
        </div>
        
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {story.description}
        </p>
        
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
          <VotingButtons 
            storyId={story.id}
            upvotes={story.upvotes}
            downvotes={story.downvotes}
            votedState={votedState}
            isVoting={isVoting}
            onVote={onVote}
          />
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center"
              onClick={onOpenComment}
              aria-label="Comment on this issue"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>Comment ({story.comments})</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center"
              onClick={onShare}
              disabled={isSharing}
              aria-label="Share this issue"
            >
              {isSharing ? 
                <Loader size={16} className="animate-spin mr-1" /> : 
                <Share2 className="h-4 w-4 mr-1" />
              }
              <span>Share</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
