import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ApplianceCares.in - Professional Electronics & Appliance Repair Services in Hyderabad',
  description: 'Expert electronics and appliance repair services in Hyderabad. We repair TVs, ACs, washing machines, refrigerators, laptops, mobiles, and all home appliances. Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad. Trusted by 5000+ customers.',
  keywords: 'electronics repair Hyderabad, appliance repair Hyderabad, TV repair Hyderabad, AC repair Hyderabad, washing machine repair Hyderabad, refrigerator repair Hyderabad, laptop repair Hyderabad, mobile repair Hyderabad, home appliances repair Hyderabad, HITEC City repair, Gachibowli repair, Kondapur repair, Madhapur repair, Jubilee Hills repair, Banjara Hills repair, Pragathi Nagar repair, same day service Hyderabad, doorstep repair service Hyderabad, emergency repair Hyderabad, Samsung repair Hyderabad, LG repair Hyderabad, Whirlpool repair Hyderabad, Dell laptop repair Hyderabad, iPhone repair Hyderabad, OnePlus repair Hyderabad, Xiaomi repair Hyderabad, TV repair near me, AC repair near me, washing machine repair near me, refrigerator repair near me, laptop repair near me, mobile repair near me, home service Hyderabad, pickup delivery repair Hyderabad, certified technician Hyderabad, genuine parts repair Hyderabad, warranty repair service Hyderabad',
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
    title: 'ApplianceCares.in - Professional Electronics & Appliance Repair Services in Hyderabad',
    description: 'Expert electronics and appliance repair services in Hyderabad. We repair TVs, ACs, washing machines, refrigerators, laptops, mobiles, and all home appliances. Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad. Trusted by 5000+ customers.',
    url: 'https://appliancecares.in',
    siteName: 'ApplianceCares.in',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'ApplianceCares.in Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApplianceCares.in - Professional Electronics & Appliance Repair Services in Hyderabad',
    description: 'Expert electronics and appliance repair services in Hyderabad. We repair TVs, ACs, washing machines, refrigerators, laptops, mobiles, and all home appliances. Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad. Trusted by 5000+ customers.',
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
              gtag('config', 'AW-17599070965');
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
              "name": "ApplianceCares.in",
              "alternateName": "Appliance Cares Hyderabad",
              "description": "Professional electronics and appliance repair services in Hyderabad. We repair TVs, ACs, washing machines, refrigerators, laptops, mobiles, and all home appliances. Same-day service available in HITEC City, Gachibowli, Kondapur, Madhapur, Jubilee Hills, Banjara Hills, Pragathi Nagar, and all areas of Hyderabad.",
              "url": "https://appliancecares.in",
              "telephone": "+91 7780225280",
              "email": "info@appliancecares.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pragathi Nagar",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500016",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.3850",
                "longitude": "78.4867"
              },
              "openingHours": "Mo-Su 08:00-20:00",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Rajesh Kumar"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4.9",
                    "bestRating": "5"
                  },
                  "reviewBody": "Excellent TV repair service! My Samsung LED TV was repaired within 2 hours. The technician was professional and explained everything clearly. Highly recommended for electronics repair in Hyderabad!"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Priya Sharma"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4.9",
                    "bestRating": "5"
                  },
                  "reviewBody": "Great washing machine repair service in Gachibowli. My LG washing machine was making strange noises and they fixed it perfectly. Same day service with genuine parts!"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "17.3850",
                  "longitude": "78.4867"
                },
                "geoRadius": "50000"
              },
              "areaServed": [
                "Hyderabad", "Secunderabad", "Cyberabad", "HITEC City", "Gachibowli", 
                "Kondapur", "Madhapur", "Jubilee Hills", "Banjara Hills", "Pragathi Nagar",
                "Kukatpally", "Miyapur", "Serilingampally", "Chandanagar", "Alwal",
                "Malkajgiri", "Lal Bahadur Nagar", "Dilsukhnagar", "Uppal", "Nagole",
                "LB Nagar", "Vanastalipuram", "Hayathnagar", "Ramachandrapuram",
                "Patancheru", "Sangareddy", "Bolarum", "Bowenpally", "Tarnaka",
                "Neredmet", "Ameerpet", "Somajiguda", "Begumpet", "Punjagutta",
                "Khairatabad", "Masab Tank", "Nampally", "Abids", "Koti",
                "Sultan Bazar", "Charminar", "Malakpet", "Kothapet", "Saroornagar",
                "Boduppal", "Moinabad", "Shadnagar", "Shamshabad", "Rajendra Nagar",
                "Balanagar", "Jeedimetla", "Qutbullapur", "Bachupally", "Nizampet",
                "Manikonda", "Tellapur", "Gopanpally", "Kokapet", "Nanakramguda",
                "Raidurg", "Khajaguda", "Neknampur", "Kapra", "Uppal Kalan",
                "Peerzadiguda", "Ghatkesar", "Medchal", "Shamirpet", "Sainikpuri",
                "Vikarabad", "Lakdikapul", "Falaknuma", "Santoshnagar", "Chandrayangutta",
                "Rangareddy", "Ibrahimpatnam", "Maheshwaram", "Mahabubnagar", "Medak"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Electronics and Appliance Repair Services in Hyderabad",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "TV Repair",
                      "description": "Professional TV repair services for all brands including LED, LCD, OLED, and Smart TVs in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AC Repair",
                      "description": "Complete AC repair and maintenance services for all types of air conditioners in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Washing Machine Repair",
                      "description": "Expert washing machine repair for all brands and models in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Refrigerator Repair",
                      "description": "Comprehensive refrigerator repair services for all types of fridges in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Microwave Repair",
                      "description": "Professional microwave oven repair and maintenance services in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Laptop Repair",
                      "description": "Expert laptop repair services for all major brands and models in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile Repair",
                      "description": "Professional mobile phone repair services for all smartphone brands in Hyderabad"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Home Appliances Repair",
                      "description": "Repair services for all home appliances and electronic devices in Hyderabad"
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
                  "description": "Same day repair service available for all electronics and appliances in Hyderabad"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Home Service"
                  },
                  "description": "Doorstep repair service at your home or office in Hyderabad"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Repair"
                  },
                  "description": "24/7 emergency repair service for urgent appliance issues in Hyderabad"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Free Pickup and Delivery"
                  },
                  "description": "Free pickup and delivery service for appliance repair in Hyderabad"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Warranty Service"
                  },
                  "description": "Comprehensive warranty on all repairs with genuine parts in Hyderabad"
                }
              ],
              "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Net Banking"],
              "currenciesAccepted": "INR",
              "image": "https://appliancecares.in/og-image.jpg",
              "logo": "https://appliancecares.in/logo.png",
              "sameAs": [
                "https://www.facebook.com/appliancecares",
                "https://www.instagram.com/appliancecares",
                "https://www.twitter.com/appliancecares",
                "https://www.youtube.com/appliancecares"
              ]
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
        </div>
      </body>
    </html>
  )
}
