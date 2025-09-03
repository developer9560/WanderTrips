import React from 'react'
import { FaPhone } from 'react-icons/fa'

export default function AnimatedCallButton() {
  return (
    <div className='animated-button-container animated-button-container::after '>
        <button className='flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-3 text-primary hover:text-secondary transition-colors z-10 text-sm lg:text-base'><FaPhone />+91 1234567890</button>
    </div>
  )
}
