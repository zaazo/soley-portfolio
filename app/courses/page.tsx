import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const courses = [
  {
    title: "Software Engineering Fundamentals",
    description: "Learn the core concepts of software engineering and start your tech career.",
    duration: "8 weeks",
    price: "$199"
  },
  {
    title: "Advanced JavaScript Mastery",
    description: "Take your JavaScript skills to the next level with advanced concepts and patterns.",
    duration: "6 weeks",
    price: "$149"
  },
  {
    title: "Building Scalable Web Applications",
    description: "Learn how to design and build web applications that can handle millions of users.",
    duration: "10 weeks",
    price: "$249"
  },
  // Add more courses here
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.duration}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="font-bold">{course.price}</span>
              <Button>Enroll Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}