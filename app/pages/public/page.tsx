import React from "react";

const Public = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-200 text-gray-800">
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to the Public Page
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          This page is accessible to all users, regardless of authentication.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Open to Everyone
          </h2>
          <p className="text-gray-700">
            The public page is a place where anyone, authenticated or not, can
            visit. This can include general information, resources, or public
            announcements that do not require login access.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-400 transition duration-200">
            Learn More
          </button>
          <button className="px-8 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-400 transition duration-200">
            Explore More
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What&apos;s Next?
          </h2>
          <p className="text-gray-700">
            After exploring this page, feel free to check out other parts of the
            site. Whether you&apos;re interested in becoming a member or
            learning more about specific features, you&apos;re free to browse
            all the publicly available content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Public;
