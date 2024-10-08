import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: "10 Essential Skills Every Software Engineer Should Have",
    description: "Discover the key skills that will make you stand out in the tech industry.",
    date: "May 15, 2023",
    slug: "essential-software-engineer-skills"
  },
  {
    title: "How to Ace Your Technical Interviews",
    description: "Proven strategies to help you succeed in your next tech job interview.",
    date: "May 1, 2023",
    slug: "ace-technical-interviews"
  },
  {
    title: "The Future of Web Development: Trends to Watch",
    description: "Stay ahead of the curve with these emerging web development technologies.",
    date: "April 20, 2023",
    slug: "future-web-development-trends"
  },
  // Add more blog posts here
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${post.slug}`} passHref>
                <Button variant="outline" className="w-full">Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}