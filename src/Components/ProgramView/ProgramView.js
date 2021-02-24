import "./ProgramView.css";

function ProgramView() {
  const resources = [
    {
      name: "Håndbok",
      img: "/bird.png",
      url: "https://bok.fink.no",
    },
    {
      name: "Nettside",
      img: "/bird.png",
      url: "https://fink.no",
    },
    {
      name: "Hyttebooking",
      img: "/bird.png",
      url: "https://romantic-shirley-f7bb28.netlify.app/calendar",
    },
    {
      name: "Trelloboard",
      img: "/bird.png",
      url: "https://trello.com/b/D6r9qiF9/nettside-og-personalh%C3%A5ndbok",
    },
    {
      name: "Fellesfinken",
      img: "/bird.png",
      url: "https://drive.no",
    },
    {
      name: "Trippeltex",
      img: "/bird.png",
      url: "https://tripletex.no/execute/login?site=no",
    },
  ];
  function getCleanURL(url) {
    if (!url.length) {
      return "";
    }
    var regex = /([^\/,\s]+\.[^\/,\s]+?)(?=\/|,|\s|$|\?|#)/g;
    const prettyURl = regex.exec(url)[0];
    if (prettyURl[0]) return prettyURl;
    return "";
    // temp = url;
    // temp = temp.replace(/(^\w+:|^)\/\//, "");
    // temp = tempreplace(/\/+$/, "");
  }
  return (
    <>
      <h1 className="mainTittel">Ressurser</h1>
      <ul className="list">
        {resources &&
          resources.map((resource) => (
            <li className="listItem" key={resource.name}>
              <a
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                key={resource.name}
                className="link"
              >
                <img
                  src={resource.img ? resource.img : "/bird.png"}
                  alt="Hei"
                ></img>
                <h1>{resource.name}</h1>
                <p>{getCleanURL(resource.url)}</p>
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ProgramView;
