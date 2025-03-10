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
import { usePathname } from "next/navigation";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Overview",
    href: "/academics/overview",
    description:
      "A brief overview of our campus to get the idea of our legacy.",
  },
  {
    title: "CBSE Affiliation",
    href: "/academics/cbse-affiliation",
    description:
      "Know about the affiliation of our school with CBSE.",
  },
  {
    title: "Streams Offered",
    href: "/academics/streams-offered",
    description:
      "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Career Counselling",
    href: "/academics/career-counselling",
    description: "Our school have dedicated department to help you with your career decisions.",
  },
  {
    title: "Sports",
    href: "/academics/sports",
    description:
      "A set of layered sections of content—known as tab panels—that.",
  },
  {
    title: "Gallery",
    href: "/gallery",
    description:
      "See the glimpses of our school in a page which contains the memory.",
  },
];

const admissionComponent: { title: string; href: string; description: string }[] = [
  {
    title: "Admission Procedure",
    href: "/admissions/admission-process",
    description:
      "Read about the process we follow in our school for the admission.",
  },
  {
    title: "Fee Structure",
    href: "/admissions/fee-structure",
    description:
      "Know more about the fee structure of your child future journey.",
  },
  {
    title: "Withdrawal Process",
    href: "#",
    description:
      "All the information you need to know about withdrawal process.",
  },
  {
    title: "TC Updates",
    href: "#",
    description: "Find transfer certificates of your ward in a easy way.",
  }
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY - lastScrollY > 10) { // Increase value for smoother effect
        setIsVisible(false);
      } else if (lastScrollY - window.scrollY > 10) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // Dependency array

  const isHomePage = pathname === "/";
  const navBg = isHomePage && !isScrolled ? "bg-transparent text-white" : "bg-white text-black";

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
        className={`fixed top-0 left-0 w-full h-16 shadow-md z-30 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${navBg}`}>
        <header className="flex items-center h-full justify-between max-w-7xl mx-auto px-4 md:px-0">
          <Link href={"/"}>
          <Image
            src="/assets/logo/stlogo.png"
            alt="School Logo"
            width={150}
            height={80}
            className="object-contain"
            />
            </Link>

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
                            className="flex h-full w-full select-none hover:bg-[#0D3658] bg-cover text-white flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/about-us/our-history"
                          style={{backgroundImage: "url('/assets/background/stvivek.png')"}} >
                            <div className="mb-2 mt-4 text-lg font-bold hover:text-[#85193C]">
                              Our History
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Read about our history, how our campus get started.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/about-us/why-choose-us"  title="Why Choose Us?" className="hover:bg-[#0D3658] hover:text-white">
                        Want to know why we are the best in whole north India.
                      </ListItem>
                      <ListItem href="/about-us/mission-vision" title="Mission & Vision" className="hover:bg-[#0D3658] hover:text-white">
                        Read about our mission and vision for the society from our past.
                      </ListItem>
                      <ListItem
                        href="/about-us/principals-message"
                        title="Principal Message" className="hover:bg-[#0D3658] hover:text-white"
                      >
                        Message that has been passed by our Principal.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                      {admissionComponent.map((component) => (
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
                <Link href={'/contact-us'} className="text-sm font-bold px-4 py-2 hover:text-[#85193C]">Contact</Link>
                <Link href={'/mandatory-disclosure'} className="text-sm font-bold px-4 py-2 hover:text-[#85193C]">Disclosure</Link>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <Button variant="destructive" className='text-white bg-[#85193C] font-semibold shadow-lg'>
              Apply Now
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-gray-100 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <Button className='hidden lg:block text-white bg-[#85193C] hover:bg-[#0D3658] font-semibold shadow-lg'>
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
              <Link href="/about-us/our-history" className="block p-3 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                Our History
              </Link>
              <Link href="/about-us/why-choose-us" className="block p-3 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                Why Choose Us?
              </Link>
              <Link href="/about-us/mission-vision" className="block p-3 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                Mission & Vision
              </Link>
              <Link href="/about-us/principals-message" className="block p-3 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                Principal Message
              </Link>
            </MobileDropdown>

            <MobileDropdown title="Academics">
              {components.map((component) => (
                <Link
                  key={component.title}
                  href={component.href}
                  className="block p-3 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {component.title}
                </Link>
              ))}
            </MobileDropdown>

            <MobileDropdown title="Admissions">
              {admissionComponent.map((component) => (
                <Link
                  key={component.title}
                  href={component.href}
                  className="block p-3 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {component.title}
                </Link>
              ))}
            </MobileDropdown>

            <Link href="/contact-us" className="block p-3 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/mandatory-disclosure" className="block p-3 hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
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
  React.ComponentPropsWithoutRef<"a"> & { href: string; title: string }
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href} // ✅ Ensure href is always passed
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#0D3658]  hover:text-white focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
