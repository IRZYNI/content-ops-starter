// src/utils/static-props-resolvers.ts

export async function resolveStaticProps(urlPath: string, data: any) {
    // Resolve the static props for a page based on the URL path
    // Example: you might filter the content data by the urlPath to get the specific page data.
    
    const pageData = data.find((page: any) => page.url === urlPath);
    
    if (!pageData) {
        throw new Error(`No content found for path: ${urlPath}`);
    }

    // Return the resolved props for the page
    return {
        page: pageData,
        site: { name: "My Site", url: "https://example.com" },  // Example site data
    };
}
