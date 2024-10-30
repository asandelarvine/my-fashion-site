// // HomePage.tsx
// 'use client'
// import { useEffect, useState } from 'react';
// import { Asset, Entry } from 'contentful';
// import Image from 'next/image';
// import { contentfulClient } from '@/lib/contentfulClient';


// // Define the structure of the fields in the HomePage content type
// interface HomePageFields {
//     title: string;
//     description: string;
//     bannerImage: Asset;
//   }
  
//   const HomePage: React.FC = () => {
//     // State to store the fetched homepage entry
//     const [homePageData, setHomePageData] = useState<Entry<HomePageFields> | null>(null);
  
//     // Function to fetch homepage data
//     const fetchHomePageData = async () => {
//       try {
//         const entries = await contentfulClient.getEntries<HomePageFields>({
//           content_type: 'homePage',
//         });
//         if (entries.items.length > 0) {
//           setHomePageData(entries.items[0]); // Assuming you only have one HomePage entry
//         }
//       } catch (error) {
//         console.error('Error fetching HomePage data:', error);
//       }
//     };
  
//     // Fetch data on component mount
//     useEffect(() => {
//       fetchHomePageData();
//     }, []);
  
//     if (!homePageData) {
//       return <div>Loading...</div>; // Show a loading state while data is being fetched
//     }
  
//     // Destructure fields from the fetched entry
//     const { title, description, bannerImage } = homePageData.fields;
  
//     return (
//       <div>
//         <h1>{title}</h1>
//         <p>{description}</p>
//         {bannerImage && (
//           <Image
//             src={`https:${bannerImage.fields.file.url}`}
//             alt={title}
//             width={bannerImage.fields.file.details.image.width}
//             height={bannerImage.fields.file.details.image.height}
//           />
//         )}
//       </div>
//     );
//   };
  
//   export default HomePage;