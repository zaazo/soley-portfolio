import { Button } from '@/components/ui/button';

export default function YoutubePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">YouTube Channel</h1>
      <div className="max-w-3xl mx-auto">
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=YOUR_PLAYLIST_ID"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <p className="text-xl mb-6">
          Welcome to Tech with Soleyman! On this channel, I share my journey as a software engineer, provide tips for aspiring developers, and discuss the latest trends in technology.
        </p>
        <p className="text-xl mb-8">
          Subscribe to stay updated with weekly videos on software engineering, career advice, and tech insights.
        </p>
        <div className="flex justify-center">
          <Button size="lg" onClick={() => window.open('https://www.youtube.com/c/TechWithSoleyman', '_blank')}>
            Subscribe on YouTube
          </Button>
        </div>
      </div>
    </div>
  );
}