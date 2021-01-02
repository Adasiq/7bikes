let leftBtn = document.querySelector("#leftBtn");
let rightBtn = document.querySelector("#rightBtn");

let zoomImg = document.querySelector(".slider > img");

let lubeCounter = 0;

let lubeDescription = [
   "WET – парафиновая смазка для цепи велосипеда. <br> Наилучшим образом подходит для:<br> Городской эксплуатации <br>   Гонки XCO, критериум, эндуро, DH и т.п. <br>   Консервации и подготовке велосипеда к сезону",
   "DRY – парафиновая смазка для цепи велосипеда <br> Наилучшим образом подходит для:<br> Продолжительного загородного катания <br>Гонки бревет, марафон, XCM и т.п.<br>Многодневных велопоходов в теплое время года ",
   "SNOW – парафиновая смазка для цепи велосипеда <br>Наилучшим образом подходит для: <br>Зимней эксплуатации велосипеда за городом<br>Консервации велосипеда для длительного хранения ",
];


function slideLeft() {
   //console.log("left slide function");
   let c = document.querySelector(".slider > p");
   lubeCounter++;
   if (lubeCounter > 2) { lubeCounter = 0;}
   c.innerHTML = lubeDescription[lubeCounter];
   imgSwitch(lubeCounter);
}

function slideRight() {
   //console.log("right slide function");
   let d = document.querySelector(".slider > p");
   lubeCounter--;
   if (lubeCounter < 0) { lubeCounter = 2;}
   d.innerHTML = lubeDescription[lubeCounter];
   imgSwitch(lubeCounter);
}

function imgSwitch(lubeCounter) {
   let lubeBannerImg = document.querySelector(".slider > img");
   let p = document.querySelector(".slider > p");

   switch (lubeCounter) {
      case 0:
         console.log("WET");
         lubeBannerImg.src="lube1.png";
         break;
      case 1:
         console.log("DRY");
         lubeBannerImg.src="lubeDry.png";
         break;
      case 2:
         console.log("SNOW");
         lubeBannerImg.src="lubeSnow.png";
         break;
      default:

   }
}

function btnScaleUp() {
   let a = this.querySelector("img");
   a.style.width = "50px";

}
function btnScaleDown() {
   let b = this.querySelector("img");
   b.style.width = "30px";
}


leftBtn.addEventListener("mouseover", btnScaleUp);
leftBtn.addEventListener("mouseout", btnScaleDown);

rightBtn.addEventListener("mouseover", btnScaleUp);
rightBtn.addEventListener("mouseout", btnScaleDown);

leftBtn.addEventListener("click", slideLeft);
rightBtn.addEventListener("click", slideRight);
