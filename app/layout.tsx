import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ConsentBanner from '@/components/ConsentBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VL CoolTech - AC, Refrigerator & Appliance Service in Ameenpur & Hyderabad',
  description: 'VL CoolTech provides professional air conditioner, refrigerator, washing machine, LED TV, water purifier and electrical services across Ameenpur, Beeramguda, Patancheru, BHEL Township, Miyapur and Greater Hyderabad. Certified technicians, doorstep visits, visiting charge ₹299 and same-day support.',
  keywords: 'VL CoolTech, AC repair Ameenpur, AC service Beeramguda, refrigerator repair Patancheru, washing machine repair Miyapur, inverter AC service Hyderabad, AC installation Ameenpur, AC uninstallation Beeramguda, AC general service Hyderabad, AC foam cleaning, water purifier repair Hyderabad, LED TV repair Ameenpur, QLED TV service Hyderabad, electrical work Sangareddy, doorstep AC service Hyderabad West, visiting charges 299',
  authors: [{ name: 'VL CoolTech' }],
  creator: 'VL CoolTech',
  publisher: 'VL CoolTech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vlcooltech.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VL CoolTech - AC, Refrigerator & Appliance Service in Ameenpur & Hyderabad',
    description: 'VL CoolTech provides professional AC repair, installation, washing machine, refrigerator, LED TV and water purifier services across Ameenpur, Beeramguda, Patancheru, Miyapur and Greater Hyderabad. Same-day doorstep visits with visiting charge ₹299.',
    url: 'https://vlcooltech.com',
    siteName: 'VL CoolTech',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'VL CoolTech Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VL CoolTech - AC, Refrigerator & Appliance Service in Ameenpur & Hyderabad',
    description: 'Doorstep AC, refrigerator, washing machine, LED TV and electrical services by VL CoolTech across Hyderabad West. Professional technicians, quick turnaround and transparent pricing.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17599070965"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Default consent state - will be updated by consent banner
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied',
                'security_storage': 'granted'
              });
              
              gtag('config', 'AW-17599070965', {
                'anonymize_ip': true,
                'cookie_flags': 'SameSite=None;Secure'
              });
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VL CoolTech",
              "alternateName": "VL CoolTech Appliance Services",
              "description": "Expert AC, refrigerator, washing machine, LED TV, water purifier and electrical services in Ameenpur, Beeramguda, Patancheru, Miyapur and Greater Hyderabad. Same-day doorstep visits with visiting charge ₹299.",
              "url": "https://vlcooltech.com",
              "telephone": "+91 9676333505",
              "email": "vlcooltech@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "114 Sri Rajarajeshwari Colony, Ameenpur, Beeramguda",
                "addressLocality": "Sangareddy District",
                "addressRegion": "Telangana",
                "postalCode": "502032",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.5185",
                "longitude": "78.3135"
              },
              "openingHours": "Mo-Su 08:00-20:00",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Ravi Teja"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Quick response for our inverter AC repair in Ameenpur. The VL CoolTech technician fixed the cooling issue and refilled gas within a couple of hours. Very professional and transparent pricing."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sruthi Reddy"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4.8",
                    "bestRating": "5"
                  },
                  "reviewBody": "They serviced our split AC units and cleaned the filters thoroughly. Visiting charge was ₹299 as promised and they explained the maintenance clearly. Highly recommend VL CoolTech for AC service in Beeramguda."
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "17.5185",
                  "longitude": "78.3135"
                },
                "geoRadius": "45000"
              },
              "areaServed": [
                "Ameenpur", "Beeramguda", "Patancheru", "BHEL Township", "Lingampally",
                "Tellapur", "Chandanagar", "Miyapur", "Bollaram", "BHEL MIG", "Kondapur",
                "Hafeezpet", "Serilingampally", "Kukatpally", "Bachupally", "Nizampet",
                "Gachibowli", "HITEC City", "Manikonda", "Madhapur", "JNTU", "Ramachandrapuram",
                "Hyderabad", "Secunderabad", "Sangareddy"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AC & Home Appliance Services by VL CoolTech",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Split & Window AC Repair",
                      "description": "Comprehensive AC repair, gas refilling, inverter AC diagnostics, PCB repair and seasonal service packages."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AC Installation & Uninstallation",
                      "description": "Professional installation, relocation, dismantling and reinstallation for split and window air conditioners."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Washing Machine Repair",
                      "description": "Front-load and top-load washing machine repair, drum replacement, leak fixing and regular servicing."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Refrigerator Service",
                      "description": "Single door, double door, side-by-side and deep freezer repair including cooling issues and compressor service."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "LED & QLED TV Repair",
                      "description": "Display, backlight, motherboard and sound repairs for LED, QLED and Smart TVs."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Water Purifier Service",
                      "description": "RO and UV water purifier maintenance, filter replacement and leak resolution."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Electrical Works",
                      "description": "Residential electrical troubleshooting, wiring, MCB installation and appliance electrical setup."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Annual Maintenance",
                      "description": "Custom AMC plans for apartments, villas and commercial spaces covering AC and appliance maintenance."
                    }
                  }
                ]
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Same Day Service"
                  },
                  "description": "Same-day AC and appliance service across Ameenpur, Beeramguda, Patancheru and nearby areas."
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Home Service"
                  },
                  "description": "Doorstep inspection, service and repair with transparent visiting charge of ₹299."
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Repair"
                  },
                  "description": "Emergency breakdown support for critical AC, refrigerator and electrical issues."
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free Pickup and Delivery"
                  },
                  "description": "Pickup and delivery available for workshop-level repairs based on assessment."
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Warranty Service"
                  },
                  "description": "Service warranty provided on all completed repairs with genuine spares."
                }
              ],
              "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Net Banking"],
              "currenciesAccepted": "INR",
              "image": "https://vlcooltech.com/og-image.jpg",
              "logo": "https://vlcooltech.com/logo.png",
              "sameAs": []
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <ConsentBanner />
        </div>
      </body>
    </html>
  )
}
