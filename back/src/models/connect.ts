import dotenv from 'dotenv';
import admin from 'firebase-admin';
import path from 'path';

dotenv.config();

const connect = () => {
  try {
    console.log('Connecting to Firebase...');
    const serviceAccount = path.join(__dirname, '../../serviceAccountKey.json');
    const firebaseConfig = {
      credential: admin.credential.cert(serviceAccount),
    };

    admin.initializeApp(firebaseConfig);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Connected to Firebase!');
  }
};

export default connect;
