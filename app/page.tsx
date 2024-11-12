import React from "react";
import Link from "next/link";
import { fetchAboutUs, fetchResources, fetchBrands, fetchEvents } from "@/lib/contentfulClient";
import { AboutPageEntry, ContentfulResource, ContentfulBrand, ContentfulEvent,  } from "@/types/contentful.types";
import { Button } from '@/components/ui/button.ui';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { fotter1, fotter2, items } from "@/constants/menu.constants";

export default async function HomePage() {
  const aboutData: AboutPageEntry | null = await fetchAboutUs();
  const resources: ContentfulResource[] = await fetchResources();
  const brands: ContentfulBrand[] = await fetchBrands();
  const events: ContentfulEvent[] = await fetchEvents();

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header */}
        <header className="w-full bg-white py-4 shadow-md sticky top-0 z-10">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-semibold">Your Brand</Link>
            <nav className="space-x-6">
              <Link href="/about" className="hover:text-gray-600">About</Link>
              <Link href="/brands" className="hover:text-gray-600">Brands</Link>
              <Link href="/resources" className="hover:text-gray-600">Resources</Link>
              <Link href="/events" className="hover:text-gray-600">Events</Link>
              <Link href="/community" className="hover:text-gray-600">Community</Link> {/* New link */}
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
          <Link href="/about" className="block text-center text-[#556B2F] mt-4">
            Learn more about us
          </Link>
        </section>

        {/* Brands Section */}
        <section id="brands" className="bg-[#556B2F] py-16 text-[#F5F5DC]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center tracking-wide uppercase">Featured Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {brands.slice(0, 4).map((brand) => (
                <div
                  key={brand.name}
                  className="bg-[#F5F5DC] p-8 rounded-lg shadow-md transform hover:-translate-y-2 hover:shadow-xl transition duration-300 ease-in-out"
                >
                  {brand.logo && (
                    <img
                      src={brand.logo.url}
                      alt={brand.logo.description}
                      className="h-32 w-full object-contain mb-6"
                    />
                  )}
                  <h3 className="text-2xl font-semibold text-center text-[#556B2F] tracking-wide">{brand.name}</h3>
                  <p className="text-center text-[#000000] mt-4">{brand.description}</p>
                  {brand.category && brand.category.length > 0 && (
                    <p className="text-center text-sm text-[#556B2F] mt-2">Categories: {brand.category.join(', ')}</p>
                  )}
                  {brand.website && (
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-4 text-center text-[#556B2F] font-semibold hover:underline"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              ))}
            </div>
            <Link href="/brands" className="block text-center text-[#F5F5DC] mt-12 font-semibold text-lg hover:underline transition">
              Explore more about brands
            </Link>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="container mx-auto px-6 py-12 bg-[#F5F5DC] w-screen text-[#556B2F]">
          <h2 className="text-3xl font-semibold mb-6 text-center">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.slice(0, 3).map((resource) => (
              <div key={resource.title} className="flex flex-col items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                {resource.featuredImage?.url && (
                  <img
                    src={resource.featuredImage.url}
                    alt={resource.featuredImage.description || resource.title}
                    className="w-full h-40 md:h-48 rounded-lg object-cover"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-700">{resource.description || ""}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/resources" className="block text-center text-[#556B2F] mt-8">
            View more Resources
          </Link>
        </section>

        {/* Events Section */}
        <section id="events" className="bg-[#FFF] py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-6 text-center text-[#556B2F]">Upcoming Events</h2>
            <div className="relative border-l border-gray-300">
              <div className="absolute inset-0 w-1 bg-[#556B2F] left-1/2 transform -translate-x-1/2"></div>
              {events.slice(0, 3).map((event, index) => (
                <div key={event.title} className="mb-8 flex items-start relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#000000] rounded-full border border-white"></div>
                  <div
                    className={`p-6 rounded-lg w-[300px] bg-[#F5F5DC] shadow-lg text-[#556B2F] ${
                      index % 2 === 0 ? "ml-auto text-right" : "mr-auto text-left"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold">{event.title}</h3>
                    <p className="text-[#000000]">{event.description}</p>
                    <p className="text-sm text-[#000000]">
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                    <p className="text-[#000000]">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/events" className="block text-center text-[#556B2F] mt-4 font-semibold">
              See all Events!!
            </Link>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="bg-[#556B2F] text-[#F5F5DC] py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Connect with like-minded individuals, share insights, and stay updated with our latest news and events.
            </p>
            <Link href="/community" className="inline-block px-8 py-3 bg-[#F5F5DC] text-[#556B2F] font-semibold rounded-lg hover:bg-[#F5E6C6] transition">
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
