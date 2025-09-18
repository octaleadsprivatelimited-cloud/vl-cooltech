'use client'

import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in your electronics and appliance repair services. Could you please provide more information?"
    )
    const phoneNumber = "919666111327"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-button"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </button>
  )
}

export default WhatsAppButton
