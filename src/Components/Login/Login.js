import firebase from "firebase";
import "firebase/auth";
import "./Login.css";

function ProgramView({ auth }) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const id_token = localStorage.getItem("FB_ACCESSTOKEN");
    if (id_token) {
      var credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      // Sign in with credential from the Google user.
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    } else {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          const credential = result.credential;
          const token = credential.idToken;
          console.log(token);
          // The signed-in user info.
          const user = result.user;
          localStorage.setItem("FB_ACCESSTOKEN", token ? token : "");
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
