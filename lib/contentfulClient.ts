
import { createClient } from 'contentful';
import { ContentfulResource, AboutPageEntry, ContentfulBrand, ContentfulEvent, CommunityFields, ProcessedCommunityPage} from '@/types/contentful.types';


export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

// Type guard for Contentful Asset
function isAsset(obj: any): obj is { fields: { file: { url: string }, description: string } } {
  return obj && typeof obj === 'object' && 'fields' in obj && 'file' in obj.fields;
}

// Fetch About Page data
export const fetchAboutUs = async (): Promise<AboutPageEntry | null> => {
  try {
    const response = await contentfulClient.getEntries<AboutPageEntry>({
      content_type: 'aboutUs', //  content type ID
      limit: 1,
    });

    console.log(`aboutUsdata: ${JSON.stringify(response.items)}`);

    // If an About Page entry is found, return it
    const aboutUs: AboutPageEntry | undefined = response.items[0] as AboutPageEntry;

    // Ensure heroText, story, missionStatement, visionStatement, and heroImage are all handled
    if (aboutUs && aboutUs.fields) {
      return {
        ...aboutUs, 
        fields: {
          ...aboutUs.fields,
          heroText: aboutUs.fields.heroText,
          story: aboutUs.fields.story,
          missionStatement: aboutUs.fields.missionStatement,
          visionStatement: aboutUs.fields.visionStatement,
          heroImage: aboutUs.fields.heroImage,
        },
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching About Us data:', error);
    return null;
  }
};


// Fetch Resources
export const fetchResources = async (): Promise<ContentfulResource[]> => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'resources',
    });

    return response.items.map((item) => {
      const fields = item.fields;

      const publishDate = typeof fields.publishDate === 'string' ? fields.publishDate : fields.publishDate?.toString() || '';
      const featuredImage = isAsset(fields.featuredImage)
        ? {
            url: fields.featuredImage.fields.file.url,
            description: fields.featuredImage.fields.description || '',
          }
        : { url: '', description: '' };
      const gallery = Array.isArray(fields.gallery)
        ? fields.gallery.map((image) => isAsset(image) ? {
            url: image.fields.file.url,
            description: image.fields.description || '',
          } : { url: '', description: '' })
        : [];

      return {
        title: typeof fields.title === 'string' ? fields.title : '',
        description: typeof fields.description === 'string' ? fields.description : '',
        content: typeof fields.content === 'string',  
        type: typeof fields.type === 'string' ? fields.type : '',
        author: typeof fields.author === 'string' ? fields.author : '',
        publishDate,
        featuredImage,
        gallery,
      };
    });
  } catch (error) {
    console.error('Error fetching resources from Contentful:', error);
    return [];
  }
};

// Fetch Brands
export const fetchBrands = async (): Promise<ContentfulBrand[]> => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'brand',
    });

    return response.items.map((item) => {
      const fields = item.fields;
      const logo = isAsset(fields.logo)
        ? {
            url: fields.logo.fields.file.url,
            description: fields.logo.fields.description || '',
          }
        : { url: '', description: '' };

      return {
        name: typeof fields.name === 'string' ? fields.name : '',
        description: typeof fields.description === 'string' ? fields.description : '',
        category: Array.isArray(fields.category) ? fields.category.filter((cat): cat is string => typeof cat === 'string') : [],  // Ensure category is string[]
        website: typeof fields.website === 'string' ? fields.website : '',
        logo,
      };
    });
  } catch (error) {
    console.error('Error fetching brands from Contentful:', error);
    return [];
  }
};

// Fetch Events
export const fetchEvents = async (): Promise<ContentfulEvent[]> => {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'event',
    });

    return response.items.map((item) => {
      const fields = item.fields;

      return {
        title: typeof fields.title === 'string' ? fields.title : '',
        description: typeof fields.description === 'string' ? fields.description : '',
        date: typeof fields.date === 'string' ? fields.date : fields.date?.toString() || '',
        location: typeof fields.location === 'string' ? fields.location : '',
        signUpLink: typeof fields.signUpLink === 'string' ? fields.signUpLink : '',
      };
    });
  } catch (error) {
    console.error('Error fetching events from Contentful:', error);
    return [];
  }
};

//community

export const fetchCommunityPage = async (): Promise<ProcessedCommunityPage | null> => {
  try {
    const response = await contentfulClient.getEntries<CommunityFields>({
      content_type: 'community',
      limit: 1,
    });

    if (response.items.length === 0) return null;

    const data = response.items[0].fields;

    return {
      title: data.title || '',
      heroImage: {
        url: data.heroImage?.fields?.file?.url || '',
      },
      heroText: data.heroText || '',
      upcomingEvents: Array.isArray(data.upcomingEvents)
        ? data.upcomingEvents.map((event: { fields: { title: any; description: any; date: any; }; }) => ({
            title: event.fields?.title || '',
            description: event.fields?.description || '',
            date: event.fields?.date || '',
          }))
        : [],
      members: {
        memberImage: {
          url: data.memberImage?.fields?.file?.url || '',
        },
        memberName: data.memberName || '',
        memberRole: data.memberRole || '',
        memberBio: data.memberBio || '',
      },
      guidesForMembers: Array.isArray(data.guidesForMembers)
        ? data.guidesForMembers.map((guide: { fields: { title: any; description: any; content: any; featuredImage: { fields: { file: { url: any; }; description: any; }; }; gallery: any[]; }; }) => ({
            title: guide.fields?.title || '',
            description: guide.fields?.description || '',
            content: guide.fields?.content || '',
            featuredImage: {
              url: guide.fields?.featuredImage?.fields?.file?.url || '',
              description: guide.fields?.featuredImage?.fields?.description || '',
            },
            gallery: Array.isArray(guide.fields?.gallery)
              ? guide.fields?.gallery.map(image => ({
                  url: image.fields?.file?.url || '',
                  description: image.fields?.description || '',
                }))
              : [],
          }))
        : [],
    };
  } catch (error) {
    console.error('Error fetching community page data:', error);
    return null;
  }
};
