import React, { useState } from 'react';

const AdminPanel = ({ addExercise }) => {
  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (videoUrl) {
      addExercise({ title, videoUrl });
      setTitle('');
      setVideoUrl('');
    } else {
      alert('Please enter a video URL.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Exercise</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Exercise Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="url"
          placeholder="Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Add Exercise
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;