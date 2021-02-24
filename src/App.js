import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProgramView from "./Components/ProgramView/ProgramView";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: "fink-hyttebook.firebaseapp.com",
      databaseURL:
        "https://fink-hyttebook-default-rtdb.europe-west1.firebasedatabase.app/",
      projectId: "fink-hyttebook",
      storageBucket: "fink-hyttebook.appspot.com",
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID,
      measurementId: "G-YJXHDBXRC1",
    });
  } else {
    firebase.app();
  }
};

initializeFirebase();
const auth = firebase.auth();
const firestore = firebase.firestore();
function App() {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };
  return (
    <div className="App">
      <Header />
      <ProgramView />
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Logg inn
      </button>
      <Footer />
    </div>
  );
}

export default App;
