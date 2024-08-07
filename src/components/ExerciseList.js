import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseList = ({ exercises }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Exercise List</h2>
      <ul className="space-y-4">
        {exercises.map((exercise) => (
          <li key={exercise.id} className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow">
            <Link to={`/exercise/${exercise.id}`} className="text-blue-500 hover:text-blue-700">
              {exercise.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
