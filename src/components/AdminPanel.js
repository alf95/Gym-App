import React, { useState } from 'react';
import { storage, ref, uploadBytes, getDownloadURL } from '../firebase';

const AdminPanel = ({ addExercise }) => {
  const [title, setTitle] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (videoFile) {
      const storageRef = ref(storage, `videos/${videoFile.name}`);
      await uploadBytes(storageRef, videoFile);
      const videoUrl = await getDownloadURL(storageRef);

      addExercise({ title, videoUrl });
      setTitle('');
      setVideoFile(null);
    } else {
      alert('Please select a video file.');
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
          type="file"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files[0])}
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
