"use client";

import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Let's Work Together
        </h1>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it. Send me a message
          and I'll get back to you as soon as possible.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 text-green-500"
                    : "bg-red-500/10 text-red-500"
                }`}>
                {submitStatus.message}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-white/20 rounded-lg focus:ring-2 focus:ring-white/30 bg-black/50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                required></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white/10 text-white py-3 rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="font-medium">Email:</span>
                  <a
                    href="mailto:tri.pham@example.com"
                    className="hover:underline">
                    tri.pham@example.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-medium">Phone:</span>
                  <a href="tel:+1234567890" className="hover:underline">
                    +1 (234) 567-890
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-medium">Location:</span>
                  <span>Your City, Country</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/phamtriphoto/"
                  className="hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer">
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/pham-tri/"
                  className="hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a
                  href="https://x.com/PhamTriPhoto"
                  className="hover:text-blue-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer">
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
