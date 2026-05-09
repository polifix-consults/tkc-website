fetch('https://p9rc6lzn.api.sanity.io/v2024-05-09/data/query/production?query=' + encodeURIComponent('*[_type == "post"]{title, slug}'))
  .then(r => r.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(console.error);
