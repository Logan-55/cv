const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", `top:${e.pageY}px; left:${e.pageX}px;`);
});

// const si0 = "#s__i--0";
// const si = "#s__i--0".slice(-1);
// console.log(si);
// const si1 = "#s__i--1";
// const si2 = "#s__i--2";
// const si3 = "#s__i--3";
// const sidebarItem0 = document.querySelector(si0);
// const sidebarItem1 = document.querySelector(si1);
// const sidebarItem2 = document.querySelector(si2);
// const sidebarItem3 = document.querySelector(si3);

// sidebarItem0.addEventListener("click", e => {
//   const sidebarItems = document.querySelectorAll(".s__i");

//   for (i = 0; i < sidebarItems.length; i++) {
//     if (sidebarItems[i].classList.contains("active"))
//       sidebarItems[i].classList.remove("active");
//   }

//   sidebarItems[0].classList.add("active");
// });

// sidebarItem1.addEventListener("click", e => {
//   const sidebarItems = document.querySelectorAll(".s__i");

//   for (i = 0; i < sidebarItems.length; i++) {
//     if (sidebarItems[i].classList.contains("active"))
//       sidebarItems[i].classList.remove("active");
//   }

//   sidebarItems[1].classList.add("active");
// });

// sidebarItem2.addEventListener("click", e => {
//   const sidebarItems = document.querySelectorAll(".s__i");

//   for (i = 0; i < sidebarItems.length; i++) {
//     if (sidebarItems[i].classList.contains("active"))
//       sidebarItems[i].classList.remove("active");
//   }

//   sidebarItems[2].classList.add("active");
// });

// sidebarItem3.addEventListener("click", e => {
//   const sidebarItems = document.querySelectorAll(".s__i");

//   for (i = 0; i < sidebarItems.length; i++) {
//     if (sidebarItems[i].classList.contains("active"))
//       sidebarItems[i].classList.remove("active");
//   }

//   sidebarItems[3].classList.add("active");
// });

// document.body.onload = addElement;

// function addElement() {
//   // crée un nouvel élément div
//   var newDiv = document.createElement("ul");
//   // et lui donne un peu de contenu
//   var newContent = document.createTextNode("Hi there and greetings!");
//   // ajoute le nœud texte au nouveau div créé
//   newDiv.appendChild(newContent);

//   // ajoute le nouvel élément créé et son contenu dans le DOM
//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }

const sidebarItems = document.querySelectorAll(".s__i");

for (i = 0; i < sidebarItems.length; i++) {
  //   sidebarIds.push(sidebarItems[i].id); // Rentre l'id de chaque item de la sidebar dans un tableau
  document
    .querySelector(`#${sidebarItems[i].id}`)
    .addEventListener("click", e => {
      changePage(e.currentTarget.id);
    });
}

function changePage(id) {
  console.log(id);
}

const test = document.querySelector("#test");
// const p0 = document.querySelector("#p--0");
const p1 = document.querySelector("#p--1");
// const p2 = document.querySelector("#p--2");
// const p3 = document.querySelector("#p--3");
// const si0 = document.querySelector("#s__i--0");
const si1 = document.querySelector("#s__i--1");
// const si2 = document.querySelector("#s__i--2");
// const si3 = document.querySelector("#s__i--3");

si1.addEventListener("click", () => {
  test.appendChild(test.firstElementChild);
  test.insertBefore(p1, test.firstElementChild);
});
