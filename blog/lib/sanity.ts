import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    apiVersion: '2024-10-17',
    dataset: 'production',
    projectId: 'hzzmpk6t',
    useCdn: false,
});
const builder = ImageUrlBuilder(client)

export function urlFor (source: any) {
    return builder.image(source);
}