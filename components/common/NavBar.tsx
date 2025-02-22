"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "CBSE Affiliation",
    href: "#",
    description:
      "CBSE affiliation details that the viewers must know.",
  },
  {
    title: "Curriculumn",
    href: "#",
    description:
      "Know more about the curriculmn we provide.",
  },
  {
    title: "Streams Offered",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Career Couselling",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Sports",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that.",
  },
  {
    title: "Cultural",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element it.",
  },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside for mobile menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu && !mobileMenu.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <section 
        className={`fixed top-0 left-0 w-full h-16 shadow-md z-30 transition-colors duration-300 
          ${isScrolled ? 'bg-white ' : 'bg-transparent text-white'}`}
      >
        <header className="flex items-center h-full justify-between max-w-7xl mx-auto px-4 md:px-0">
          <Image
            src="/assets/logo/stlogo.png"
            alt="School Logo"
            width={150}
            height={80}
            className="object-contain"
          />

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none hover:bg-[#002147] bg-cover text-white flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          style={{backgroundImage: "url('/assets/background/stvivek.png')"}} >
                            <div className="mb-2 mt-4 text-lg font-bold hover:text-[#E63946]">
                              Our History
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Read about our history, how our campus get started.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#"  title="Why Choose Us?" className="hover:bg-[#002147] hover:text-white">
                        Want to know why we are the best in whole north India.
                      </ListItem>
                      <ListItem href="#" title="Mission & Vision" className="hover:bg-[#002147] hover:text-white">
                        Read about our mission and vision for the society from our past.
                      </ListItem>
                      <ListItem
                        href="#"
                        title="Principal Message" className="hover:bg-[#002147] hover:text-white"
                      >
                        Message that has been passed by our Principal.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <Link href={'/contact'} className="text-sm font-bold px-4 py-2 hover:text-[#E63946]">Contact</Link>
                <Link href={'mandotary-disclosure'} className="text-sm font-bold px-4 py-2 hover:text-[#E63946]">Disclosure</Link>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <Button variant="destructive" className='text-white bg-[#002147] font-semibold shadow-lg'>
              Apply Now
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-100 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <Button variant="destructive" className='hidden lg:block text-white bg-[#002147] font-semibold shadow-lg'>
            Apply Now
          </Button>
        </header>
      </section>

      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 w-[70%] h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-md mb-4"
          >
            <X size={24} />
          </button>

          <div className="space-y-4">
            <MobileDropdown title="About">
              <Link href="/" className="block p-3 hover:bg-gray-100 rounded-md">
                Our History
              </Link>
              <Link href="#" className="block p-3 hover:bg-gray-100 rounded-md">
                Why Choose Us?
              </Link>
              <Link href="#" className="block p-3 hover:bg-gray-100 rounded-md">
                Mission & Vision
              </Link>
              <Link href="#" className="block p-3 hover:bg-gray-100 rounded-md">
                Principal Message
              </Link>
            </MobileDropdown>

            <MobileDropdown title="Academics">
              {components.map((component) => (
                <Link
                  key={component.title}
                  href={component.href}
                  className="block p-3 hover:bg-gray-100 rounded-md"
                >
                  {component.title}
                </Link>
              ))}
            </MobileDropdown>

            <MobileDropdown title="Admissions">
              {components.map((component) => (
                <Link
                  key={component.title}
                  href={component.href}
                  className="block p-3 hover:bg-gray-100 rounded-md"
                >
                  {component.title}
                </Link>
              ))}
            </MobileDropdown>

            <Link href="/contact" className="block p-3 hover:bg-gray-100 rounded-md">
              Contact
            </Link>
            <Link href="/mandotary-disclosure" className="block p-3 hover:bg-gray-100 rounded-md">
              Disclosure
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

function MobileDropdown({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-3 hover:bg-gray-100 rounded-md"
      >
        <span className="font-semibold">{title}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div className={`pl-4 space-y-2 ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
