import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Video, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 mx-5 md:px-0 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Image
              src="image/logo (1).svg"
              alt="MB Logo"
              width={60}
              height={60}
              className="bg-pink-200 rounded-lg"
            />
          </div>

          {/* Follow Us */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Follow us</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </Link>
              <Link href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </Link>
              <Link href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                <Video className="w-5 h-5 mr-2" />
                TikTok
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Contact us</h3>
            <div className="flex flex-col space-y-2">
              <p className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-2" />
                +855 12 836 173
              </p>
              <p className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2" />
                example@gmail.com
              </p>
            </div>
          </div>

          {/* More */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">More</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                About us
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                FAQ
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-3">We accept</h3>
          <div className="flex space-x-4">
            <Image src="/image/guideline.png" alt="Visa" width={40} height={25} className="bg-blue-600 rounded" />
            <Image src="/image/ic_ABA-PAY_3x.png" alt="Mastercard" width={40} height={25} className="bg-red-600 rounded" />
            <Image src="/placeholder.svg" alt="PayPal" width={40} height={25} className="bg-blue-800 rounded" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MB Store. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer