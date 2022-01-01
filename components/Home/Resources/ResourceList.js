import React from 'react';
import Resource from './Resource';

const ResourceList = ({ resources }) => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-center font-bold text-2xl md:text-4xl text-navy">
        Free Resources
      </h2>
      <div className="flex flex-wrap justify-center items-center space-x-6">
        {resources.map((resource) => (
          <Resource key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
