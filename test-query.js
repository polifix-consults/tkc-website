const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'p9rc6lzn',
  dataset: 'production',
  apiVersion: '2024-05-09',
  useCdn: false
});

async function test() {
  const slug = 'benefits-of-chess-for-professionals';
  console.log('Querying for slug:', slug);
  try {
    const result = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        mainImage,
        body,
        "authorName": author->name
      }`,
      { slug }
    );
    console.log('Result:', result ? 'Found' : 'Not Found');
  } catch (err) {
    console.error('Error in query:', err.message);
  }
}

test();
