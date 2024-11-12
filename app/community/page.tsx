import React from 'react';
import { fetchCommunityPage } from '@/lib/contentfulClient';
import { ProcessedCommunityPage } from '@/types/contentful.types';

export const metadata = {
  title: 'Community',
  description: 'Join our community and explore events, guides, and member stories.',
};

const CommunityPage: React.FC = async () => {
  const communityData: ProcessedCommunityPage | null = await fetchCommunityPage();

  // Fallback values in case communityData is null
  if (!communityData) {
    return (
      <div className="community-page font-sans text-[#556B2F] bg-[#FFF]">
        <section className="hero-section text-center py-20">
          <h1 className="text-4xl font-bold">Community</h1>
          <p className="text-lg mt-4">Content not available at the moment. Please check back later.</p>
        </section>
      </div>
    );
  }

  return (
    <div className="community-page font-sans text-[#556B2F] bg-[#FFF]">
      {/* Hero Section */}
      <section
        className="hero-section text-center py-20"
        style={{
          backgroundImage: communityData.bannerImage
            ? `url(${communityData.bannerImage.url})`
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFF',
        }}
      >
        <h1 className="text-4xl font-bold">{communityData.title}</h1>
        <p className="text-lg mt-4">{communityData.description}</p>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <ul>
          {communityData.upcomingEvents.map((event, index) => (
            <li key={index} className="mb-4 border-b pb-4">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
              <p className="text-gray-500">{event.date}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Member Spotlight Section */}
      <section className="member-spotlight py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6">Member Spotlight</h2>
        <div className="flex items-center space-x-4">
          {communityData.members && communityData.members.length > 0 && (
            <>
              <img
                src={communityData.members[0]}
                alt="Member Spotlight"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">{communityData.members[0]}</h3>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Guides for Members */}
      <section className="guides-for-members py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6">Guides for Members</h2>
        <div>
          {communityData.guidesForMembers.map((guide, index) => (
            <div key={index} className="mb-4 border-b pb-4">
              <h3 className="text-lg font-semibold">{guide.title}</h3>
              <p className="text-gray-700">{guide.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
