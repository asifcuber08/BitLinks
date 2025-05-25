import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-purple-100 text-purple-700 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8 border border-purple-200">
        <h1 className="text-3xl font-bold mb-4 text-black">About Our URL Shortener</h1>
        <p className="text-lg mb-4">
          Our URL shortener helps you convert long and messy URLs into short, easy-to-share links.
          Whether you're a developer, marketer, or casual user, our tool simplifies link sharing
          while tracking valuable analytics.
        </p>
        <p className="text-lg mb-4">
          Built with modern web technologies like <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, this app
          delivers high performance and a smooth user experience. Your links are safe, fast, and reliable.
        </p>
        <p className="text-lg">
          Start shortening today and experience the convenience of clean, manageable URLs!
        </p>
      </div>
    </div>
  );
};

export default About;
