// src/app/[locale]/page.tsx

import AccessBar from '@/components/AccessBar';
import CorporateSection from '@/components/CorporateSection';
import CourseSection from '@/components/CourseSection';

import Hero from '@/components/Hero';
import IndividualSection from '@/components/IndividualSection';

import AccessBarsStudy from '@/components/Study';
import TestimonialSection from '@/components/TestimonialSection';

export default function Index() {
  return (
    <div className="container mx-auto  w-full min-h-screen">
      <Hero />
      <AccessBar />
      <AccessBarsStudy />
      <IndividualSection />
      <CorporateSection />
      <CourseSection />
      <TestimonialSection />
    </div>
  );
}
