import { fetchBrands } from "@/lib/contentfulClient";
import { ContentfulBrand } from "@/types/contentful.types";

export default async function BrandsPage() {
  const brands: ContentfulBrand[] = await fetchBrands();
  brands.map((res) => console.log(JSON.stringify(res, null, 2)));

  return (
    <div className="bg-[#556B2F] text-[#F5F5DC] px-6 md:px-12 lg:px-20 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">Our Brands</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <div key={brand.name} className="bg-[#F5F5DC] border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition">
            {brand.logo && (
              <img 
                src={brand.logo.url} 
                alt={brand.logo.description} 
                className="h-24 w-full object-contain mx-auto mb-4" 
              />
            )}
            <h3 className="text-xl font-semibold text-center text-[#556B2F] mb-2">{brand.name}</h3>
            <p className="text-center text-[#000000] mb-2">{brand.description}</p>
            {brand.category && brand.category.length > 0 && (
              <p className="text-center text-sm text-[#000000]">Categories: {brand.category.join(', ')}</p>
            )}
            {brand.website && (
              <a 
                href={brand.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-center text-[#556B2F] mt-4 font-semibold hover:underline"
              >
                Visit Website
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

  