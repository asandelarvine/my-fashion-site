import { fetchBrands } from "@/lib/contentfulClient";
import { ContentfulBrand } from "@/types/contentful.types";

export default async function BrandsPage() {
  const brands: ContentfulBrand[] = await fetchBrands();
  brands.map((res) => console.log(JSON.stringify(res, null, 2)));

  return (
    <div className="px-6 md:px-12 lg:px-20 py-16">
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">Our Brands</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <div key={brand.name} className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition">
            {brand.logo && <img src={brand.logo.url} alt={brand.logo.description} className="h-24 w-24 object-contain mx-auto mb-4" />}
            <h3 className="text-xl font-semibold text-center mb-2">{brand.name}</h3>
            <p className="text-gray-600 text-center">{brand.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
