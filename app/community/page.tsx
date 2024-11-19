import React from 'react';
import { fetchCommunityPage } from '@/lib/contentfulClient';
import { ProcessedCommunityPage } from '@/types/contentful.types';

export const metadata = {
  title: 'Community',
  description: 'Join our community and explore events, guides, and member stories.',
};

const CommunityPage: React.FC = async () => {
  const communityData: ProcessedCommunityPage | null = await fetchCommunityPage();

  if (!communityData) {
    return (
      <div className="community-page font-sans text-gray-800 bg-white">
        <section className="hero-section text-center py-20">
          <h1 className="text-4xl font-bold">Community</h1>
          <p className="text-lg mt-4">Content not available at the moment. Please check back later.</p>
        </section>
      </div>
    );
  }

  return (
    <div className="community-page font-sans text-gray-900 bg-gray-100">
      {/* Hero Section */}
      <section
        className="hero-section text-center py-20"
        style={{
          backgroundImage: `url(${communityData.heroImage.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-4xl font-bold">{communityData.title}</h1>
        <p className="text-lg mt-4">{communityData.heroText}</p>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <ul>
          {communityData.upcomingEvents.map((event, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p>{event.description}</p>
              <p className="text-gray-500">{event.date}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Member Spotlight Section */}
      <section className="member-spotlight py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6">Member Spotlight</h2>
        <div className="flex items-center space-x-4">
          <img
            src={communityData.members.memberImage.url}
            alt={communityData.members.memberName}
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h3 className="text-xl font-bold">{communityData.members.memberName}</h3>
            <p>{communityData.members.memberRole}</p>
            <p>{communityData.members.memberBio}</p>
          </div>
        </div>
      </section>

      {/* Guides for Members Section */}
      <section className="guides-for-members py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6">Guides for Members</h2>
        {communityData.guidesForMembers.map((guide, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <h3 className="text-lg font-semibold">{guide.title}</h3>
            <p>{guide.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CommunityPage;
