import React from 'react';
import PropTypes from 'prop-types';
  
const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

function Card({ title , description, url}){
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
      <div className="px-6 py-4">
        <a href={url} className="text-xl mb-2 text-orange-500">{title}</a>

        <p className="text-gray-700 text-base mb-2">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <span className="bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-white">React</span>
          <span className="bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-white">Tailwindcss</span>
          <span className="bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-white">Redux</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = propTypes;

export { Card };
