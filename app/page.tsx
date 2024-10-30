import React from "react";
import Link from "next/link";
import { fetchAboutUs, fetchResources, fetchBrands, fetchEvents } from "@/lib/contentfulClient";
import { AboutPageEntry, ContentfulResource, ContentfulBrand, ContentfulEvent } from "@/types/contentful.types";

export default async function HomePage() {
  const aboutData: AboutPageEntry | null = await fetchAboutUs();
  const resources: ContentfulResource[] = await fetchResources();
  const brands: ContentfulBrand[] = await fetchBrands();
  const events: ContentfulEvent[] = await fetchEvents();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="w-full bg-white py-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">Your Brand
          </Link>
          <nav className="space-x-6">
          <Link href="/about" className="hover:text-gray-600">About</Link>
          <Link href="/brands" className="hover:text-gray-600">Brands</Link>
          <Link href="/resources" className="hover:text-gray-600">Resources</Link>
          <Link href="/events" className="hover:text-gray-600">Events</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center h-96"
        style={{
          backgroundImage: `url('${aboutData?.fields?.heroImage?.fields?.file?.url || "/default-hero.jpg"}')`,
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-md text-center">
            Empowering Independent Brands
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-12">
         <h2 className="text-3xl font-semibold mb-6 text-center">About Us</h2>
          <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
           {aboutData?.fields?.story || ""}
          </p>
  
          <Link href="/about" className="block text-center text-indigo-600 mt-4">
             Learn more about us
          </Link>
      </section>

      {/* Brands Section */}
      <section id="brands" className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">Featured Brands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.slice(0, 4).map((brand) => (
              <div key={brand.name} className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition">
                {brand.logo && (
                  <img src={brand.logo.url} alt={brand.logo.description} className="h-24 w-full object-contain mb-4" />
                )}
                <h3 className="text-xl font-semibold text-center">{brand.name}</h3>
                <p className="text-gray-600 text-center">{brand.description}</p>
              </div>
            ))}
          </div>
          <Link href="/brands" className="block text-center text-indigo-600 mt-4">
                Explore more about brands
          </Link>

        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="container mx-auto px-6 py-12">
  <h2 className="text-3xl font-semibold mb-6 text-center">Resources</h2>
  <div className="space-y-8">
    {resources.slice(0, 3).map((resource) => (
      <div key={resource.title} className="flex flex-col md:flex-row items-start md:items-center gap-4">
        {resource.featuredImage?.url && (
          <img src={resource.featuredImage.url} alt={resource.featuredImage.description} className="w-full md:w-48 rounded-lg object-cover" />
        )}
        <div>
          <h3 className="text-2xl font-semibold mb-2">{resource.title}</h3>
          <p className="text-gray-700">
            {resource.description || ""}
          </p>
        </div>
      </div>
    ))}
  </div>
  <Link href="/resources" className="block text-center text-indigo-600 mt-4">
    View more Resources
  </Link>
</section>

      {/* Events Section */}
      <section id="events" className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">Upcoming Events</h2>
          <div className="space-y-8">
            {events.slice(0, 3).map((event) => (
              <div key={event.title} className="border-b pb-4">
                <h3 className="text-2xl font-semibold">{event.title}</h3>
                <p className="text-gray-700">{event.description}</p>
                <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
                <p className="text-gray-500">{event.location}</p>
              </div>
            ))}
          </div>
          <Link href="/events" className="block text-center text-indigo-600 mt-4">
             See all Events!!
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 py-6 mt-12 text-center text-white">
        <p className="text-sm">© 2024 Your Brand. All rights reserved.</p>
      </footer>
    </div>
  );
}
