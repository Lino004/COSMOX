import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyD7fPts6lf5InjZytCERrbFVrkWR_9aayM',
  authDomain: 'cosmox-87a63.firebaseapp.com',
  databaseURL: 'https://cosmox-87a63.firebaseio.com',
  projectId: 'cosmox-87a63',
  storageBucket: 'cosmox-87a63.appspot.com',
  messagingSenderId: '715855892934'
}
firebase.initializeApp(config)

export const db = firebase.database()
export const storage = firebase.storage()
