//Creating Nested Elements

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "Hi i am Nested Heading1"),
    React.createElement("h1", { id: "heading2" }, "Hi i am Nested Heading2"),
  ]),
);

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("box"));

root.render(parent);
