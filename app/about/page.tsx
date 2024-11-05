// import { fetchAboutUs } from "@/lib/contentfulClient";
// import { AboutPageEntry } from "@/types/contentful.types";
// import Image from 'next/image';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// const AboutPage = async () => {
//   // Fetch the About Page data
//   const aboutData = await fetchAboutUs();
//   console.log(aboutData?.fields.title);

//   if (!aboutData) return <div className="text-center">Content not found.</div>;



//   const { title, heroText, heroImage, story, missionStatement, visionStatement } = aboutData.fields;

//   return (
//     <div className="px-6 md:px-12 lg:px-20 py-16 space-y-12">
//       {/* Hero Section */}
//       <section className="text-center space-y-4">
//         <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
       
//         <p className="text-xl text-gray-600">{heroText}</p>
//         {/* {heroImage && (
//           <img src={heroImage.fields.file.url} alt={heroImage.fields.description} className="w-full h-64 object-cover rounded-lg mt-8" />
//         )} */}
// {/* new code for image */}
// {heroImage?.fields?.file?.url && (
//   <Image
//     src={`https:${heroImage.fields.file.url}`}
//     alt={typeof heroImage.fields.description === 'string' ? heroImage.fields.description : title || 'Hero Image'}

//     layout="fill"
//     objectFit="cover"
//     className="rounded-lg shadow-lg"
//   />
// )}


        
//       </section>

//       {/* Story Section */}
//       <section className="max-w-3xl mx-auto space-y-4">
//         <h2 className="text-2xl font-semibold">Our Story</h2>
//         <p className="text-gray-700"> 
//         {story}</p>
//       </section>

//       {/* Mission and Vision Section */}
//       <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
//           {/* Mission Statement */}
//         <div>
//           <h2 className="text-2xl font-semibold">Mission</h2>
//           <p className="text-gray-700">
//           {missionStatement}
//         </p>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold">Vision</h2>
//           <p className="text-gray-700"> 
//           {visionStatement}</p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default AboutPage;

import { fetchAboutUs } from "@/lib/contentfulClient";
import { AboutPageEntry } from "@/types/contentful.types";
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const AboutPage = async () => {
  // Fetch the About Page data
  const aboutData = await fetchAboutUs();

  if (!aboutData) return <div className="text-center">Content not found.</div>;

  const { title, heroText, heroImage, story, missionStatement, visionStatement } = aboutData.fields;

  return (
    <div className="px-8 md:px-20 py-20 space-y-16 bg-[#F5F5DC] w-screen text-[#556B2F]">
      {/* Hero Section */}
      <section className="relative text-center space-y-6 md:space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-[#556B2F] leading-tight">{title}</h1>
        <p className="text-xl md:text-2xl text-[#000000]">{heroText}</p>
        
        {/* Hero Image */}
        {heroImage?.fields?.file?.url && (
          <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] mt-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`https:${heroImage.fields.file.url}`}
              alt={typeof heroImage.fields.description === 'string' ? heroImage.fields.description : title || 'Hero Image'}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
      </section>

      {/* Story Section */}
      <section className="max-w-3xl mx-auto text-[#000000]  space-y-6 md:space-y-8">
        <h2 className="text-3xl font-semibold text-[#556B2F] ">Our Story</h2>
        <p className="leading-relaxed">{story}</p>
      </section>

      {/* Mission and Vision Section */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 text-[#000000]  space-y-8 md:space-y-0">
        
        {/* Mission Statement */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#556B2F] ">Mission</h2>
          <p className="leading-relaxed">{missionStatement}</p>
        </div>

        {/* Vision Statement */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#556B2F] ">Vision</h2>
          <p className="leading-relaxed">{visionStatement}</p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

