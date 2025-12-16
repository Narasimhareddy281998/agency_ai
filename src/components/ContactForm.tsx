"use client";

import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Reach out to us
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-500">
            Ready to grow your brand? Let&apos;s connect and build something
            exceptional together.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
          <form className="space-y-6">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Email id
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm md:text-base outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Enter your message"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm md:text-base outline-none resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-white bg-linear-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition"
            >
              Submit →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
