import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Alyonus</h3>
                <p className="text-slate-300 text-sm">Medical & Lab Equipment</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Your trusted partner for high-quality medical and laboratory equipment in Dubai and across the UAE.
              Excellence in service, quality in products.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="text-sky-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">Aldar Building, 120 1st Floor</p>
                  <p className="text-slate-300 text-sm">Markbat Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-sky-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">043468297</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-sky-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">055 979 6601</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-sky-400 mr-3 flex-shrink-0" />
                <span className="text-slate-300 text-sm">zehabpoperty55@gmail.com</span>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="text-sky-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">Sun - Thu: 9:00 AM - 6:00 PM</p>
                  <p className="text-slate-300 text-sm">Fri - Sat: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 Alyonus For Medical & Laboratory Equipment. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
