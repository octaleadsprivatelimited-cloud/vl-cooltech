const title = 'VL CoolTech Privacy Policy | AC & Appliance Service Data Protection'
const description =
  'Understand how VL CoolTech collects, uses and safeguards personal data for AC repair, installation, foam cleaning, refrigerator, washing machine, LED TV, water purifier and electrical services across Hyderabad West.'
const keywords =
  'VL CoolTech privacy policy, AC service data protection, appliance service privacy Hyderabad, personal information VL CoolTech, visiting charge privacy, Hyderabad West appliance services'

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

