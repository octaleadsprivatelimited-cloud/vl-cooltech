import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ApplianceCares.in - Professional Electronics & Appliance Repair Services',
  description: 'Expert electronics and appliance repair services in Hyderabad. We repair TVs, ACs, washing machines, refrigerators, and more. Trusted by thousands of customers.',
  keywords: 'electronics repair, appliance repair, TV repair, AC repair, washing machine repair, refrigerator repair, Hyderabad, Pragathi Nagar, home appliances, electronic services',
  authors: [{ name: 'ApplianceCares.in' }],
  creator: 'ApplianceCares.in',
  publisher: 'ApplianceCares.in',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://appliancecares.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ApplianceCares.in - Professional Electronics & Appliance Repair Services',
    description: 'Expert electronics and appliance repair services in Hyderabad. We repair TVs, ACs, washing machines, refrigerators, and more.',
    url: 'https://appliancecares.in',
    siteName: 'ApplianceCares.in',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ApplianceCares.in - Electronics & Appliance Repair Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApplianceCares.in - Professional Electronics & Appliance Repair Services',
    description: 'Expert electronics and appliance repair services in Hyderabad. We repair TVs, ACs, washing machines, refrigerators, and more.',
    images: ['/og-image.jpg'],
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ApplianceCares.in",
              "description": "Professional electronics and appliance repair services in Hyderabad",
              "url": "https://appliancecares.in",
              "telephone": "+91 96661 11327",
              "email": "info@appliancecares.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pragathi Nagar",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.3850",
                "longitude": "78.4867"
              },
              "openingHours": "Mo-Su 08:00-20:00",
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "17.3850",
                  "longitude": "78.4867"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Electronics and Appliance Repair Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "TV Repair"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AC Repair"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Washing Machine Repair"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Refrigerator Repair"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
