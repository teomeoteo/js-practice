const container = document.querySelector("body");
const myTagsBody = ["p", "h3", "div"];
const myTagsDiv = ["h1", "p"];

const content = myTagsBody.map(tag => document.createElement(tag))
.reduce((acc, element) => {
  if (element.tagName !== "DIV") {
    acc[element.tagName.toLowerCase()] = element;
  }
  else if (element.tagName === "DIV") {
    let divContent = myTagsDiv.map(a => document.createElement(a));
    divContent.forEach(el => element.appendChild(el));
    acc[element.tagName.toLowerCase()] = element;
  }
  return acc;
}, {});

for (const key in content) {
  container.appendChild(content[key]);
}

content.p.textContent = "Hi, I'm red!";
content.p.style.cssText = "color:red"
content.h3.textContent = "I'm a blue h3!";
content.h3.style.cssText = "color:blue"
content.div.style.cssText = "background-color: pink; border: 1px solid black;"
content.div.querySelector("h1").textContent = "I'm in a div!";
content.div.querySelector("p").textContent = "ME TOO!";