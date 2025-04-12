
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CampaignsComponent from '@/components/Campaigns';
import { useToast } from '@/hooks/use-toast';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CampaignsPage = () => {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages] = React.useState(5); // Simulate pagination
  
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    
    // Simulate loading new page data
    setCurrentPage(newPage);
    
    toast({
      title: "Page Changed",
      description: `Viewing page ${newPage} of campaigns`,
      duration: 2000,
    });
    
    // In a real app, you would fetch new data here
    // fetchCampaigns(newPage)
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">Government Campaigns</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join government-led initiatives and make a difference in your community.
          </p>
          
          <CampaignsComponent />
          
          {/* Shadcn Pagination Component */}
          <div className="mt-10">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage - 1);
                    }}
                    aria-disabled={currentPage === 1}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {[...Array(totalPages)].map((_, i) => {
                  // Show limited page numbers to avoid clutter
                  if (
                    i === 0 || // First page
                    i === totalPages - 1 || // Last page
                    (i >= currentPage - 1 && i <= currentPage + 1) // Pages around current
                  ) {
                    return (
                      <PaginationItem key={i}>
                        <PaginationLink 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(i + 1);
                          }}
                          isActive={currentPage === i + 1}
                          aria-current={currentPage === i + 1 ? "page" : undefined}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (
                    i === currentPage - 2 || 
                    i === currentPage + 2
                  ) {
                    // Add ellipsis for page gaps
                    return (
                      <PaginationItem key={i}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                })}

                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage + 1);
                    }}
                    aria-disabled={currentPage === totalPages}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CampaignsPage;
