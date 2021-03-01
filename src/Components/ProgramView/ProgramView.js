import "./ProgramView.css";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function ProgramView({ firestore, auth }) {
  function getCleanURL(url) {
    if (!url) {
      return "";
    }
    var regex = /([^/,\s]+\.[^/,\s]+?)(?=\/|,|\s|$|\?|#)/g;
    const prettyURl = regex.exec(url)[0];
    if (prettyURl) return prettyURl;
    return "";
  }

  const linksRef = firestore.collection("links");
  const query = linksRef.orderBy("name").limit(25);
  const [links, loading, error] = useCollectionData(query, {
    idField: "id",
  });
  const [user] = useAuthState(auth);
  console.log(links);
  if (loading) {
    return (
      <>
        <div>Loading information</div>
      </>
    );
  }

  if (error) {
    console.log(error.message);
  }

  if (user && !links) {
    return (
      <>
        <div>You do not have permission for this.</div>
      </>
    );
  }

  return (
    <>
      <h1 className="mainTittel">Ressurser</h1>
      <ul className="list">
        {links &&
          links.map((link) => (
            <li className="listItem" key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                key={link.name}
                className="link"
              >
                <img src="/bird.png" alt="Fink bird logo"></img>
                <h1>{link.name}</h1>
                <p>{getCleanURL(link.url)}</p>
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ProgramView;
