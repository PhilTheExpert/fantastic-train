import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

export default function BlogApp() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to your new blog",
      date: "September 26, 2025",
      category: "General",
      tags: ["welcome", "first-post"],
      content: "This is a starter post. Use the Admin panel to create, edit, or delete posts.",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Blog
        </motion.h1>
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-6 bg-white rounded-2xl shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
