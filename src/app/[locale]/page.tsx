// src/app/[locale]/page.tsx

import Nav from '@/components/Nav';

export default function Index() {
  return (
    <div className="bg-black w-full min-h-screen">
      <h1>Locale</h1>
      <Nav />
    </div>
  );
}
