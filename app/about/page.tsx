import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="mb-8">
          <Image
            src="https://source.unsplash.com/random/400x400?portrait"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-full mx-auto"
          />
        </div>
        <p className="text-xl mb-6">
          Hi, I'm [Your Name]. I'm passionate about productivity, technology, and personal development. Through this website, I share insights and strategies to help you live a more productive and fulfilling life.
        </p>
        <p className="text-xl mb-6">
          As a [Your Profession/Background], I've spent years exploring various productivity techniques, tools, and mindsets. I'm excited to share what I've learned with you through my blog posts, courses, and recommended resources.
        </p>
        <p className="text-xl mb-8">
          When I'm not creating content or working on personal projects, you can find me [Your Hobbies/Interests]. I believe in continuous learning and always strive to improve myself and help others do the same.
        </p>
        <div className="flex justify-center space-x-4">
          <Button>Contact Me</Button>
          <Button variant="outline">View My Work</Button>
        </div>
      </div>
    </div>
  );
}