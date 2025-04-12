
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { MOCK_STORIES } from './issues/mock-data';
import { VotedState, Story } from './issues/types';
import StoriesList from './issues/StoriesList';
import StoryDetail from './issues/StoryDetail';
import CommentDialog from './issues/CommentDialog';

const IssueStories = () => {
  const { toast } = useToast();
  const [selectedStory, setSelectedStory] = useState<Story>(MOCK_STORIES[0]);
  const [votedState, setVotedState] = useState<VotedState>({});
  const [isVoting, setIsVoting] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const [isCommentDialogOpen, setIsCommentDialogOpen] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const handleVote = async (id: number, type: 'up' | 'down') => {
    // Prevent double voting while request is in progress
    if (isVoting) return;
    
    setIsVoting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 700));
      
      // Update local state
      setVotedState(prev => ({
        ...prev,
        [id]: prev[id] === type ? null : type
      }));
      
      toast({
        title: type === 'up' ? "Issue Upvoted" : "Issue Downvoted",
        description: type === 'up' 
          ? "Thank you for confirming this issue" 
          : "Thank you for your feedback",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to record your vote. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVoting(false);
    }
  };
  
  const handleShare = async () => {
    setIsSharing(true);
    
    try {
      // Check if Web Share API is available
      if (navigator.share) {
        await navigator.share({
          title: selectedStory.title,
          text: selectedStory.description,
          url: `https://civifix.example/issues/${selectedStory.id}`,
        });
        
        toast({
          title: "Shared Successfully",
          description: "The issue has been shared",
        });
      } else {
        // Fallback to clipboard
        const shareUrl = `https://civifix.example/issues/${selectedStory.id}`;
        await navigator.clipboard.writeText(shareUrl);
        
        toast({
          title: "Link Copied!",
          description: "Issue link copied to clipboard",
        });
      }
    } catch (error) {
      // User canceled share or another error occurred
      if (error instanceof Error && error.name !== 'AbortError') {
        toast({
          title: "Sharing Failed",
          description: "Unable to share this issue",
          variant: "destructive",
        });
      }
    } finally {
      setIsSharing(false);
    }
  };
  
  const handleOpenCommentDialog = () => {
    setIsCommentDialogOpen(true);
  };
  
  const handleSubmitComment = async (commentText: string) => {
    setIsCommenting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      toast({
        title: "Comment Posted",
        description: "Your comment has been added to the issue",
      });
      
      // Reset form and close dialog
      setIsCommentDialogOpen(false);
      
      // Update the comment count in the selected story
      const updatedStory = {...selectedStory, comments: selectedStory.comments + 1};
      setSelectedStory(updatedStory);
      
    } catch (error) {
      toast({
        title: "Comment Failed",
        description: "Unable to post your comment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCommenting(false);
    }
  };

  const handleViewAllClick = () => {
    // Navigate to the issues page
    window.location.href = '/issues';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <StoriesList 
          stories={MOCK_STORIES}
          selectedStory={selectedStory}
          onSelectStory={setSelectedStory}
          onViewAllClick={handleViewAllClick}
        />
        
        <div className="w-full md:w-2/3">
          <StoryDetail 
            story={selectedStory}
            votedState={votedState[selectedStory.id]}
            isVoting={isVoting}
            isSharing={isSharing}
            onVote={handleVote}
            onOpenComment={handleOpenCommentDialog}
            onShare={handleShare}
          />
        </div>
      </div>

      <CommentDialog 
        isOpen={isCommentDialogOpen}
        onOpenChange={setIsCommentDialogOpen}
        onSubmitComment={handleSubmitComment}
        isCommenting={isCommenting}
      />
    </div>
  );
};

export default IssueStories;
