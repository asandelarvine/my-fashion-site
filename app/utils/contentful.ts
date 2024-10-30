import { ContentfulEntry } from "@/types/contentful.types";

// Make sure to set these environment variables in your environment
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID || '';
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || '';

/**
 * Retrieves Contentful entries of a specified content type.
 * @param contentType - The content type to query for.
 * @param query - Optional query parameters to filter the entries.
 * @returns A promise that resolves to an array of Contentful entries of the specified type.
 */
export async function getContentfulEntries<T>(
  contentType: string,
  query: Record<string, string> = {}
): Promise<ContentfulEntry<T>[]> {
  // Construct the URL for the Contentful API
  const url = new URL(`https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries`);
  url.searchParams.append('access_token', CONTENTFUL_ACCESS_TOKEN);
  url.searchParams.append('content_type', contentType);
  console.log("Content Type:", contentType);
  console.log("url:", url);

  // Append any additional query parameters to the URL
  for (const [key, value] of Object.entries(query)) {
    url.searchParams.append(key, value);
  }

  try {
    // Fetch data from the Contentful API
    const response = await fetch(url.toString());

    // Log the response for debugging purposes
    console.log('Response status:', response.status, response.statusText);

    // Check if the response status is not OK
    if (!response.ok) {
      // Read the error message from the response body
      const errorBody = await response.text();
      // Throw a detailed error
      throw new Error(`Failed to fetch Contentful entries: ${response.status} ${response.statusText}. Response: ${errorBody}`);
    }

    // Parse the response JSON data
    const data = await response.json();

    // Return the items as an array of Contentful entries
    return data.items as ContentfulEntry<T>[];
  } catch (error) {
    // Log the error and rethrow it for further handling
    console.error("Error fetching Contentful entries:", error);
    throw error;
  }
}