import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-purple-100 text-purple-700 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-8 border border-purple-200">
        <h1 className="text-3xl font-bold mb-6 text-black">Contact Us</h1>
        <p className="mb-6 text-lg">
          Have questions, feedback, or suggestions? We&#39;d love to hear from you!
          Fill out the form below and we&#39;ll get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              rows={4}
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
