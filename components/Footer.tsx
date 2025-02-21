import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface FooterLink {
  title: string
  href: string
}

const links1: FooterLink[] = [
  { title: "FAQs", href: "/faqs" },
  { title: "Calender", href: "/calendar" },
  { title: "Notice Board", href: "/notices" },
  { title: "Fee Structure", href: "/fees" },
  { title: "E-Prospectus", href: "/prospectus" },
  { title: "Admissions", href: "/admissions" }
]

const links2: FooterLink[] = [
  { title: "FAQs", href: "/faqs" },
  { title: "Calender", href: "/calendar" },
  { title: "Notice Board", href: "/notices" },
  { title: "Fee Structure", href: "/fees" },
  { title: "E-Prospectus", href: "/prospectus" },
  { title: "Admissions", href: "/admissions" }
]

const Footer = () => {
  return (
    <footer className='w-full bg-[#1D3557] text-white'>
      <div className='max-w-7xl mx-auto px-4 md:px-0 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {/* School Info */}
          <div className='space-y-6'>
            <Image
              src="/assets/logo/stlogo.png"
              alt="St. Vivekanand School"
              width={200}
              height={80}
              className='object-contain'
            />
            <div className='space-y-4'>
              <p className='text-gray-300'>
                Statue Circle, JNV Main Rd, Sector 3<br />
                Jai Narayan Vyas Colony, Bikaner<br />
                Rajasthan - 334001 IN
              </p>
              <div className='space-y-2'>
                <p>Phone: <a href="tel:+919571665859" className='hover:text-[#E63946]'>+91 9571665859</a></p>
                <p>Email: <a href="mailto:contact@school.com" className='hover:text-[#E63946]'>contact@school.com</a></p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className='lg:col-span-2 h-[300px] md:h-full min-h-[300px] relative rounded overflow-hidden'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56359.52278168276!2d73.27289374863284!3d28.010101999999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fe7cbaba58535%3A0x794a41abc1764543!2sSaint%20Vivekanand%20School%2C%20Bikaner!5e0!3m2!1sen!2sin!4v1740122546201!5m2!1sen!2sin"
            //   width="60%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='absolute inset-0 w-full md:w-[60%]'
            />
          </div>

          {/* Quick Links */}
          <div className='grid grid-cols-2 gap-8'>
            {/* Links Column 1 */}
            <div>
              <h3 className='text-xl font-bold mb-4'>Links</h3>
              <ul className='space-y-2'>
                {links1.map((link) => (
                  <li key={link.title}>
                    <Link 
                      href={link.href}
                      className='text-gray-300 hover:text-white transition-colors duration-200'
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h3 className='text-xl font-bold mb-4'>Links</h3>
              <ul className='space-y-2'>
                {links2.map((link) => (
                  <li key={link.title}>
                    <Link 
                      href={link.href}
                      className='text-gray-300 hover:text-white transition-colors duration-200'
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-16 pt-8 border-t border-gray-700'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm'>
              © St. Vivekanand School, 2025. All rights reserved.
            </p>
            <div className='flex items-center gap-4 text-sm text-gray-400'>
              <Link href="/terms" className='hover:text-white'>Terms of Use</Link>
              <span>|</span>
              <Link href="/privacy" className='hover:text-white'>Privacy Policy</Link>
              <span>|</span>
              <Link href="/disclaimer" className='hover:text-white'>Disclaimer</Link>
            </div>
            <div className='text-sm text-gray-400'>
              Design & Developed by <a href="#" className='text-white hover:text-[#E63946]'>Alterera</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer