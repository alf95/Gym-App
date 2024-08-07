# Gym Exercise App

This project is a Gym Exercise App built with React, Firebase Firestore, and Firebase Authentication. The app allows users to view a list of exercises, view details for each exercise, and, if authenticated, add new exercises with associated videos.

## Features

- View a list of exercises.
- View details of an individual exercise, including a video demonstration.
- Admin authentication to add new exercises.
- Upload and store exercise videos using Firebase Storage.
- Secure access to admin functionalities using Firebase Authentication.

## Prerequisites

- Node.js and npm installed on your machine.
- Firebase project set up with Firestore, Authentication, and Storage enabled.

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-repo/gym-exercise-app.git
    cd gym-exercise-app
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up Firebase:**

    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project.
    - Enable Firestore Database.
    - Enable Firebase Authentication (Email/Password).
    - Enable Firebase Storage.
    - Copy your Firebase configuration settings.

4. **Create a `.env` file in the root directory and add your Firebase configuration:**

    ```plaintext
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id
    ```

5. **Create a Firebase configuration file:**

    Create a file named `firebase.js` in the `src` directory and add your Firebase configuration:

    ```js
    // src/firebase.js
    import { initializeApp } from 'firebase/app';
    import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
    import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
    import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);
    const storage = getStorage(app);

    export { db, collection, getDocs, addDoc, auth, signInWithEmailAndPassword, onAuthStateChanged, signOut, storage, ref, uploadBytes, getDownloadURL };
    ```

## Running the Project

1. **Start the development server:**

    ```sh
    npm start
    ```

2. **Open your browser and go to:**

    ```plaintext
    http://localhost:3000
    ```

## Project Structure

- **src/components/AdminPanel.js**: Component for admin users to add exercises.
- **src/components/ExerciseList.js**: Component to display the list of exercises.
- **src/components/ExerciseDetail.js**: Component to display details of a selected exercise with the video.
- **src/components/Login.js**: Component for admin login.
- **src/components/PrivateRoute.js**: Component to protect routes that require authentication.
- **src/firebase.js**: Firebase configuration and initialization.
- **src/App.js**: Main application component that sets up routing and initializes Firebase.

## Usage

- **Viewing Exercises**: Anyone can view the list of exercises and the details for each exercise.
- **Admin Access**: Click on the "Admin" link in the navigation to access the admin panel. You will be redirected to the login page if you are not authenticated.
- **Logging In**: Use your admin email and password to log in. Once authenticated, you can add new exercises with video links.

## Security Rules (For Testing Only)

For testing purposes, you can set your Firestore and Storage rules to be less restrictive. **Remember to secure your rules before going to production.**

Firestore rules:

```plaintext
service cloud.firestore {
  match /databases/{database}/documents {
    match /exercises/{exerciseId} {
      allow read, write: if true;
    }
  }
}
