import React from 'react';
import { useParams } from 'react-router-dom';
import Player from 'react-player'; // Assuming you want to use react-player for Youtube videos

const ExerciseDetail = ({ exercises }) => {
  const { id } = useParams();
  const exercise = exercises.find(ex => ex.id === id);

  if (!exercise) {
    return <div>Exercise not found</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{exercise.title}</h2>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <Player
          url={exercise.videoUrl}
          controls
          width="100%"
          height="315px"
        />
      </div>
    </div>
  );
};

export default ExerciseDetail;
