import { fetchEvents } from "@/lib/contentfulClient";
import { ContentfulEvent } from "@/types/contentful.types";

export default async function EventsPage() {
  const events: ContentfulEvent[] = await fetchEvents();

  return (
    <div className="px-6 md:px-12 lg:px-20 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">Upcoming Events</h1>
      <div className="space-y-8">
        {events.map((event) => (
          <div key={event.title} className="border-b border-gray-200 pb-8">
            <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-700 mb-1">{event.description}</p>
            <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-500">{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
