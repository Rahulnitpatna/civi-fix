
import React, { useState } from 'react';
import { Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';

interface CommentDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmitComment: (text: string) => Promise<void>;
  isCommenting: boolean;
}

const CommentDialog = ({ 
  isOpen, 
  onOpenChange, 
  onSubmitComment,
  isCommenting 
}: CommentDialogProps) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = async () => {
    if (!commentText.trim()) return;
    await onSubmitComment(commentText);
    setCommentText('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add a Comment</DialogTitle>
          <DialogDescription>
            Share your thoughts or additional information about this issue.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <Textarea
            placeholder="Write your comment here..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full"
            rows={4}
          />
        </div>
        <div className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button 
            onClick={handleSubmit} 
            disabled={isCommenting || !commentText.trim()}
            className="bg-civifix-blue hover:bg-blue-600"
          >
            {isCommenting ? (
              <>
                <Loader size={16} className="mr-2 animate-spin" />
                Posting...
              </>
            ) : 'Post Comment'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDialog;
