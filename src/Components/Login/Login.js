import firebase from "firebase";
import "firebase/auth";
import "./Login.css";

function Login({ auth }) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    // const id_token = localStorage.getItem("FB_ACCESSTOKEN");
    // if (id_token) {
    // var credential = firebase.auth.GoogleAuthProvider.credential(id_token);
    // firebase
    //   .auth()
    //   .signInWithCredential(credential)
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     var email = error.email;
    //     var credential = error.credential;
    //   });
    // } else {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        const token = credential.idToken;
        const user = result.user;
        // localStorage.setItem("FB_ACCESSTOKEN", token ? token : "");
      })
      .catch((error) => {
        console.error(error.message);
      });
    // }
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

export default Login;
