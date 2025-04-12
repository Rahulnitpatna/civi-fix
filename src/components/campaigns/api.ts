
import { Campaign } from './types';

// Simulated API response delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Join a campaign by ID
 * @param id Campaign ID
 * @returns Promise with updated campaign data
 */
export async function joinCampaign(id: number): Promise<Campaign> {
  // Simulate API call
  await delay(1000);
  
  // In a real implementation, this would be:
  // return fetch(`/api/campaigns/${id}/join`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  // }).then(res => {
  //   if (!res.ok) throw new Error('Failed to join campaign');
  //   return res.json();
  // });
  
  // For now, return mock success response
  return {
    id,
    title: 'Campaign Title', // This would come from the API
    description: 'Campaign Description',
    imageUrl: '',
    progress: 68,
    participants: 12846, // Increment by 1
    joined: true
  };
}
