// schemas/author.js
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'image', title: 'Avatar', type: 'image' },
  ],
}