import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const tools = [
  {
    title: "VS Code Setup for Web Developers",
    description: "My personal VS Code configuration and essential extensions for web development.",
    link: "/tools/vscode-setup"
  },
  {
    title: "Git Cheat Sheet",
    description: "A comprehensive list of Git commands and best practices for version control.",
    link: "/tools/git-cheat-sheet"
  },
  {
    title: "Web Performance Optimization Toolkit",
    description: "A collection of tools and techniques to improve your website's performance.",
    link: "/tools/web-performance-toolkit"
  },
  // Add more tools here
];

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Tools & Tech</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{tool.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{tool.description}</CardDescription>
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