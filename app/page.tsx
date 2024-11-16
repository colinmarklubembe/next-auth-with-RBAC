import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Welcome to My NextAuth.js Tutorial
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Discover how authentication works with Next.js. Learn by exploring
          features and building something amazing.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-400 transition">
            Learn More
          </button>
          <button className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg shadow-lg hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Features Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentication",
                description:
                  "Secure and scalable authentication using NextAuth.js.",
                icon: "🔒",
              },
              {
                title: "Dynamic Routing",
                description:
                  "Explore dynamic and static routes in Next.js projects.",
                icon: "🌐",
              },
              {
                title: "API Integration",
                description:
                  "Learn how to build robust serverless APIs with Next.js.",
                icon: "🛠️",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md p-6 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Tutorial App. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
