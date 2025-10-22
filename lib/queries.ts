export const latestArticles = `*[_type == "article"] | order(publishedAt desc)[0...12]{
  title, "slug": slug.current, excerpt,
  "coverImage": coverImage.asset->url, section, publishedAt
}`

export const listBySection = (section: string) => `
*[_type == "article" && section == "${section}"] | order(publishedAt desc){
  title, "slug": slug.current, excerpt,
  "coverImage": coverImage.asset->url, section, publishedAt
}`

export const getArticle = `
*[_type == "article" && slug.current == $slug][0]{
  title, "slug": slug.current, excerpt,
  "coverImage": coverImage.asset->url, section, publishedAt, 
  "authorName": author->name,
  body
}
`
