"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { RiMenu4Fill, RiCloseLargeFill } from "react-icons/ri";

import { quentine } from "@/app/fonts";

import { Button } from "../ui/button";
import { createBlurDataURL } from "@/lib/BlurDataURL";
import { selfData } from "@/constant";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isCVPage = pathname === "/resume";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && !isScrolled) {
        setIsScrolled(true);
      } else if (currentScrollY <= 100 && isScrolled) {
        setIsScrolled(false);
      }

      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        if (!isVisible) setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        if (isVisible) {
          setIsVisible(false);
          setIsMenuOpen(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled, isVisible]);

  const navLinks = [
    { label: "À propos", href: "#about" },
    { label: "Parcours", href: "#experience" }, 
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled ? "pt-0 px-2 sm:px-4" : "px-2 sm:px-2"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div
        className={`floating-nav rounded-2xl px-4 sm:px-6 py-3 bg-glass-bg transition-all duration-300 max-w-7xl mx-auto ${
          isScrolled ? "shadow-xl" : "shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo + Name */}
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 group shrink-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-glass-bg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={40}
                height={40}
                placeholder="blur"
                loading="lazy"
                quality={100}
                blurDataURL={`${createBlurDataURL({
                  width: 40,
                  height: 40,
                })}`}
                style={{ 
                  objectFit: "cover",
                  filter: "brightness(0) saturate(100%) invert(1)"
                }}
              />
            </div>
            <span
              className={`${quentine.className} text-white/90 text-xl sm:text-base group-hover:text-white transition-colors`}
            >
              {selfData.name}
            </span>

          </Link>

          {/* Desktop shortcuts (spread across navbar width) */}
          {!isCVPage && (
            <div className="hidden md:flex flex-1">
              <nav className="flex gap-1 w-full justify-between mx-auto max-w-lg">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="
                      relative
                      group
                      text-center
                      px-6 py-3
                      rounded-full
                      bg-gradient-to-br from-card/40 to-card/20
                      text-foreground/80
                      backdrop-blur-md
                      overflow-hidden
                      transition-all duration-300
                      hover:text-secondary
                      hover:scale-105
                      hover:shadow-[0_0_20px_rgba(var(--secondary-rgb)/0.4)]
                      before:absolute
                      before:inset-0
                      before:rounded-full
                      before:bg-gradient-to-br
                      before:from-secondary/20
                      before:to-secondary/5
                      before:opacity-0
                      before:transition-opacity
                      before:duration-300
                      hover:before:opacity-100
                      after:absolute
                      after:inset-0
                      after:rounded-full
                      after:border
                      after:border-secondary/0
                      after:transition-all
                      after:duration-300
                      hover:after:border-secondary/50
                    "
                  >
                    <span className="relative z-10 font-medium">
                      {l.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* CV Button - Desktop */}
          <div className="hidden sm:block shrink-0">
            <Button
              asChild
              className="
                relative
                group
                overflow-hidden
                rounded-full
                px-6 py-2.5
                bg-gradient-to-r from-primary/90 to-primary
                border-0
                text-primary-foreground
                font-medium
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(var(--primary-rgb)/0.5)]
                before:absolute
                before:inset-0
                before:bg-gradient-to-r
                before:from-primary
                before:to-primary/80
                before:opacity-0
                before:transition-opacity
                before:duration-300
                hover:before:opacity-100
              "
            >
              {isCVPage ? (
                <a
                  href="/docs/Racim_Zenati_CV.pdf"
                  download="Racim_Zenati_CV.pdf"
                  className="relative z-10"
                >
                  Télécharger CV
                </a>
              ) : (
                <Link href="/resume" className="relative z-10">
                  CV
                </Link>
              )}
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              md:hidden 
              p-2 
              rounded-full
              bg-card/30
              backdrop-blur-md
              hover:bg-card/50
              transition-all duration-200 
              hover:scale-110
              focus:outline-none 
              focus:ring-2 
              focus:ring-primary/50
            "
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <RiCloseLargeFill
                size={20}
                className="transition-transform duration-200"
              />
            ) : (
              <RiMenu4Fill
                size={20}
                className="transition-transform duration-200"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 border-t border-border/50 mt-4">
            <div className="space-y-3">
              {!isCVPage && (
                <div className="grid grid-cols-1 gap-2.5">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="
                        relative
                        group
                        px-5 py-3.5
                        rounded-full
                        bg-gradient-to-br from-card/40 to-card/20
                        text-center
                        text-foreground/80
                        backdrop-blur-md
                        overflow-hidden
                        transition-all duration-300
                        hover:text-secondary
                        hover:scale-[1.02]
                        active:scale-95
                        before:absolute
                        before:inset-0
                        before:rounded-full
                        before:bg-gradient-to-br
                        before:from-secondary/20
                        before:to-secondary/5
                        before:opacity-0
                        before:transition-opacity
                        before:duration-300
                        hover:before:opacity-100
                        after:absolute
                        after:inset-0
                        after:rounded-full
                        after:border
                        after:border-secondary/0
                        after:transition-all
                        after:duration-300
                        hover:after:border-secondary/40
                      "
                    >
                      <span className="relative z-10 font-medium">
                        {l.label}
                      </span>
                    </a>
                  ))}
                </div>
              )}

              <Button
                asChild
                className="
                  w-full
                  relative
                  group
                  overflow-hidden
                  rounded-full
                  px-5 py-3
                  bg-gradient-to-r from-primary/90 to-primary
                  border-0
                  text-primary-foreground
                  font-medium
                  transition-all duration-300
                  hover:scale-[1.02]
                  active:scale-95
                  before:absolute
                  before:inset-0
                  before:bg-gradient-to-r
                  before:from-primary
                  before:to-primary/80
                  before:opacity-0
                  before:transition-opacity
                  before:duration-300
                  hover:before:opacity-100
                "
              >
                {isCVPage ? (
                  <a
                    href="/docs/Racim_Zenati_CV.pdf"
                    download="Racim_Zenati_CV.pdf"
                    onClick={() => setIsMenuOpen(false)}
                    className="relative z-10 flex items-center justify-center"
                  >
                    Télécharger CV
                  </a>
                ) : (
                  <Link
                    href="/resume"
                    onClick={() => setIsMenuOpen(false)}
                    className="relative z-10 flex items-center justify-center"
                  >
                    CV
                  </Link>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};