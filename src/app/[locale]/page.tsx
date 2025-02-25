// src/app/[locale]/page.tsx

import AccessBar from '@/components/AccessBar';
import CorporateSection from '@/components/CorporateSection';
import CourseSection from '@/components/CourseSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import IndividualSection from '@/components/IndividualSection';
import Nav from '@/components/Nav';
import AccessBarsStudy from '@/components/Study';

export default function Index() {
  return (
    <div className="container mx-auto  w-full min-h-screen">
      <Nav />
      <Hero />
      <AccessBar />
      <AccessBarsStudy />
      <IndividualSection />
      <CorporateSection />
      <CourseSection />
      <Footer />
    </div>
  );
}
