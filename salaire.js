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
  createCanvas(1777, 1046);
  img = loadImage('./img/salaire.png'); // Load the image
  
  bouton1 = createButton("Le fameux 22%");
  bouton2 = createButton("Temps, le temps");
  bouton3 = createButton("Métiers mon beau métier");

  background(116,103,167);
  
  bouton1.mousePressed(ScaleImg);
  bouton1.position(40,700);

  bouton2.mousePressed(ScaleImg2);
  bouton2.position(160,700);
  
  bouton3.mousePressed(ScaleImg3);
  bouton3.position(280,700);

}

function ScaleImg(){
  background(220);
  image(img, 40, 40, img.width / 2.5, img.height / 2.5);
  chiffre = tab.get(0, 'Chiffre');
  textSize(40);
  text(chiffre + "%", 500, 230);
  explication = tab.get(0, 'Explications');
  textSize(15);
  text(explication, 500, 280, 250, 350);
}

function ScaleImg2(){
  background(220);
  image(img, 40, 40, img.width / 3, img.height / 3);
  chiffre = tab.get(1, 'Chiffre');
  textSize(40);
  text(chiffre + "%", 500, 230);
  explication = tab.get(1, 'Explications');
  textSize(15);
  text(explication, 500, 280,250, 350);
}

function ScaleImg3(){
  background(220);
  image(img, 40, 40, img.width / 4, img.height / 4);
  chiffre = tab.get(2, 'Chiffre');
  textSize(40);
  text(chiffre + "%", 500, 230);
  explication = tab.get(2, 'Explications');
  textSize(15);
  text(explication, 500, 280, 250, 350);
}