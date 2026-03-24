//Creating Nested Elements
import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1", key: "ch1"}, [
//     React.createElement("h1", { id: "heading1", key: "h1"}, "Hi i am Nested Heading1"),
//     React.createElement("h1", { id: "heading2", key: "h2"}, "Hi i am Nested Heading2"),
//   ]),
//   React.createElement("div", { id: "child2", key: "ch2"}, [
//     React.createElement("h1", { id: "heading3", key: "h3"}, "Hi i am Nested Heading1"),
//     React.createElement("h1", { id: "heading4", key: "h4"}, "Hi i am Nested Heading2"),
//   ]),
// ]);

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

let Title = () => {
  return <h1>Hi i am Title</h1>;
};

// let title = () => {
//   <h1>Hi i am Title</h1>;
// };


let Heading = () => {
  return (
    <div id="container">
      <Title />
      {Title()}
      <h1 id="heading">Hello world Using JSX</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("box"));
// const root1 = ReactDOM.createRoot(document.getElementById("box1"));

root.render(<Heading />);
// root1.render(parent);
