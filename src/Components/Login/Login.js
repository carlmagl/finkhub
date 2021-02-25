import firebase from "firebase";
import "firebase/auth";
import "./Login.css";

function ProgramView({ auth }) {
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };
  return (
    <>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        Logg inn
      </button>
    </>
  );
}

export default ProgramView;
