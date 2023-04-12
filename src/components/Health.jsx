import React from 'react';

const Health = () => {
  // Sample data
  const tips = [
    'Drink plenty of water',
    'Get enough sleep',
    'Eat a balanced diet',
    'Exercise regularly',
    'Avoid smoking and excessive alcohol consumption',
    'Manage stress levels',
    'Practice good hygiene',
    'Stay up-to-date with medical check-ups and vaccinations',
  ];

  return (
    <div>
      <h2 className="heading w-full bg-blue-400 rounded text-center text-lg">Health Tips</h2>
      <ul className="list-disc list-inside mt-6">
        {tips.map((tip, index) => (
          <li key={index} className="text-gray-700 text-base mb-2">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Health;
