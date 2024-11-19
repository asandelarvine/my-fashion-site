// // app/community/page.tsx
// import React from 'react';
// import { fetchCommunityPage } from '@/lib/contentfulClient';
// import CommunityPageComponent from './CommunityPageComponent1';
// import { ProcessedCommunityPage } from '@/types/contentful.types';

// export const metadata = {
//   title: 'Community',
//   description: 'Join our community and explore events, guides, and member stories.',
// };

// const CommunityPage: React.FC = async () => {
//   const communityData: ProcessedCommunityPage | null = await fetchCommunityPage();

//   if (!communityData) {
//     return (
//       <div className="community-page font-sans text-[#556B2F] bg-[#FFF]">
//         <section className="hero-section text-center py-20">
//           <h1 className="text-4xl font-bold">Community</h1>
//           <p className="text-lg mt-4">Content not available at the moment. Please check back later.</p>
//         </section>
//       </div>
//     );
//   }

//   return (
//     <div className="community-page font-sans text-[#000000] bg-[#F5F5DC]">
//       <CommunityPageComponent communityData={communityData} />
//     </div>
//   );
// };

// export default CommunityPage;
