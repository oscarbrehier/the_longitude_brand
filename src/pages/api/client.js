import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'votft28a',
    dataset: 'production',
    useCdn: true
});