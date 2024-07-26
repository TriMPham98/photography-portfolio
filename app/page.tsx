import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 px-4 lg:px-6 h-14 flex items-center border-b border-gray-700">
        <Link href="#" className="flex items-center justify-center">
          <CameraIcon className="h-6 w-6 text-gray-100" />
          <span className="sr-only">Photography Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4">
            Portfolio
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Capturing the Extraordinary
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Explore the stunning photography portfolio of John Doe, a
                  master of light and composition.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50">
                  View Portfolio
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Image
                  key={index}
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt={`Portfolio Image ${index}`}
                  className="object-cover aspect-[3/2] rounded-lg"
                  priority={index === 1}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                About the Photographer
              </h2>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                John Doe is a renowned photographer with over 10 years of
                experience in the industry. His unique style and eye for detail
                have earned him a reputation for creating stunning, captivating
                images that tell a story.
              </p>
            </div>
            <Image
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Photographer"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
                className="w-full bg-gray-800 border-gray-700"
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-800 border-gray-700"
              />
              <Textarea
                placeholder="Message"
                className="w-full bg-gray-800 border-gray-700"
              />
              <Button
                type="submit"
                className="w-full bg-gray-100 text-gray-900 hover:bg-gray-300">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Biography
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Style
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Awards
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Portfolio</h3>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Landscapes
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Portraits
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Lifestyle
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Services</h3>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Commercial
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Editorial
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Events
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Email
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
              Phone
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-100">
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
