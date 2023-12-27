import { NavbarRoutes } from "@/components/navbar_routes"

import { MobileSidebar } from "./mobile_sidebar"

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}