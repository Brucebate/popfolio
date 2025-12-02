'use client';
import { useState } from 'react';
import SplashScreen from './src/components/SplashScreen';
import Navbar from './src/components/ui/Navbar';
import HomePage from './src/pages/HomePage';
import Footer from './src/components/ui/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900">
      <main className="min-h-screen">
        {isLoading ? (
          <SplashScreen onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar />
            <HomePage />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}