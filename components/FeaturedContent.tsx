import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedContent = () => {
  const featuredItems = [
    {
      title: "Latest Blog Post",
      description: "How I Stay Productive While Traveling",
      link: "/blog/productive-traveling"
    },
    {
      title: "New Course",
      description: "Master Notion: From Beginner to Expert",
      link: "/courses/master-notion"
    },
    {
      title: "Book Recommendation",
      description: "Atomic Habits by James Clear",
      link: "/books/atomic-habits"
    }
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredItems.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedContent;