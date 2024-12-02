import React from 'react';
import { allContent } from '../utils/local-content';  // Ensure the file exists as local-content.ts
import { getComponent } from '../components/components-registry';  // Ensure components-registry.ts exists
import { resolveStaticProps } from '../utils/static-props-resolvers';  // Ensure static-props-resolvers.ts exists
import { resolveStaticPaths } from '../utils/static-paths-resolvers';  // Ensure static-paths-resolvers.ts exists

function Page(props) {
    const { page, site } = props;
    const { modelName } = page.__metadata;
    
    // Check if modelName exists
    if (!modelName) {
        throw new Error(`Page has no type, page '${props.path}'`);
    }

    // Get the component matching modelName
    const PageLayout = getComponent(modelName);

    // Ensure the layout exists for the modelName
    if (!PageLayout) {
        throw new Error(`No page layout matching the page model: ${modelName}`);
    }

    return <PageLayout page={page} site={site} />;
}

// Define getStaticPaths to fetch and resolve paths
export function getStaticPaths() {
    const data = allContent();  // Fetch all content
    const paths = resolveStaticPaths(data);  // Resolve static paths from the content data
    return { paths, fallback: false };  // Return the paths and set fallback to false
}

// Define getStaticProps to fetch the page props based on the URL path
export async function getStaticProps({ params }) {
    const data = allContent();  // Fetch all content
    const urlPath = '/' + (params.slug || []).join('/');  // Join slug segments into a URL path
    const props = await resolveStaticProps(urlPath, data);  // Resolve static props based on the URL path and data
    return { props };  // Return the props
}

export default Page;  // Export the Page component
