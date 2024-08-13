import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />

      <main className="container mx-auto flex-1 py-10">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
