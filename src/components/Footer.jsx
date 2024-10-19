import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white">
    <div className="max-w-screen-xl mx-auto px-5">
      <div className="text-center mb-4">
        <p className="font-medium text-sm">
          Discover new ways to shop: {' '}
          <span className="underline text-blue-400 hover:text-blue-300 transition duration-300">
            Visit an Apple Store
          </span>{' '}
          or {' '}
          <span className="underline text-blue-400 hover:text-blue-300 transition duration-300">
            find a retailer
          </span>{' '}
          near you.
        </p>
        
      </div>
  
      <div className="border-t border-gray-600 my-5" />
  
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <p className="font-medium text-sm text-center md:text-left">
          © 2024 Apple Inc. All rights reserved.
        </p>
        <div className="flex mt-3 md:mt-0">
          {footerLinks.map((link, i) => (
            <p key={link} className="font-medium text-sm">
              {link}{' '}
              {i !== footerLinks.length - 1 && (
                <span className="mx-2"> | </span>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer