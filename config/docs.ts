import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "LeetCode Board",
      href: "/",
    },
    {
      title: "Problems",
      href: "/problems",
    }
  ],
}
