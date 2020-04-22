// import firebase from 'firebase/app'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// .envからプロジェクトIDを取得して定数に設定
const config = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  apiKey: "AIzaSyDt5J7UICd9KBkPO9UFdIqklnZvmNczmTo",
  authDomain: "erlist-8aa2f.firebaseapp.com",
  databaseURL: "https://erlist-8aa2f.firebaseio.com",
  // projectId: "erlist-8aa2f",
  storageBucket: "erlist-8aa2f.appspot.com",
  messagingSenderId: "203085192257",
  appId: process.env.FIREBASE_API_KEY,
  measurementId: "G-VVY4WLF3CV"
}

// firebaseの初期処理
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase