import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center pt-16"> {/* Add padding-top to push content below the header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Blogs Tagged <span className="text-blue-500">#{tag}</span>
          </h2>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Blogs />
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="mx-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default TagPage;
