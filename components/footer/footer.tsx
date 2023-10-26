import { NAV_LINK } from '@/type'
import Link from 'next/link'

interface IFooter {
  links: NAV_LINK[]
}

const Footer: React.FC<IFooter> = ({ links }) => {
  return (
    <div>
      <hr />
      <div className="grid justify-center pt-5 gap-8 grid-cols-[repeat(auto-fit,_minmax(auto,_350px))]">
        <div className="flex flex-col gap-5 justify-center">
          <p className="font-bold text-2xl">Logo</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima,
            porro nostrum, molestiae corporis ea, molestias velit quam aliquam
            doloribus tempore voluptatem! Optio laborum labore dicta aperiam,
            velit molestias eligendi.{' '}
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <p className="font-bold text-2xl">Quick Links</p>
          <div className="grid grid-cols-2 gap-5">
            {links.map((link) => (
              <Link href={link.path} key={link.id}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <p className="font-bold text-2xl">Get In Touch</p>
          <div className="flex flex-col">
            <span>Email: saikumarpuppala249@gmail.com</span>
            <span>Phone: +918074149763</span>
          </div>
        </div>
        <div className="flex flex-col  gap-5 items-center">
          <span className="font-bold text-2xl">Location</span>
          Vijayawada,India.
        </div>
      </div>
    </div>
  )
}

export default Footer
