import Link from 'next/link'
import Image from 'next/image'
import { Tv, Wind, Monitor, Refrigerator, Microwave, Wrench } from 'lucide-react'

interface ServiceImagesProps {
  serviceType?: string
}

const ServiceImages = ({ serviceType = 'general' }: ServiceImagesProps) => {
  const serviceImages = {
    general: [
      { icon: Tv, label: 'TV Repair', color: 'from-blue-500 to-blue-600', href: '/services/tv-repair', image: '/images/services/tv-repair/tv-repair.jpg' },
      { icon: Wind, label: 'AC Repair', color: 'from-cyan-500 to-cyan-600', href: '/services/ac-repair', image: '/images/services/ac-repair/acrepair.jpg' },
       { icon: Monitor, label: 'Washing Machine', color: 'from-indigo-500 to-indigo-600', href: '/services/washing-machine-repair', image: '/images/services/washing-machine-repair/washing-machine.webp' },
       { icon: Refrigerator, label: 'Refrigerator', color: 'from-green-500 to-green-600', href: '/services/refrigerator-repair', image: '/images/services/refrigerator-repair/refrigerator.webp' },
       { icon: Microwave, label: 'Microwave', color: 'from-orange-500 to-orange-600', href: '/services/microwave-repair', image: '/images/services/microwave-repair/microwave.webp' },
       { icon: Wrench, label: 'Home Appliances', color: 'from-teal-500 to-teal-600', href: '/services/home-appliances', image: '/images/services/home-appliances/home-appliances.jpeg' }
    ],
    tv: [
      { icon: Tv, label: 'LED TV', color: 'from-blue-500 to-blue-600' },
      { icon: Tv, label: 'Smart TV', color: 'from-indigo-500 to-indigo-600' },
      { icon: Tv, label: 'OLED TV', color: 'from-purple-500 to-purple-600' },
      { icon: Tv, label: '4K TV', color: 'from-cyan-500 to-cyan-600' }
    ],
    ac: [
      { icon: Wind, label: 'Split AC', color: 'from-cyan-500 to-cyan-600', image: '/images/services/ac-repair/acrepair.jpg' },
      { icon: Wind, label: 'Window AC', color: 'from-blue-500 to-blue-600', image: '/images/services/ac-repair/acrepair.jpg' },
      { icon: Wind, label: 'Inverter AC', color: 'from-indigo-500 to-indigo-600', image: '/images/services/ac-repair/acrepair.jpg' },
      { icon: Wind, label: 'Central AC', color: 'from-teal-500 to-teal-600', image: '/images/services/ac-repair/acrepair.jpg' }
    ],
    washing: [
      { icon: Monitor, label: 'Front Load', color: 'from-indigo-500 to-indigo-600' },
      { icon: Monitor, label: 'Top Load', color: 'from-blue-500 to-blue-600' },
      { icon: Monitor, label: 'Semi Auto', color: 'from-purple-500 to-purple-600' },
      { icon: Monitor, label: 'Fully Auto', color: 'from-cyan-500 to-cyan-600' }
    ],
    refrigerator: [
      { icon: Refrigerator, label: 'Single Door', color: 'from-green-500 to-green-600' },
      { icon: Refrigerator, label: 'Double Door', color: 'from-emerald-500 to-emerald-600' },
      { icon: Refrigerator, label: 'Side by Side', color: 'from-teal-500 to-teal-600' },
      { icon: Refrigerator, label: 'French Door', color: 'from-cyan-500 to-cyan-600' }
    ],
    microwave: [
      { icon: Microwave, label: 'Solo', color: 'from-orange-500 to-orange-600' },
      { icon: Microwave, label: 'Convection', color: 'from-red-500 to-red-600' },
      { icon: Microwave, label: 'Grill', color: 'from-yellow-500 to-yellow-600' },
      { icon: Microwave, label: 'Smart', color: 'from-amber-500 to-amber-600' }
    ],
  }

  const currentImages = serviceImages[serviceType as keyof typeof serviceImages] || serviceImages.general

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {currentImages.map((service, index) => {
        const Icon = service.icon
        return (
            <Link
              key={index}
              href={'href' in service ? service.href : '#'}
              className="group relative block h-48 sm:h-56 lg:h-64 transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
             {/* Service Content */}
             <div className="relative flex flex-col h-full">
               {/* Full Block Image */}
                {'image' in service && service.image ? (
                 <div className="relative flex-1 mb-3 sm:mb-4 overflow-hidden rounded-xl sm:rounded-2xl">
                   <Image
                     src={service.image}
                     alt={service.label}
                     fill
                     className="object-cover group-hover:scale-110 transition-transform duration-300"
                     sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                   />
                 </div>
               ) : (
                 <div className="flex-1 flex items-center justify-center mb-3 sm:mb-4 bg-gray-100 rounded-xl sm:rounded-2xl">
                   <Icon className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                 </div>
               )}
               
               {/* Service Label */}
               <div className="text-center">
                 <h3 className="text-gray-800 font-semibold text-xs sm:text-sm group-hover:text-gray-600 transition-colors duration-300">
                   {service.label}
                 </h3>
               </div>
             </div>
           </Link>
        )
      })}
    </div>
  )
}

export default ServiceImages
