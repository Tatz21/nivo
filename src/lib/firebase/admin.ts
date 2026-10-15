import { getApps, getApp, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

function initFirebaseAdmin() {
  const apps = getApps();
  if (apps.length > 0) {
    return getApp();
  }

  const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'nivo-education';
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (clientEmail && privateKey) {
    return initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey
      }),
      storageBucket: `${projectId}.appspot.com`
    });
  }

  // Graceful initialization for development or emulator
  return initializeApp({
    projectId,
    storageBucket: `${projectId}.appspot.com`
  });
}

let adminDbInstance: ReturnType<typeof getFirestore>;
let adminStorageInstance: ReturnType<typeof getStorage>;

try {
  const app = initFirebaseAdmin();
  adminDbInstance = getFirestore(app);
  adminStorageInstance = getStorage(app);
} catch (e) {
  // If in environments where Admin SDK cannot initialize credentials, provide safe mock interfaces
  console.warn('[Firebase Admin] Running in fallback mode:', e);
}

export const adminDb = adminDbInstance!;
export const adminStorage = adminStorageInstance!;
