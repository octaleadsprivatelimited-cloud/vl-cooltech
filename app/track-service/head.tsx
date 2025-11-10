const title = 'VL CoolTech | Track Your Service Request'
const description =
  'Enter your VL CoolTech tracking ID or registered phone number to monitor technician assignment, arrival window and completion status for appliance repairs across Hyderabad.'

export default function Head() {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}

