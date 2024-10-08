import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const books = [
  {
    title: "The Productivity Project",
    author: "Chris Bailey",
    description: "Accomplish more by managing your time, attention, and energy.",
    imageUrl: "https://source.unsplash.com/random/300x400?book"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world.",
    imageUrl: "https://source.unsplash.com/random/300x400?book-cover"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "An easy & proven way to build good habits & break bad ones.",
    imageUrl: "https://source.unsplash.com/random/300x400?book-shelf"
  },
  // Add more books here
];

export default function BooksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Recommended Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardTitle>{book.title}</CardTitle>
              <CardDescription>{book.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{book.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}