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
    { label: "Parcours", href: "#experience" }, // adapte si besoin
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const desktopLinkClass =
    "px-4 py-2 rounded-xl border border-secondary/30 bg-card/20 text-foreground/90 " +
    "hover:bg-secondary/15 hover:border-secondary/60 hover:text-secondary " +
    "transition-all duration-200 backdrop-blur-md shadow-sm";

  const desktopLinkActiveGlow =
    "hover:shadow-[0_0_18px_hsl(var(--secondary)/0.25)]";

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
          <Link
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 group"
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
                style={{ objectFit: "cover" }}
              />
            </div>
            <span
              className={`${quentine.className} text-primary-foreground text-xl sm:text-base`}
            >
              {selfData.name}
            </span>
          </Link>

          {/* Desktop shortcuts */}
          {!isCVPage && (
            <div className="hidden md:flex items-center justify-center flex-1">
              <nav className="flex items-center gap-4">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`${desktopLinkClass} ${desktopLinkActiveGlow}`}
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
          )}

          <div className="hidden sm:block">
            <Button
              asChild
              className="border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
            >
              {isCVPage ? (
                <a
                  href="/docs/Racim_Zenati_CV.pdf"
                  download="Racim_Zenati_CV.pdf"
                >
                  Télécharger CV
                </a>
              ) : (
                <Link href="/resume">CV</Link>
              )}
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <RiCloseLargeFill size={20} className="transition-transform duration-200" />
            ) : (
              <RiMenu4Fill size={20} className="transition-transform duration-200" />
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
                <div className="grid grid-cols-1 gap-2">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-3 rounded-xl border border-secondary/30 bg-card/20 text-center text-foreground/90 hover:bg-secondary/15 hover:border-secondary/60 hover:text-secondary transition-all duration-200 backdrop-blur-md"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}

              <Button
                asChild
                className="w-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
              >
                {isCVPage ? (
                  <a
                    href="/docs/Racim_Zenati_CV.pdf"
                    download="Racim_Zenati_CV.pdf"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center"
                  >
                    Télécharger CV
                  </a>
                ) : (
                  <Link
                    href="/resume"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center"
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
