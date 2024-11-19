// // CommunityPageComponent.tsx
// import React from 'react';
// import { ProcessedCommunityPage } from '@/types/contentful.types';

// const CommunityPageComponent = ({ communityData }: { communityData: ProcessedCommunityPage }) => {
//   if (!communityData) return null; // Handle null data

//   return (
//     <div>
//       <h1>{communityData.title}</h1>
//       <img src={communityData.heroImage?.url} alt="Hero" />
//       <p>{communityData.heroText}</p>

//       {communityData.upcomingEvents?.length > 0 && (
//         <section>
//           <h2>Upcoming Events</h2>
//           {communityData.upcomingEvents.map((event, index) => (
//             <div key={index}>
//               <h3>{event.title}</h3>
//               <p>{event.description}</p>
//               <p>{event.date}</p>
//             </div>
//           ))}
//         </section>
//       )}

//       {communityData.members?.length > 0 && (
//         <section>
//           <h2>Members</h2>
//           {communityData.members.map((member, index) => (
//             <div key={index}>
//               <img src={member.memberImage?.url} alt="Member" />
//               <h3>{member.memberName}</h3>
//               <p>{member.memberRole}</p>
//               <p>{member.memberBio}</p>
//             </div>
//           ))}
//         </section>
//       )}

//       {/* Guides for Members Section */}
//       <section className="guides-for-members py-12 px-4 md:px-8">
//         <h2 className="text-2xl font-bold mb-6">Guides for Members</h2>
//         {communityData.guidesForMembers.map((guide, index) => (
//           <div key={index} className="mb-8 border-b pb-4">
//             <h3 className="text-lg font-semibold">{guide.title}</h3>
//             <p className="text-gray-700 mb-2">{guide.description}</p>
//             <p className="text-gray-500 mb-2">{guide.content}</p>
//             <p className="text-sm font-light text-gray-600">Type: {guide.type}</p>
//             <p className="text-sm font-light text-gray-600">Author: {guide.author}</p>
//             <p className="text-sm text-gray-500">Published on: {new Date(guide.publishDate).toDateString()}</p>
//             {guide.featuredImage && (
//               <img
//                 src={guide.featuredImage.url}
//                 alt={guide.featuredImage.description}
//                 className="my-4 w-full h-48 object-cover"
//               />
//             )}
//             <div className="gallery grid grid-cols-2 gap-4 mt-4">
//               {guide.gallery.map((image, imgIndex) => (
//                 <img
//                   key={imgIndex}
//                   src={image.url}
//                   alt={image.description}
//                   className="w-full h-32 object-cover"
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default CommunityPageComponent;
