// schemas/post.js
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'The headline of your post (e.g., How Chess Helps Professionals Think Better) ',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'The unique URL path for this post (e.g., chess-for-professionals)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }, // Link to an author document for E-E-A-T [cite: 5, 11]
    },
    {
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Crucial for SEO and accessibility.',
        },
      ],
    },
    {
      name: 'excerpt',
      title: 'SEO Description / Excerpt',
      type: 'text',
      description: 'A short summary (150-160 characters) for Google search results [cite: 2, 3]',
      validation: (Rule) => Rule.max(160),
    },
    {
      name: 'body',
      title: 'Post Content',
      type: 'array', 
      of: [
        { type: 'block' }, // Standard text (H1, H2, lists) [cite: 7, 12, 17]
        { type: 'image' }  // Images within the post
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
}