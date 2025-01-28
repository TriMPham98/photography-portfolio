export default function Contact() {
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
          <form className="space-y-6">
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
              className="w-full bg-white/10 text-white py-3 rounded-lg hover:bg-white/20 transition-colors">
              Send Message
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
