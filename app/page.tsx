import Hero from '@/components/Hero';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <NewsletterSignup />
    </div>
  );
}