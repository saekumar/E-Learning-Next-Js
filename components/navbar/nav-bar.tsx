import { NAV_BAR_ITEMS } from '@/constants'
import NavBarLinks from './nav-bar-links'
import AuthNavButtons from './auth-nav-button'
import NavBarRight from './nav-bar-right'
import ResponsiveNavSidebar from './res-sidebar-nav'

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-20">
        <div>Logo</div>
        <div className="cursor-pointer">
          <NavBarLinks links={NAV_BAR_ITEMS} className={''} />
        </div>
        <div className="hidden md:flex">
          <NavBarRight />
        </div>
        <div className="flex md:hidden ">
          <ResponsiveNavSidebar />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar
