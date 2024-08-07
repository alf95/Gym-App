import React from 'react';
import { useParams } from 'react-router-dom';

const ExerciseDetail = ({ exercises }) => {
  const { id } = useParams();
  const exercise = exercises.find((exercise) => exercise.id === id);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{exercise.title}</h2>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <video controls className="w-full h-full rounded">
          <source src={exercise.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ExerciseDetail;
