// @ts-nocheck
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  get,
} from 'firebase/firestore';
import firebaseConfig from '@config/services/firebase';

class FirebaseService {
  private db;

  constructor() {
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  async saveProfile(
    profileId: string,
    name: string,
    experience: number,
    skills: string[],
    bio: string
  ) {
    const data = {
      name,
      experience,
      skills,
      bio,
    };
    await setDoc(doc(this.db, 'profiles', profileId), data);
    console.log(`Profile saved with ID: ${profileId}`);
  }

  async getProfile(profileId: string) {
    const docRef = doc(this.db, 'profiles', profileId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  }

  async saveProject(
    projectId: string,
    name: string,
    description: string,
    status: string,
    profileId: string
  ) {
    const data = {
      name,
      description,
      status,
      profileId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await setDoc(doc(this.db, 'projects', projectId), data);
    console.log(`Project saved with ID: ${projectId}`);
  }

  async getProjectsByProfile(profileId: string) {
    const q = query(collection(this.db, 'projects'), where('profileId', '==', profileId));
    const querySnapshot = await get(q);
    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push(doc.data());
    });
    return projects;
  }
}

export default new FirebaseService();
