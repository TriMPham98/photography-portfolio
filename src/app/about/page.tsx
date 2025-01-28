"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-lg">
            Capturing life's beautiful moments one frame at a time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/placeholder.jpg"
              alt="Photographer portrait"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6">
            <h2 className="text-2xl font-semibold">
              The Story Behind the Lens
            </h2>
            <p>
              Hello! I'm Tri Pham, a passionate photographer with over 10 years
              of experience capturing life's most precious moments. My journey
              in photography began when I first picked up a camera in my teens,
              and I've been in love with the art form ever since.
            </p>
            <p>
              I specialize in portrait and landscape photography, always
              striving to capture the authentic essence of my subjects. My work
              has been featured in various exhibitions and publications.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <p>10+ years of professional photography experience</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
            <p>200+ successful projects completed</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Clients</h3>
            <p>150+ happy clients worldwide</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
