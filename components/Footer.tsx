import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p className="text-sm">A website inspired by Ali Abdaal's design, focusing on productivity, technology, and personal development.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm hover:text-primary">Blog</Link></li>
              <li><Link href="/courses" className="text-sm hover:text-primary">Courses</Link></li>
              <li><Link href="/books" className="text-sm hover:text-primary">Books</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary">Twitter</a></li>
              <li><a href="#" className="text-sm hover:text-primary">YouTube</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Instagram</a></li>
              <li><a href="#" className="text-sm hover:text-primary">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-2">Subscribe to get productivity tips and insights.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-grow px-3 py-2 text-sm border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary" />
              <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded-r-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm">
          <p>&copy; 2023 Ali Abdaal-style Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;