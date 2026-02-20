console.log("Hii");

const parent = document.getElementById("container");
const root = ReactDOM.createRoot(parent);

const h2 = React.createElement("h2", {}, "Welcome to React dev");

const li1 = React.createElement("li", {}, "Java Programming");
const li2 = React.createElement("li", {}, "C++ Programming");

const ul = React.createElement("ul", {}, li1, li2);

const img = React.createElement("img", {
  src: "https://via.placeholder.com/150",
  alt: "sample",
});

const div = React.createElement("div", {}, h2, ul, img);



setTimeout(() => {
  root.render(React.createElement("div", {}, ul));
}, 1000);


setTimeout(() => {
  root.render(React.createElement("div", {}, h2, ul));
}, 2000);

setTimeout(() => {
  root.render(React.createElement("div", {}, h2, ul, img));
}, 3000);

