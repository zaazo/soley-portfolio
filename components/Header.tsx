"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-background shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            TwS
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/courses" className="hover:text-primary">Courses</Link>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <Link href="/tools" className="hover:text-primary">Tools & Tech</Link>
            <Link href="/newsletter" className="hover:text-primary">Newsletter</Link>
            <Link href="/youtube" className="hover:text-primary">YouTube</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 py-4 px-4">
            <Link href="/courses" className="hover:text-primary">Courses</Link>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <Link href="/tools" className="hover:text-primary">Tools & Tech</Link>
            <Link href="/newsletter" className="hover:text-primary">Newsletter</Link>
            <Link href="/youtube" className="hover:text-primary">YouTube</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;