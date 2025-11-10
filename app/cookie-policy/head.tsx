const title = 'VL CoolTech Cookie Policy | Cookie Usage & Preference Management'
const description =
  'Learn how VL CoolTech uses cookies and similar technologies to operate vlcooltech.com and deliver AC, refrigerator, washing machine, LED TV, water purifier and electrical service experiences across Hyderabad West. Understand how to manage your cookie preferences.'
const keywords =
  'VL CoolTech cookie policy, cookies Hyderabad AC service, cookie preferences, analytics cookies, privacy Hyderabad West'

export default function Head() {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}

