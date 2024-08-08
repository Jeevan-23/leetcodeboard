"use client";

import { MainNav } from "@/components/main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "./ui/button";
import { useState } from "react";

export function SiteHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="sticky top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center">
          <MainNav />
          <MobileNav />
        </div>
        <div className="flex items-center">
          {/* {isLoggedIn ? (
            <Button className="mr-2" onClick={handleLogout}>Logout</Button>
          ) : (
            <Button className="mr-2" onClick={handleLogin}>Login</Button>
          )} */}
          <nav className="flex items-center">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
