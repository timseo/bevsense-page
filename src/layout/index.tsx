import React from 'react';
import Navbar from './components/Navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#F5F5F5]">
    <Navbar />
    <main className="container mx-auto">{children}</main>
  </div>
);

export default MainLayout;
