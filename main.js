let users = [
  {
    text: "Jones became the youngest champion in UFC history with his title victory over Maurício Rua at age 23.[20] He holds many UFC records in the light heavyweight division, including the most title defenses, most wins, and longest win streak. During much of his championship reign, Jones has been widely considered to be the best pound-for-pound fight",
    img: (src = "./imegs/jon.jpg"),
    name: "John",
    surName: "jhons",
  },
  {
    text: "Khabib Abdulmanapovich Nurmagomedov was born to an Avar family on 20 September 1988, in the village of Sildi in the Tsumadinsky District of the Dagestan ASSR, an autonomous republic within the Russian SFSR, Soviet Union.[22][23][24] He has an older brother, Magomed, and younger sister, Amina",
    img: "./imegs/khab.png",
    name: "khabib",
    surName: "nurmagamedov",
  },
  {
    text: "Adesanya was born in Lagos, Nigeria, the eldest of five children.[10] His father, Oluwafemi,[18] is an accountant and his mother, Taiwo, is a nurse.[19] Adesanya attended Chrisland School, Opebi, and enrolled in its Taekwondo after-school club until he  In 1999, he relocated to Ghana with his family for 10 months,[4] but due to his parents wanting their children to receive a well-recognised higher education",
    img: "./imegs/israel.jfif",
    name: "israel",
    surName: "Adesanya",
  },
];

let count = 0;
let cards = document.querySelector(".cards");
let border = document.createElement("div");
border.classList.add("border");

let index = 0;
let card = setInterval(() => {
  border.style.width = `${count}px`;
  count += 10;
  if (count == 600) {
    count = 0;
    index += 1;
    if(index==3){
        index=0
    }
  }
}, 100);
console.log(users[0]);
let div = document.createElement("div");
div.classList.add("div");
cards.appendChild(div);
div.appendChild(border);
let text = document.createElement("p");
let imgnamesurname = document.createElement("div");
let img = document.createElement("img");
let name = document.createElement("p");
let surname = document.createElement("p");
imgnamesurname.append(img, name, surname);
imgnamesurname.classList.add("imgdiv");
img.classList.add("img");
div.append(text, imgnamesurname);
let nextcard = setInterval(() => {
  // for(i of users){
  text.innerHTML = users[index].text;
  img.src = users[index].img;
  name.innerHTML = users[index].name;
  surname.innerHTML = `-${users[index].surName}`;
  if (count == 400) {
    
    
    
  }
});
