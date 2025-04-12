
import React, { useState } from 'react';
import { ArrowRight, Check, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { joinCampaign } from './campaigns/api';
import { Campaign } from './campaigns/types';

// Mock campaigns with joined status
const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: 1,
    title: 'Green India Movement',
    description: 'Join the initiative to plant trees and increase green cover in urban areas.',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop',
    progress: 68,
    participants: 12845,
    joined: false,
  },
  {
    id: 2,
    title: 'Save Water Campaign',
    description: 'Learn about water conservation methods and help prevent water wastage in your community.',
    imageUrl: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?w=800&auto=format&fit=crop',
    progress: 42,
    participants: 9532,
    joined: false,
  },
  {
    id: 3,
    title: 'Reduce Pollution Drive',
    description: 'Take part in initiatives to reduce air pollution and promote clean energy alternatives.',
    imageUrl: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800&auto=format&fit=crop',
    progress: 55,
    participants: 7621,
    joined: false,
  },
];

const Campaigns = () => {
  const { toast } = useToast();
  const [campaigns, setCampaigns] = useState<Campaign[]>(MOCK_CAMPAIGNS);
  const [joiningCampaign, setJoiningCampaign] = useState<number | null>(null);
  
  const handleJoinCampaign = async (campaignId: number) => {
    // Check if already joined
    const campaign = campaigns.find(c => c.id === campaignId);
    if (campaign?.joined) {
      toast({
        title: "Already joined",
        description: "You're already a member of this campaign",
        duration: 3000,
      });
      return;
    }
    
    // Set loading state
    setJoiningCampaign(campaignId);
    
    try {
      // Call API to join campaign
      await joinCampaign(campaignId);
      
      // Update local state
      setCampaigns(campaigns.map(campaign => 
        campaign.id === campaignId 
          ? { ...campaign, joined: true, participants: campaign.participants + 1 } 
          : campaign
      ));
      
      // Show success toast
      toast({
        title: "Success!",
        description: "You've successfully joined the campaign",
        duration: 3000,
      });
    } catch (error) {
      // Show error toast
      toast({
        title: "Error",
        description: "Failed to join campaign. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      // Reset loading state
      setJoiningCampaign(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Government-Led Campaigns</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">
            Join government initiatives and make a positive impact in your community through active participation.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button variant="outline" className="flex items-center">
            <span>View All Campaigns</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="story-card overflow-hidden group">
            <div className="relative h-48">
              <img
                src={campaign.imageUrl}
                alt={campaign.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://images.unsplash.com/photo-1529243856184-fd5465488984?w=800&auto=format&fit=crop'; // Fallback image
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-xl">{campaign.title}</h3>
              </div>
            </div>
            
            <div className="p-5">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {campaign.description}
              </p>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Campaign Progress</span>
                  <span className="font-medium text-civifix-blue">{campaign.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-civifix-green h-2.5 rounded-full" 
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-civifix-blue">{campaign.participants.toLocaleString()}</span> participants
                </div>
                <Button 
                  size="sm" 
                  variant={campaign.joined ? "outline" : "default"}
                  className={campaign.joined ? "bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:text-green-800" : "bg-civifix-blue hover:bg-blue-600"} 
                  onClick={() => handleJoinCampaign(campaign.id)}
                  disabled={joiningCampaign === campaign.id}
                  aria-label={campaign.joined ? "Already joined campaign" : "Join campaign"}
                >
                  {joiningCampaign === campaign.id ? (
                    <>
                      <Loader size={16} className="mr-1 animate-spin" />
                      <span>Joining...</span>
                    </>
                  ) : campaign.joined ? (
                    <>
                      <Check size={16} className="mr-1" />
                      <span>Joined ✅</span>
                    </>
                  ) : (
                    <span>Join Campaign</span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
