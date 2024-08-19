import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetails = ({ post }) => {
  if (!post) return <p>Post data is not available.</p>;

  const category = post.category || '';
  const tags = post.tags || [];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <NavLink to={`/blog/${post.id}`}>
        <h1 className="text-3xl font-bold text-gray-800 hover:text-blue-500 transition duration-300 mb-4">
          {post.title}
        </h1>
      </NavLink>
      <p className="text-gray-600 mb-2">
        By{' '}
        <span className="font-semibold text-gray-800">{post.author}</span> on{' '}
        <NavLink to={`/categories/${category.replaceAll(' ', '-')}`}>
          <span className="text-blue-500 hover:underline">
            {category}
          </span>
        </NavLink>
      </p>
      <p className="text-gray-500 text-sm mb-4">Posted on {post.date}</p>
      <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(' ', '-')}`}>
            <span className="text-blue-500 hover:underline bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold">
              #{tag}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
