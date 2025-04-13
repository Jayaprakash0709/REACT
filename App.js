const heading = React.createElement("div", { id: "parent", hfyu: "bdehb" }, [
  React.createElement("div", { id: "divchild1" }, [
    React.createElement("h1", {}, "I am an  H1 tag"),
    React.createElement("h2", {}, "I  am an h2 tag"),
  ]),
  React.createElement("div", { id: "divchild2" }, [
    React.createElement("h1", {}, "I am an  H1 tag"),
    React.createElement("h2", {}, "I  am an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);

root.render(heading);
