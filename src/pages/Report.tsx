
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Upload, Camera, Loader } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Report = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationValue, setLocationValue] = useState('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Error",
        description: "Geolocation is not supported by your browser",
        variant: "destructive",
      });
      return;
    }

    setIsLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Success
        const { latitude, longitude } = position.coords;
        
        // You would typically use a reverse geocoding service here
        // For now, we'll just use the coordinates
        setLocationValue(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
        
        toast({
          title: "Location Found",
          description: "Your current location has been added to the report",
        });
        setIsLoadingLocation(false);
      },
      (error) => {
        // Error
        setIsLoadingLocation(false);
        let errorMessage = "Unable to retrieve your location";
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access was denied. Please enable location permissions.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable. Please try again.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out. Please try again.";
            break;
        }
        
        toast({
          title: "Location Error",
          description: errorMessage,
          variant: "destructive",
        });
      }
    );
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFiles = Array.from(event.target.files);
      
      // Check file size (limit to 10MB)
      const validFiles = newFiles.filter(file => file.size <= 10 * 1024 * 1024);
      
      if (validFiles.length !== newFiles.length) {
        toast({
          title: "File Size Error",
          description: "Some files exceed the 10MB limit and were not added",
          variant: "destructive",
        });
      }
      
      setSelectedImages(prev => [...prev, ...validFiles]);
      
      toast({
        title: "Images Added",
        description: `${validFiles.length} image(s) added to your report`,
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, you would send the form data to your API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Report Submitted",
        description: "Your civic issue has been reported successfully!",
      });
      
      // Reset form (In a real app, you might redirect to another page)
      event.target && (event.target as HTMLFormElement).reset();
      setLocationValue('');
      setSelectedImages([]);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was a problem submitting your report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">Report a Civic Issue</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Help improve your community by reporting issues that need attention.
          </p>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Issue Title
                </label>
                <Input
                  id="title"
                  placeholder="E.g., Pothole on Main Street"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category
                </label>
                <Select required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="roads">Roads & Infrastructure</SelectItem>
                    <SelectItem value="garbage">Garbage & Waste</SelectItem>
                    <SelectItem value="streetlights">Streetlights</SelectItem>
                    <SelectItem value="water">Water & Drainage</SelectItem>
                    <SelectItem value="electricity">Electricity</SelectItem>
                    <SelectItem value="parks">Parks & Public Spaces</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Describe the issue in detail. When did you notice it? How severe is it?"
                  rows={4}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Upload Images
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md">
                  <div className="space-y-1 text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600 dark:text-gray-400">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-civifix-blue hover:text-blue-600 dark:text-civifix-light-blue dark:hover:text-blue-400 focus-within:outline-none"
                      >
                        <span>Upload a file</span>
                        <input 
                          id="file-upload" 
                          name="file-upload" 
                          type="file" 
                          accept="image/*"
                          className="sr-only" 
                          multiple 
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG, JPG, GIF up to 10MB
                    </p>
                    {selectedImages.length > 0 && (
                      <p className="text-sm text-civifix-blue dark:text-civifix-light-blue">
                        {selectedImages.length} image(s) selected
                      </p>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    id="location"
                    className="pl-10 w-full"
                    placeholder="Enter address or use current location"
                    value={locationValue}
                    onChange={(e) => setLocationValue(e.target.value)}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="sm" 
                      className="h-full flex items-center gap-1"
                      onClick={handleUseMyLocation}
                      disabled={isLoadingLocation}
                      aria-label="Use my current location"
                    >
                      {isLoadingLocation ? (
                        <>
                          <Loader size={16} className="animate-spin" />
                          <span>Loading...</span>
                        </>
                      ) : (
                        <span>Use My Location</span>
                      )}
                    </Button>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  We'll use your location to show the issue to nearby users.
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-civifix-blue hover:bg-blue-600"
                  disabled={isSubmitting}
                  aria-label="Submit issue report"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={16} className="mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Report'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Report;
