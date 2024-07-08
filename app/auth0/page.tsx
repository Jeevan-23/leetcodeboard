"use client"

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center py-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Welcome to Leetcode Board</h1>
        <p className="text-center text-gray-600 mb-8">
          A one stop solution to saving your notes/ideas for problems.
        </p>
        <div className="flex flex-col items-center space-y-6">
          <div className="w-full">
            <p className="text-center text-gray-700 mb-4">If you are new please register</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-full transition duration-300">
              <RegisterLink>
                Register
              </RegisterLink>
            </button>
          </div>
          <div className="w-full">
            <p className="text-center text-gray-700 mb-4">Login if you are already registered</p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-full transition duration-300">
              <LoginLink>
                Login
              </LoginLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
