import dotenv from 'dotenv';
import admin from 'firebase-admin';

dotenv.config();

function connectToFireStore() {
  try {
    const firebaseApp: admin.app.App = (global as any).firebaseApp
      ?? admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
      });

    (global as any).firebaseApp = firebaseApp;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Connected to Firebase!');
  }
}

export default connectToFireStore;
