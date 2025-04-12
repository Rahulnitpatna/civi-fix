
import React from 'react';
import { ThumbsUp, ThumbsDown, Loader } from 'lucide-react';
import { VoteType } from './types';

interface VotingButtonsProps {
  storyId: number;
  upvotes: number;
  downvotes: number;
  votedState: VoteType;
  isVoting: boolean;
  onVote: (id: number, type: 'up' | 'down') => void;
}

const VotingButtons = ({ 
  storyId,
  upvotes,
  downvotes,
  votedState,
  isVoting,
  onVote
}: VotingButtonsProps) => {
  return (
    <div className="flex items-center space-x-2">
      <button 
        className={`vote-button ${votedState === 'up' ? 'vote-button-up-active' : 'vote-button-up'}`}
        onClick={() => onVote(storyId, 'up')}
        disabled={isVoting}
        aria-label="Upvote issue"
      >
        {isVoting ? 
          <Loader size={16} className="animate-spin mr-1" /> : 
          <ThumbsUp className="h-5 w-5" />
        }
        <span className="ml-1">{upvotes + (votedState === 'up' ? 1 : 0)}</span>
      </button>
      
      <button 
        className={`vote-button ${votedState === 'down' ? 'vote-button-down-active' : 'vote-button-down'}`}
        onClick={() => onVote(storyId, 'down')}
        disabled={isVoting}
        aria-label="Downvote issue"
      >
        {isVoting ? 
          <Loader size={16} className="animate-spin mr-1" /> : 
          <ThumbsDown className="h-5 w-5" />
        }
        <span className="ml-1">{downvotes + (votedState === 'down' ? 1 : 0)}</span>
      </button>
    </div>
  );
};

export default VotingButtons;
