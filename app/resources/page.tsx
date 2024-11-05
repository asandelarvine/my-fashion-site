// 
import { fetchResources } from "@/lib/contentfulClient";
import { ContentfulResource } from "@/types/contentful.types";

export default async function ResourcesPage() {
  const resources: ContentfulResource[] = await fetchResources();

  return (
    <div className="px-6 md:px-12 lg:px-20 py-16 bg-[#556B2F] w-screen text-[#F5F5DC]">
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {resources.map((resource) => (
          <div key={resource.title} className="bg-white text-[#556B2F] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {resource.featuredImage?.url && (
              <img
                src={resource.featuredImage.url}
                alt={resource.featuredImage.description || resource.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="text-[#000000] text-sm mb-2">
                {resource.type} • {new Date(resource.publishDate).toLocaleDateString()}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{resource.title}</h3>
              <p className="text-gray-700 mb-4">{resource.description}</p>
              <div className="text-sm text-gray-500 mb-4">
                {resource.author && `By ${resource.author}`}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
