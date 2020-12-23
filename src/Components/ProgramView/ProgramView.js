function ProgramView() {
  const heihei = [
    { name: "Håndbok", img: "/bird.png", url: "https://bok.fink.no" },
    { name: "Nettside", img: "/hei", url: "https://fink.no" },
    /* { name: "Hyttebooking", img: "/hei", url: "" }, */
    {
      name: "Trelloboard",
      img: "/hei",
      url: "https://trello.com/b/D6r9qiF9/nettside-og-personalh%C3%A5ndbok",
    },
    { name: "Fellesfinken", img: "/hei", url: "" },
  ];
  return (
    <>
      <h1>Programmer</h1>
      {heihei.map((test) => (
        <a href={test.url} key={test.name} className="card">
          <img src={test.img} alt="Hei"></img>
          <h1>{test.name}</h1>
        </a>
      ))}
    </>
  );
}

export default ProgramView;
