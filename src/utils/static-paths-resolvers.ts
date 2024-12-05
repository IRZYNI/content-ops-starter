// src/utils/static-paths-resolvers.ts

export function resolveStaticPaths(data: any) {
    // Resolve the paths from the content data to be used in getStaticPaths
    // Example: you might return a list of paths from the data.
    
    const paths = data.map((page: any) => ({
        params: {
            slug: page.url.split('/').filter(Boolean),  // Example: split URL into a slug array
        },
    }));

    return paths;
}
