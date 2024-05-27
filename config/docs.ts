import { MainNavItem, SidebarNavItem } from "@/types/nav"
import { SiteConfig } from "./site"
interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Problems",
      href: "/problems",
    },
  ],
  sidebarNav: [
    {
      title: "Contact me",
      items: [
        {
          title: "Twitter / X",
          href: "https://twitter.com/unstb4l",
          items: [],
        },
        {
          title: "Linkedin",
          href: "https://www.linkedin.com/in/jeevan-m-9844342b7/",
          items: [],
        },
        {
          title: "Discord",
          href: "https://discord.com/users/1014794382970474506",
          items: [],
        },
        
      ],
    },
  ],
}
