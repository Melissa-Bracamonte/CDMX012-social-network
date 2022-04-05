import {
  getFirestore, collection, addDoc, getAuth, serverTimestamp, getDocs, query, where, orderBy,
} from './firebase-import.js';

const db = getFirestore();

export const post = (text, displayName) => {
  const db = getFirestore();
  const auth = getAuth();
  const userlogin = auth.currentUser;
  const uid = userlogin.uid;
  addDoc(collection(db, 'Posts'), {
    displayName, text, uid, likes: [], timestamp: serverTimestamp(),
  });
};
export const getPost = async () => {
  const postRef = collection(db, 'Posts');
  const orderPost = await getDocs(query(postRef, orderBy('timestamp', 'desc')));
  return orderPost;
};

// const publi = doc(db, 'Posts');
// console.log(publi);

// import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
// const db = getFirestore();
// // Add a new document in collection "cities"
// export const post = async (text) => {
//   const uid = userlogin.uid;
//   await setDoc(doc(db, 'Posteo'), {
//     text,
//     uid,
//     likes: [],
//     timestamp: serverTimestamp(),
//   });
// };
