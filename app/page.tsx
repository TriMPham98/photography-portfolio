"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

function useIntersectionObserver(ref, options) {
  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      }, options);

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref, options]);
}

function FadeInSection({ children, className }) {
  const ref = useRef(null);
  useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <div ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-300">
      <style jsx global>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 2.6s ease-out, transform 2.6s ease-out;
        }
        .fade-in-section.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <header className="bg-black px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link href="#" className="flex items-center justify-center">
          <CameraIcon className="h-6 w-6 text-gray-300" />
          <span className="sr-only">Photography Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:text-white hover:underline underline-offset-4">
            Portfolio
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-white hover:underline underline-offset-4">
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-white hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <FadeInSection className="w-full pt-12 md:pt-24 lg:pt-32 pb-12 md:pb-32 lg:pb-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Capturing the Extraordinary
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Explore the stunning photography portfolio of Tri Pham, a
                  master of light and composition.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50">
                  View Portfolio
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-gray-900 px-8 text-sm font-medium text-gray-300 shadow-sm transition-colors hover:bg-gray-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "/images/portfolio1.jpg",
                "/images/portfolio2.jpg",
                "/images/portfolio3.jpg",
                "/images/portfolio4.jpg",
                "/images/portfolio5.jpg",
                "/images/portfolio6.jpg",
              ].map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  width={600}
                  height={400}
                  alt={`Portfolio Image ${index + 1}`}
                  className="object-cover aspect-[3/2] rounded-lg"
                  priority={index === 0}
                />
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                About the Photographer
              </h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tri Pham is a renowned photographer with over 3 years of
                experience in the industry. His unique style and eye for detail
                have earned him a reputation for creating stunning, captivating
                images that tell a story.
              </p>
            </div>
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/images/photographer.jpg"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                alt="Photographer John Doe with guitar"
                className="rounded-xl"
              />
            </div>
          </div>
        </FadeInSection>

        <FadeInSection className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're interested in booking a photoshoot or just want
                to learn more about my work, I'd love to hear from you. Fill out
                the form below and I'll get back to you as soon as possible.
              </p>
            </div>
            <form className="mx-auto w-full max-w-md space-y-4">
              <Input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-900 border-gray-800 text-gray-300 placeholder-gray-500"
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-900 border-gray-800 text-gray-300 placeholder-gray-500"
              />
              <Textarea
                placeholder="Message"
                className="w-full bg-gray-900 border-gray-800 text-gray-300 placeholder-gray-500"
              />
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200">
                Submit
              </Button>
            </form>
          </div>
        </FadeInSection>
      </main>

      <footer className="bg-gray-950 p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold text-white">About</h3>
            <Link href="#" className="text-gray-400 hover:text-white">
              Biography
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Style
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Awards
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-white">Portfolio</h3>
            <Link href="#" className="text-gray-400 hover:text-white">
              Landscapes
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Portraits
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Lifestyle
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-white">Services</h3>
            <Link href="#" className="text-gray-400 hover:text-white">
              Commercial
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Editorial
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Events
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-white">Legal</h3>
            <Link href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-white">Contact</h3>
            <Link href="#" className="text-gray-400 hover:text-white">
              Email
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Phone
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              Social Media
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}
