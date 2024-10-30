import { fetchResources } from "@/lib/contentfulClient";
import { ContentfulResource } from "@/types/contentful.types";


export default async function ResourcesPage() {
  const resources: ContentfulResource[] = await fetchResources();
  resources.map((res) => console.log(JSON.stringify(res, null, 2)));

  return (
    <div className="px-6 md:px-12 lg:px-20 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">Resources</h1>
      <div className="space-y-8">
        {resources.map((resource) => (
          <div key={resource.title} className="flex flex-col md:flex-row items-start md:items-center gap-4 border-b border-gray-200 pb-8">
            {resource.featuredImage?.url && (
              <img src={resource.featuredImage.url} alt={resource.featuredImage.description} className="w-full md:w-48 rounded-lg object-cover" />
            )}
            <div>
              <h3 className="text-2xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-white-700">{resource.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
