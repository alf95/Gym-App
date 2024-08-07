import React from 'react';
import { useParams } from 'react-router-dom';

const ExerciseDetail = ({ exercises }) => {
  const { id } = useParams();
  const exercise = exercises.find((exercise) => exercise.id === id);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{exercise.title}</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={exercise.videoUrl}
          title={exercise.title}
          className="w-full h-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ExerciseDetail;
