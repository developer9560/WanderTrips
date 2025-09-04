"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import AnimatedCallButton from "../components/ui/AnimatedCallButton";
import { useState, useEffect } from "react";

const navItems = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/upcoming-trips",
        label: "Upcoming Trips",
    },
    {
        href: "/about",
        label: "About Us",
    },
    {
        href: "/contact",
        label: "Contact Us",
    },
];

const navLinks = [
  {
    title: "International Trips",
    dropdown: [
      { title: "Europe", href: "/trips/europe" },
      { title: "Bali", href: "/trips/bali" },
      { title: "Thailand", href: "/trips/thailand" },
      { title: "Spain", href: "/trips/spain" },
      { title: "Singapore", href: "/trips/singapore" },
      { title: "Dubai", href: "/trips/dubai" },
      { title: "Philippines", href: "/trips/philippines" },
      { title: "Georgia", href: "/trips/georgia" },
      { title: "Kazakhstan", href: "/trips/kazakhstan" },
      { title: "Japan", href: "/trips/japan" },
      { title: "Malaysia", href: "/trips/malaysia" },
      { title: "Bhutan", href: "/trips/bhutan" },
      { title: "South Africa", href: "/trips/south-africa" },
      { title: "Mauritius", href: "/trips/mauritius" },
      { title: "Vietnam", href: "/trips/vietnam" },
      { title: "Sri Lanka", href: "/trips/sri-lanka" },
      { title: "Kenya", href: "/trips/kenya" },
      { title: "Switzerland", href: "/trips/switzerland" },
      { title: "Australia", href: "/trips/australia" },
      { title: "France", href: "/trips/france" },
      { title: "Maldives", href: "/trips/maldives" },
      { title: "New Zealand", href: "/trips/new-zealand" },
    ],
  },
  { title: "Domestic Trips",
    dropdown: [
      { title: "Ladakh", href: "/trips/ladakh" },
      { title: "Rajasthan", href: "/trips/rajasthan" },
      { title: "Spiti", href: "/trips/spiti" },
      { title: "Arunachal Pradesh", href: "/trips/arunachal-pradesh" },
      { title: "Uttrackhand", href: "/trips/uttrackhand" },
      { title: "Andaman", href: "/trips/andaman" },
      { title: "Meghalaya", href: "/trips/meghalaya" },
      { title: "Sikkim", href: "/trips/sikkim" },
      { title: "Kerala", href: "/trips/kerala" },
      { title: "Himachal Pradesh", href: "/trips/himachal-pradesh" },
      { title: "Leh Ladakh", href: "/trips/leh-ladakh" },
      { title: "Kashmir", href: "/trips/kashmir" },
      { title: "Spiti Valley Bike Trips", href: "/trips/spiti-valley-bike-trips" },
    ],
   },
  { title: "Group Tours", href: "/group-tours" },
  { title: "Honeymoon Packages", href: "/honeymoon-packages" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSidebarOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white backdrop-blur supports-[backdrop-filter]:bg-white">
      {/* Top bar */}
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-lg lg:text-xl" aria-label="WanderTrips home">
          <span className="text-primary">Wander</span><span className="text-secondary">Trips</span>
        </Link>
        
        {/* Desktop Search */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-border px-2 py-1 focus-within:border-primary lg:gap-3">
            <FaSearch className="text-secondary mr-0" />
          <input type="text" placeholder="Search" className="rounded-full px-2 py-1 border-none focus-outline-none mr-0 placeholder:text-gray-400 text-gray-600 w-24 lg:w-auto text-sm lg:text-base"  />
        </div>

        {/* Desktop Top Nav */}
        <nav className="hidden md:flex gap-3 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors",
                pathname === item.href && "text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
            <div className="hidden sm:block">
                <AnimatedCallButton />
            </div>
            {/* Mobile Menu Toggle */}
            <button 
                className="md:hidden p-2"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-label="Toggle menu"
            >
                {isSidebarOpen ? <FaTimes className="h-6 w-6 text-primary" /> : <FaBars className="h-6 w-6 text-primary" />}
            </button>
        </div>
      </div>

      {/* Desktop Main navigation with dropdowns */}
      <div className="hidden md:flex h-16 w-full bg-primary">
        <div className="container h-full">
          <ul className="flex h-full items-center justify-center gap-4 lg:gap-8 text-white">
            {navLinks.map((link) => (
              <li key={link.title} className="group relative h-full flex items-center hover:text-secondary transition-colors ">
                <a href={link.href || "#"} className="flex items-center gap-1 text-sm font-medium">
                  {link.title}
                  {link.dropdown && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 transition-transform group-hover:rotate-180">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-max max-w-4xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4">
                    <div className="bg-white text-black rounded-md shadow-lg p-6">
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4">
                        {link.dropdown.map((item) => (
                          <Link key={item.title} href={item.href} className="block text-sm hover:text-primary">
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-80 bg-gray-50 shadow-2xl z-[100] transform transition-transform duration-500 ease-in-out md:hidden",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-[calc(100vh)] flex-col bg-white">
          <div className="p-5 flex justify-between items-center border-b border-gray-200">
            <Link href="/" className="font-bold text-xl" onClick={() => setIsSidebarOpen(false)}>
              <span className="text-primary">Wander</span>
              <span className="text-secondary">Trips</span>
            </Link>
            <button onClick={() => setIsSidebarOpen(false)} aria-label="Close menu" className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <FaTimes className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          <nav className="flex-grow overflow-y-auto p-5 space-y-2">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                style={{ animationDelay: `${i * 50}ms` }}
                className={cn(
                  "block rounded-lg px-4 py-2 text-base font-semibold text-gray-700 hover:bg-primary/10 hover:text-primary transition-all duration-200 m-0",
                  pathname === item.href ? "bg-primary/10 text-primary" : "",
                  isSidebarOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <hr className="border-gray-200" />
            </div>
            {navLinks.map((link, i) => (
              <div key={link.title} className="py-0" style={{ animationDelay: `${(i + navItems.length) * 50}ms` }}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.title ? null : link.title)}
                      className="w-full flex justify-between items-center rounded-lg px-4 py-3 text-base font-semibold text-gray-800 hover:bg-gray-200/60 transition-colors duration-200"
                    >
                      <span>{link.title}</span>
                      <FiChevronDown className={cn("h-5 w-5 transition-transform", openDropdown === link.title && "rotate-180")} />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        openDropdown === link.title ? "max-h-[1000px]" : "max-h-0"
                      )}
                    >
                      <div className="pt-2 pl-4 space-y-1 border-l-2 border-primary/50 ml-4 mt-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsSidebarOpen(false)}
                            className="block text-gray-600 hover:text-primary py-2 transition-colors text-sm font-medium"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href || "#"}
                    onClick={() => setIsSidebarOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-semibold text-gray-800 hover:bg-gray-200/60 transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="p-5 border-t border-gray-200 z-2"> 
            <AnimatedCallButton />
          </div>
          
        </div>
        
      </div>
      
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[99] md:hidden transition-opacity duration-500 ease-in-out"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
}