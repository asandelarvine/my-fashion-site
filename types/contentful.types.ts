import { Document } from '@contentful/rich-text-types';
import { Asset, EntryFields } from 'contentful';

// General Contentful Entry Interface
export interface ContentfulEntry<T> {
  sys: {
    id: string;
    // Add other sys properties if needed
  };
  fields: T;
}

// About Page Fields
export interface AboutPageFields {
  title: EntryFields.Text;
  heroText: string;
  story: string;
  missionStatement: string;
  visionStatement: string;
  heroImage: Asset;
}

// Define About Page Entry
export type AboutPageEntry = ContentfulEntry<AboutPageFields>;

// Resource Fields
export interface ResourceFields {
  title: string;
  description: string;
  content: string;
  type: string;
  author: string;
  publishDate: string;
  featuredImage?: Asset;
  gallery?: Asset[];
}

// Define Resource Entry
export type ResourcesPageEntry = ContentfulEntry<ResourceFields>;

// Processed Contentful Resource
export interface ContentfulResource {
  title: string;
  description: string;
  content: string;
  type: string;
  author: string;
  publishDate: string;
  featuredImage: {
    url: string;
    description: string;
  };
  gallery: {
    url: string;
    description: string;
  }[];
}

// Brand Fields
export interface BrandFields {
  name: string;
  description: string;
  category: string[];
  website: string;
  logo: Asset;
}

// Define Brand Entry
export type BrandEntry = ContentfulEntry<BrandFields>;

// Processed Contentful Brand
export interface ContentfulBrand {
  name: string;
  description: string;
  category: string[];
  website: string;
  logo: {
    url: string;
    description: string;
  };
}

// Event Fields
export interface EventFields {
  title: string;
  description: string;
  date: string;
  location: string;
  signUpLink: string;
}

// Define Event Entry
export type EventEntry = ContentfulEntry<EventFields>;

// Processed Contentful Event
export interface ContentfulEvent {
  title: string;
  description: string;
  date: string;
  location: string;
  signUpLink: string;
}

// Union Type for Combined Entries
export type CombinedPageEntry = AboutPageEntry | ResourcesPageEntry | BrandEntry | EventEntry;
