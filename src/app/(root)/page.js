import React from "react";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="h-[60px] border-b">
        <NavBar />
      </header>
      <main>
        <section className="min-h-[calc(100vh-60px)] flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-md md:text-5xl font-bold sm:text-8xl mb-4">
            NVDSTORE NEWS
          </h1>
          <p className="text-sm mb-8 text-muted-foreground italic">
            Portal Berita Game Terdepan di Indonesia! </p>
          <Button asChild>
            <Link href="/blogs">
              Dive into the NVDSTORE NEWS <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
        <section className="py-16 px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Trending in the Blogmos
          </h2>
          {/* Add your trending posts or topics here */}
        </section>
        <section className="py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore More?</h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Discover insightful content across the NVDSTORE NEWS
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/blogs">
              Explore All Blogs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
