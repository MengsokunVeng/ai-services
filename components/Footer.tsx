import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const footerLinks = [
    {
      links: [
        { title: 'operating company', url: '/' },
        { title: 'Contact', url: '/' },
      ],
    },
    {
      links: [
        { title: 'Terms of use', url: '/' },
        { title: 'Personal information protextion policy', url: '/' },
      ],
    },
  ]

  return (
    <div className="">
      <footer className=" flex flex-col justify-between mt-5 bg-gray-100">
        <div className="inline-flex max-sm:flex-col flex-wrap justify-around gap-5 sm:px-16 px-6 py-10">
          <div className="">
            <Image
              src="https://appliv-gai-production.s3.ap-northeast-1.amazonaws.com/images/logo.png"
              width={118}
              height={18}
              alt="logo"
            />
          </div>
          {footerLinks.map((item) => (
            <div className="flex text-base">
              <div className="flex flex-col gap-5 ">
                {item.links.map((link) => (
                  <Link key={link.title} href={link.url} className="text-black text-sm">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className=" mx-16 border"></div>
        <div className=" text-gray-500 max-md:flex-col gap-5 sm:px-16 px-6 py-10">
          <h3 className="mb-2 text-sm">Copyright © Nyle Inc.</h3>
          <p className="text-sm">Android is Google Inc. It is a trademark of.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
