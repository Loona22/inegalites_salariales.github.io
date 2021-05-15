let aquitaine;
let bourgogne;
let bretagne;
let centre;
let corse;
let grandest;
let hauts;
let idf;
let normandie;
let occitanie;
let paca;
let rhone;
let val;

let data = 14;

function preload(){
  aquitaine = loadImage('./img/aquitaine.png');
  bourgogne = loadImage('./img/bourgogne.png');
  bretagne = loadImage('./img/bretagne.png');
  centre = loadImage('./img/centre.png');
  corse = loadImage('./img/corse.png');
  grandest = loadImage('./img/grand-est.png');
  hauts = loadImage('./img/hauts.png');
  idf = loadImage('./img/idf.png');
  normandie = loadImage('./img/normandie.png');
  occitanie = loadImage('./img/occitanie.png');
  paca = loadImage('./img/paca.png');
  rhone = loadImage('./img/rhone.png');
  val = loadImage('./img/val-loire.png');
  
  tab = loadTable('./DATASET - Régions.csv', 'csv', 'header'); 
}

function setup() {
  createCanvas(1777, 400);
  image(hauts, 484 ,66);
  image(grandest, 526, 95);
  image(bourgogne, 515, 152);
  image(aquitaine, 408 ,185);
  image(bretagne, 355, 129);
  image(centre, 455, 130);
  image(corse, 610 ,306);
  image(idf, 485, 123);
  image(normandie, 416, 94);
  image(occitanie, 440,250);
  image(paca, 548, 248);
  image(rhone, 498, 200);
  image(val, 400, 142);
}


function mouseClicked(){
  
   // idf
  if(mouseX > 485 && mouseX < 529 && mouseY > 123 && mouseY < 157){
    afficheData(0);
  }
  // hauts de france
  if(mouseX > 484 && mouseX < 543 && mouseY > 66 && mouseY < 138){
    afficheData(1);
  }
  // grand est
  if(mouseX > 526 && mouseX < 626 && mouseY > 95 && mouseY < 180){
    afficheData(2);
  }
    // normandie
  if(mouseX > 416 && mouseX < 482 && mouseY > 94 && mouseY < 202){
    afficheData(3);
  }
  // bretagne
   if(mouseX > 355 && mouseX < 435 && mouseY > 129 && mouseY < 175){
    afficheData(4);
  }
    // val
  if(mouseX > 400 && mouseX < 473 && mouseY > 142 && mouseY < 214){
    afficheData(5);
  }
  // centre
  if(mouseX > 455 && mouseX < 523 && mouseY > 130 && mouseY < 212){
    afficheData(6);
  }
  // bourgogne
  if(mouseX > 515 && mouseX < 606 && mouseY > 152 && mouseY < 221){
    afficheData(7);
  }
  // aquitaine
  if(mouseX > 408 && mouseX < 510 && mouseY > 185 && mouseY < 321){
    afficheData(8);
  }
  // rhone
  if(mouseX > 498 && mouseX < 611 && mouseY > 200 && mouseY < 282){
    afficheData(9);
  }
  // occitanie
   if(mouseX > 440 && mouseX < 562 && mouseY > 250 && mouseY < 337){
    afficheData(10);
  }
  // paca
  if(mouseX > 548 && mouseX < 626 && mouseY > 248 && mouseY < 314){
    afficheData(11);
  }
  // corse
  if(mouseX > 610 && mouseX < 633 && mouseY > 306 && mouseY < 355){
    afficheData(12);
  }
}

function afficheData(i){
  image(hauts, 484 ,66);
  image(grandest, 526, 95);
  image(bourgogne, 515, 152);
  image(aquitaine, 408 ,185);
  image(bretagne, 355, 129);
  image(centre, 455, 130);
  image(corse, 610 ,306);
  image(idf, 485, 123);
  image(normandie, 416, 94);
  image(occitanie, 440,250);
  image(paca, 548, 248);
  image(rhone, 498, 200);
  image(val, 400, 142);
  
  nom = tab.get(i, 'Nom de la région');
  fill(241, 239, 227);
  noStroke();
  rect(750, 60, 550, 250, 20);
  textSize(35);
  fill(162, 189, 180);
  text(nom, 800, 120);
  dif = tab.get(i, 'Différence en %');
  textSize(20);
  text("Différence salariale de " + dif + "%", 800, 160);
  rF = tab.get(i, 'Revenu femme (€)');
  textSize(20);
  text("Revenu moyen femme : " + rF +"€", 800, 190, 300, 350);
  rH = tab.get(i, 'Revenu homme (€)');
  textSize(20);
  text("Revenu moyen homme : " + rH +"€", 800, 210, 300, 350);
  ecart = tab.get(i, 'Ecart (€)');
  textSize(20);
  text("Soit un écart de : " + ecart +"€", 800, 240, 300, 350);
}