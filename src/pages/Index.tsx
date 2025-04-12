
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import IssueStories from '@/components/IssueStories';
import IssueCategories from '@/components/IssueCategories';
import Campaigns from '@/components/Campaigns';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <IssueStories />
        <IssueCategories />
        <Campaigns />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
