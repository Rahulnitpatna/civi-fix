
import React from 'react';
import { 
  Map, Trash2, Lightbulb, Droplet, ParkingSquare, Construction, 
  Power, Cloud, TreePine, Bus 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

interface CategoryProps {
  icon: React.ReactNode;
  name: string;
  count: number;
}

const Category = ({ icon, name, count }: CategoryProps) => {
  return (
    <Button 
      variant="outline" 
      className="flex flex-col items-center justify-center h-28 gap-2 hover:bg-gray-50 dark:hover:bg-gray-800"
      aria-label={`Browse ${name} issues`}
    >
      <div className="text-civifix-blue dark:text-civifix-light-blue">
        {icon}
      </div>
      <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{name}</span>
      <span className="text-gray-500 dark:text-gray-400 text-xs">{count} issues</span>
    </Button>
  );
};

const IssueCategories = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const categories = [
    { icon: <Map size={24} />, name: 'Roads', count: 156 },
    { icon: <Trash2 size={24} />, name: 'Garbage', count: 93 },
    { icon: <Lightbulb size={24} />, name: 'Streetlights', count: 72 },
    { icon: <Droplet size={24} />, name: 'Water', count: 65 },
    { icon: <ParkingSquare size={24} />, name: 'Parking', count: 48 },
    { icon: <Construction size={24} />, name: 'Construction', count: 42 },
    { icon: <Power size={24} />, name: 'Electricity', count: 37 },
    { icon: <Cloud size={24} />, name: 'Pollution', count: 31 },
    { icon: <TreePine size={24} />, name: 'Parks', count: 29 },
    { icon: <Bus size={24} />, name: 'Public Transport', count: 18 },
  ];

  const handleViewAllCategories = () => {
    // Navigate to the issues page with a category filter parameter
    navigate('/issues?view=categories');
    
    toast({
      title: "Categories Loading",
      description: "Showing all available issue categories",
      duration: 3000,
    });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Browse Issues by Category</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore civic issues by category to see what's happening in your area and how you can help make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Category 
              key={index} 
              icon={category.icon} 
              name={category.name} 
              count={category.count} 
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleViewAllCategories}
            aria-label="View all issue categories"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IssueCategories;
