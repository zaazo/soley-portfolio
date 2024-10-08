import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Hey friends —</h1>
        <p className="text-xl mb-4">
          I'm Soleyman. <span className="text-blue-500">YouTuber</span>, <span className="text-blue-500">Software Engineer</span>, and the
          creator of <span className="text-blue-500">Tech with Soleyman</span>.
        </p>
        <p className="text-xl mb-8">
          To celebrate my channel reaching 100k subscribers, I'm giving away my "Software Engineering Roadmap" absolutely free.
        </p>
        <p className="text-lg mb-4">
          If you'd like the roadmap delivered straight to your inbox, just enter your email address below.
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <Input type="email" placeholder="Your email address" className="flex-grow" />
          <Button type="submit">DOWNLOAD</Button>
        </form>
        <div className="mt-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">If you'd like to receive Tech Notes, my free weekly newsletter, tick this box.</span>
          </label>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image
          src="https://source.unsplash.com/random/600x400?software-engineer"
          alt="Soleyman"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;