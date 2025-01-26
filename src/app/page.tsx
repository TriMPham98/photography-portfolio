"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/placeholder.jpg"
              alt="Hero image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4">
            Capturing Moments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8">
            Photography Portfolio
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}>
            <Link
              href="#gallery"
              className="inline-block bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors">
              View Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="gallery" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery items will be populated here */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="relative aspect-[4/5] group overflow-hidden">
              <Image
                src={`/placeholder-${item}.jpg`}
                alt={`Gallery image ${item}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium">View Project</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Interested in working together? Let's create something beautiful.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
