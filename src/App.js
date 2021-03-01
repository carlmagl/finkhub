import firebase from "firebase";
import "firebase/auth";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import ProgramView from "./Components/ProgramView/ProgramView";
import { AuthRoute } from "./Utils/AuthRoute";

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
  }
};

initializeFirebase();
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AuthRoute
            auth={auth}
            children={
              <>
                <Header auth={auth} />
                <Route exact path="/">
                  <ProgramView firestore={firestore} auth={auth} />
                </Route>
                <Route exact path="/login">
                  <Login auth={auth} />
                </Route>
                <Footer />
              </>
            }
          ></AuthRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
