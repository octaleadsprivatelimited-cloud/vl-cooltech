'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Phone } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  showFloating?: boolean
  showChatBubble?: boolean
  className?: string
}

const WhatsAppButton = ({ 
  phoneNumber = '+919666111327',
  message = 'Hi! I need help with my appliance repair.',
  showFloating = true,
  showChatBubble = true,
  className = ''
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    // Show button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  if (!showFloating) {
    return (
      <button
        onClick={handleWhatsAppClick}
        className={`whatsapp-button ${className}`}
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </button>
    )
  }

  return (
    <>
      {/* Chat Bubble */}
      {showChatBubble && showBubble && (
        <div className="fixed bottom-24 right-6 z-50 animate-fadeInUp">
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-200">
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">Need Help?</h4>
                <p className="text-xs text-gray-600">Chat with us on WhatsApp for instant support!</p>
              </div>
              <button
                onClick={() => setShowBubble(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleWhatsAppClick}
                className="flex-1 bg-green-500 text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-1"
              >
                <MessageCircle className="h-3 w-3" />
                WhatsApp
              </button>
              <button
                onClick={handleCallClick}
                className="flex-1 bg-primary-600 text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-1"
              >
                <Phone className="h-3 w-3" />
                Call
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      {isVisible && (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${className}`}>
          {/* Main WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="whatsapp-button group relative"
            onMouseEnter={() => setShowBubble(true)}
            onMouseLeave={() => setShowBubble(false)}
          >
            <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>

          {/* Quick Call Button */}
          <button
            onClick={handleCallClick}
            className="absolute -top-16 right-0 bg-primary-600 text-white rounded-full p-3 shadow-lg hover:bg-primary-700 transition-all duration-300 hover:scale-110 transform"
            title="Quick Call"
          >
            <Phone className="h-5 w-5" />
          </button>

          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        </div>
      )}
    </>
  )
}

// WhatsApp Link Component for inline use
export const WhatsAppLink = ({ 
  phoneNumber = '+919666111327',
  message = 'Hi! I need help with my appliance repair.',
  children,
  className = ''
}: {
  phoneNumber?: string
  message?: string
  children: React.ReactNode
  className?: string
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 transform ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {children}
    </button>
  )
}

// WhatsApp Contact Card Component
export const WhatsAppContactCard = ({ 
  phoneNumber = '+919666111327',
  message = 'Hi! I need help with my appliance repair.',
  className = ''
}: {
  phoneNumber?: string
  message?: string
  className?: string
}) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-200 ${className}`}>
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          WhatsApp Support
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Get instant help via WhatsApp
        </p>
        <div className="space-y-2">
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </button>
          <button
            onClick={handleCallClick}
            className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhatsAppButton