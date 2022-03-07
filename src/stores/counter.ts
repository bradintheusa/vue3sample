import { defineStore } from 'pinia'
import { getApp , initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { collection, doc, getDoc ,setDoc } from "firebase/firestore"; 

import {firebaseConfig} from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore();
connectFirestoreEmulator(db, '192.168.0.199', 8080);

// const functions = getFunctions(getApp());
// connectFunctionsEmulator(functions, "localhost", 5001);


export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 9,
    firebaseVal: "Loading"
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    fromfb: (state) => state.firebaseVal
  },
  actions: {
    increment() {
      this.counter++
    },
    async initialuizeState() {
      const docRef = doc(db, "test", "doc1");
      const docSnap = await getDoc(docRef);
      this.firebaseVal = docSnap.get("name");
    }
  }
})
