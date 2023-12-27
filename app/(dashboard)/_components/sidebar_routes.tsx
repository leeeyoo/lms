"use client"

import { Compass, Layout } from "lucide-react"
import { SidebarItem } from "./sidebar_item"

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Brouse",
    href: "/search",
  },
]

export const SidebarRoutes = () => {
  const routes = guestRoutes

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}