// src/app/[locale]/page.tsx

import AccessBar from '@/components/AccessBar';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import AccessBarsStudy from '@/components/Study';

export default function Index() {
  return (
    <div className="container mx-auto  w-full min-h-screen">
      <Nav />
      <Hero />
      <AccessBar />
      <AccessBarsStudy />
    </div>
  );
}
