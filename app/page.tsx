"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"


export default function Home() {

  const pathname = usePathname();
  return (
    <div className="container mx-auto p-6 space-y-16 bg-gray-50 dark:bg-gray-900 transition duration-300">
      {/* Main Section */}
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-xl rounded-lg p-8 transition duration-300">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">LeetCode Board</h1>
            <p className="text-lg mb-6">
              A note-taking website where you can store notes online for free,
              specifically for problems in Leetcode.
            </p>
          </div>
          <div className="flex justify-center md:w-1/2 order-2 md:order-1">
            <img
              src="/images/Logo.jpg"
              alt="Logo"
              className="rounded-full shadow-lg w-48 h-48 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="flex justify-center">
        <Button>
          <Link
            href="/problems"
            className={cn(pathname?.startsWith("/problems"))}
          >
            Get Started
          </Link>
        </Button>
      </div>

      {/* About Creator Section */}
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-xl rounded-lg p-8 transition duration-300">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex justify-center md:w-1/2 order-2 md:order-1">
            <img
              src="/images/me.jpg"
              alt="Creator"
              className="rounded-full shadow-lg w-48 h-48 object-cover"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6">About the Creator</h2>
            <p className="text-lg">
              Hi iam unstb4l, a passionate developer who loves solving problems
              and sharing knowledge. Feel free to connect on{" "}
              <a
                href="https://twitter.com/unstb4l"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                twitter
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Special Thanks Section */}
      <div className="text-center text-lg text-gray-700 dark:text-gray-300">
        Special thanks to{" "}
        <a
          href="https://twitter.com/adaptatron"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Adaptatron
        </a>
      </div>
    </div>
  )
}
