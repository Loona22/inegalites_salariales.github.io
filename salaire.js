var bouton1;
var bouton2;
var bouton3;

var chiffre;
let explication;
let p;

// précaution pour charger les datas
function preload(){
  tab = loadTable('./DATASET.csv', 'csv', 'header'); 
  //header : premiere ligne nom des colones

  salaire1 = loadImage('./img/salaire.png'); // Load the image
  salaire2 = loadImage('./img/salaire2.png'); // Load the image
  salaire3 = loadImage('./img/salaire3.png'); // Load the image
  salaire4 = loadImage('./img/salaire4.png'); // Load the image
}

function setup() {
  createCanvas(1777, 600);
  
  bouton1 = createButton("Le fameux 22%");
  bouton2 = createButton("Temps, le temps");
  bouton3 = createButton("Métiers mon beau métier");
  bouton4 = createButton("Sexisme et société");
  
  bouton1.mousePressed(ScaleImg);
  bouton1.position(500,900);

  bouton2.mousePressed(ScaleImg2);
  bouton2.position(700,900);
  
  bouton3.mousePressed(ScaleImg3);
  bouton3.position(880,900);

  bouton4.mousePressed(ScaleImg4);
  bouton4.position(1100,900);

  textSize(45);
  text("Click on the buttons", 650, 400);
}

function ScaleImg(){
  background(229, 229, 229);
  fill(241, 239, 227);
  noStroke();
  rect(850, 140, 600, 250, 20);
  fill(0);
  image(salaire1, 500, 160, salaire1.width, salaire1.height);
  chiffre = tab.get(0, 'Chiffre');
  textSize(40);
  text(chiffre + "%", 900, 210);
  explication = tab.get(0, 'Explications');
  textSize(15);
  text(explication, 900, 260, 470, 650);
}

function ScaleImg2(){
  background(229, 229, 229);
  fill(241, 239, 227);
  noStroke();
  rect(850, 140, 600, 250, 20);
  fill(0);
  image(salaire2, 500, 160, salaire2.width, salaire2.height);
  chiffre = tab.get(1, 'Chiffre');
  textSize(40);
  text(chiffre + "%", 900, 210);
  explication = tab.get(1, 'Explications');
  textSize(15);
  text(explication, 900, 260, 420, 650);
}

function ScaleImg3(){
  background(229, 229, 229);
  fill(241, 239, 227);
  noStroke();
  rect(850, 140, 600, 250, 20);
  fill(0);
  image(salaire3, 500, 160, salaire3.width, salaire3.height);
  chiffre = tab.get(2, 'Chiffre');
  textSize(40);
  text(chiffre + "%", 900, 210);
  explication = tab.get(2, 'Explications');
  textSize(15);
  text(explication, 900, 260, 480, 650);
}

function ScaleImg4(){
  background(229, 229, 229);
  fill(241, 239, 227);
  noStroke();
  rect(850, 140, 600, 250, 20);
  fill(0);
  image(salaire4, 500, 160, salaire4.width, salaire4.height);
  chiffre = tab.get(3, 'Chiffre');
  textSize(40);
  text(chiffre + "%", 900, 210);
  explication = tab.get(3, 'Explications');
  textSize(15);
  text(explication, 900, 260, 480, 650);
}