"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ChevronUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bg-gradient-to-b from-blue-950 to-blue-900 pt-16 overflow-hidden mt-[-80px]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/10 blur-xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-red-500/10 blur-xl"></div>
      </div>

      {/* Top wave separator */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-blue-900 translate-y-[-99%]">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo/AR-Logo.png"
                  alt="Access Retail Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <p className="text-blue-100 mb-6">
              We empower your retail performance with extensive reporting capability, and cutting edge insights
              befitting your information needs
            </p>

            {/* <div className="flex space-x-3">
              <SocialLink href="https://www.facebook.com/share/1ETzAUYx3L/?mibextid=wwXIfr" icon={<Facebook size={18} />} />
              <SocialLink href="https://www.linkedin.com/company/accessretailpk/" icon={<Linkedin size={18} />} />
              <SocialLink href="https://www.instagram.com/accessretailpk?igsh=MTNvbGh5cWhpYmhrYQ==" icon={<Instagram size={18} />} />

            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/services/transforming-market-perfomance" label="What We Offer" />
              {/* <FooterLink href="/capabilities" label="Capabilities" /> */}
              <FooterLink href="/why-access/leadership" label="Leadership" />
              <FooterLink href="/why-access/success-story" label="Why Access Retail?" />
              {/* <FooterLink href="/why-access/life-in-access" label="Life @ Access Retail  " />
              <FooterLink href="/why-access/career" label="Careers" /> */}
              {/* <FooterLink href="/blog" label="Blog" /> */}
              <FooterLink href="/contact" label="Contact Us" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-red-400 mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                <span className="text-blue-100">
                3rd & 4th Floor, Royal Complex 34-M, Block M Commercial Area Model Town Extension, Lahore,
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-red-400 mr-3 h-5 w-5 flex-shrink-0" />
                <span className="text-blue-100">(042) 35201852</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-red-400 mr-3 h-5 w-5 flex-shrink-0" />
                <span className="text-blue-100">info@accessretailpk.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Access Retail. All rights reserved.
            </p>

            <div className="flex items-center space-x-4">
              <Link
                href="https://www.gen-tsolutions.com/"
                className="text-blue-200 hover:text-white text-sm transition-colors"
              >
                Powered By <span className="text-white">Gen-T AI Solutions</span>
              </Link>
              {/* <Link href="/privacy-policy" className="text-blue-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-blue-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link> */}
              <button
                onClick={scrollToTop}
                className="bg-blue-800/50 hover:bg-blue-700/50 text-white p-2 rounded-full transition-colors"
                aria-label="Scroll to top"
              >
                <ChevronUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="w-8 h-8 rounded-full bg-blue-900/70 hover:bg-red-600 flex items-center justify-center text-white transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center group"
      >
        <span className="w-0 h-0.5 bg-red-500 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2"></span>
        {label}
      </Link>
    </li>
  )
}
