"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email:', email, 'Subscribe to newsletter:', subscribeToNewsletter);
  };

  return (
    <div className="bg-[#262626] py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-[#262626] rounded-3xl shadow-2xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <Card className="w-full overflow-hidden rounded-2xl shadow-lg bg-background">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8">
                  <CardHeader className="p-0">
                    <CardTitle className="text-3xl font-bold mb-4">Get my Software Engineering Roadmap</CardTitle>
                    <CardDescription className="text-lg mb-6">
                      Get the same roadmap that I use to guide aspiring software engineers. Get a bird's eye view of the entire journey to becoming a software engineer. All for free.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                      <Button type="submit" className="w-full">GET THE ROADMAP</Button>
                      <p className="text-sm text-muted-foreground">
                        By submitting this form, you'll receive an email with a link to the free resource. For more information, see our privacy policy.
                      </p>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={subscribeToNewsletter}
                          onCheckedChange={(checked) => setSubscribeToNewsletter(checked as boolean)}
                        />
                        <label
                          htmlFor="newsletter"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Tick this box if you want to receive my weekly(ish) email sharing insights, learnings, and musing from a fellow traveller on this journey called tech career
                        </label>
                      </div>
                    </form>
                  </CardContent>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="https://source.unsplash.com/random/800x600?roadmap"
                    alt="Software Engineering Roadmap"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;