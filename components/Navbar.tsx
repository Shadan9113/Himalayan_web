import Link from "next/link"
import  Image  from 'next/image';
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
function Navbar() {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
    <Link href="/">
    <Image src="/himalaya.png" alt="himalya" width={74} height={29}/>
    </Link>
    <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul> 
      <div className="lg:flexCenter hidden ">
        <Button
        type="button"
        title="login"
        icon="user.svg"
        variant="btn_dark_green"
         />
      </div>
      <Image 
        src="menu.svg"
        alt="menu"
        height={32}
        width={32}
        className="cursor-pointer lg:hidden inline-block"
      />
    </nav>
  )
}

export default Navbar