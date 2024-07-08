import React from 'react';
import waterQualityData from '../mocks/data.js';
import InfoCard from '../components/InfoCard.jsx';

const Suggests = () => {
  return (
      <div className="p-6 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-8">Water Quality Suggestions</h1>
          {waterQualityData.map((data, index) => (
              <InfoCard key={index} data={data} />
          ))}
      </div>
  );
}

export default Suggests;
