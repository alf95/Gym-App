import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import ExerciseList from './components/ExerciseList';
import ExerciseDetail from './components/ExerciseDetail';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { db, collection, getDocs, addDoc, auth, signInWithEmailAndPassword, signOut } from './firebase';

const App = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const querySnapshot = await getDocs(collection(db, 'exercises'));
      const exercisesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setExercises(exercisesData);
    };

    fetchExercises();
  }, []);

  const addExercise = async (exercise) => {
    const docRef = await addDoc(collection(db, 'exercises'), exercise);
    setExercises([...exercises, { id: docRef.id, ...exercise }]);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <header className="bg-blue-600 text-white p-4 text-center text-3xl font-bold rounded-lg shadow-md">
          Gym Exercise App
        </header>
        <nav className="flex justify-center space-x-4 my-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">Home</Link>
          <Link to="/admin" className="text-blue-600 hover:text-blue-800 font-semibold">Admin</Link>
          <button onClick={handleLogout} className="text-blue-600 hover:text-blue-800 font-semibold">Logout</button>
        </nav>
        <Routes>
          <Route path="/" element={<ExerciseList exercises={exercises} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrivateRoute component={AdminPanel} />} />
          <Route path="/exercise/:id" element={<ExerciseDetail exercises={exercises} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
