import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";

function Header({ auth }) {
  const signOutWithGoogle = async () => {
    await auth.signOut();
  };
  const [user] = useAuthState(auth);
  return (
    <>
      <header className="header">
        <h2 className="tittel">Finkerede</h2>
        {user && (
          <button
            className="signOut"
            onClick={() => {
              signOutWithGoogle();
            }}
          >
            Logg ut
          </button>
        )}
      </header>
    </>
  );
}

export default Header;
