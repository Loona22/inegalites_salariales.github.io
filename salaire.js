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
}

function setup() {
  createCanvas(1777, 700);
  img = loadImage('./img/salaire.png'); // Load the image
  
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
  text("Click on the buttons", 700, 400);
}

function ScaleImg(){
  background(229, 229, 229);
  fill(241, 239, 227);
  noStroke();
  rect(1050, 120, 450, 300, 20);
  fill(0);
  image(img, 700, 160, img.width / 4, img.height / 4);
  chiffre = tab.get(0, 'Chiffre');
  textSize(40);
  text(chiffre + "%", 1100, 210);
  explication = tab.get(0, 'Explications');
  textSize(15);
  text(explication, 1100, 260, 350, 450);
}

function ScaleImg2(){
  background(229, 229, 229);
  fill(241, 239, 227);
  noStroke();
  rect(1050, 120, 450, 300, 20);
  fill(0);
  image(img, 720, 200, img.width / 5, img.height / 5);
  chiffre = tab.get(1, 'Chiffre');
  textSize(40);
  text(chiffre + "%", 1100, 210);
  explication = tab.get(1, 'Explications');
  textSize(15);
  text(explication, 1100, 260,350, 450);
}

function ScaleImg3(){
  background(229, 229, 229);
  fill(241, 239, 227);
  noStroke();
  rect(1050, 120, 450, 300, 20);
  fill(0);
  image(img, 740, 200, img.width / 6, img.height / 6);
  chiffre = tab.get(2, 'Chiffre');
  textSize(40);
  text(chiffre + "%", 1100, 210);
  explication = tab.get(2, 'Explications');
  textSize(15);
  text(explication, 1100, 260, 350, 450);
}

function ScaleImg4(){
  background(229, 229, 229);
  fill(241, 239, 227);
  noStroke();
  rect(1050, 120, 450, 300, 20);
  fill(0);
  image(img, 750, 200, img.width / 7, img.height / 7);
  chiffre = tab.get(3, 'Chiffre');
  textSize(40);
  text(chiffre + "%", 1100, 210);
  explication = tab.get(3, 'Explications');
  textSize(15);
  text(explication, 1100, 260, 350, 450);
}