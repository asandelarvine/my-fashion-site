import { fetchEvents } from "@/lib/contentfulClient";
import { ContentfulEvent } from "@/types/contentful.types";

export default async function EventsPage() {
  const events: ContentfulEvent[] = await fetchEvents();

  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 bg-[#F5F5DC] w-screen text-[#556B2F]">
  <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">Upcoming Events</h1>

  {/* Timeline container */}
  <div className="relative">
    {/* Vertical line through the timeline */}
    <div className="absolute inset-0 w-1 bg-[#000000] left-1/2 transform -translate-x-1/2"></div>

    {/* Event items */}
    {events.map((event, index) => (
      <div
        key={event.title}
        className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-10`}
      >
        {/* Timeline marker */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
          <span className="h-6 w-6 rounded-full bg-[#fff] border-4 border-[#556B2F] block"></span>
        </div>

        {/* Event details */}
        <div
          className={`relative w-5/12 p-6 bg-[#000000] rounded-lg shadow-lg transition-shadow duration-300 ${
            index % 2 === 0 ? 'text-right mr-12' : 'ml-12'
          }`}
        >
          <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
          <p className="text-[#F5F5DC] mb-3">{event.description}</p>
          <p className="text-sm text-[#F5F5DC] mb-1">{new Date(event.date).toLocaleDateString()}</p>
          <p className="text-[#F5F5DC]">{event.location}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    
  );
}
