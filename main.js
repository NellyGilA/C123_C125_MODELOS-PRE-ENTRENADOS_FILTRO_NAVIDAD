noseX = 0;
noseY = 0;

function preload() {
  nose_img = loadImage("clownnose.png");
  reno_img = loadImage("reno.png");
  bufanda_img = loadImage("bufanda.png");
  fondo = loadImage("fondo_nieve.png");

  musica = loadSound("navidad.mp3");
  
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400,400);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded(){
  console.log("Modelo poseNet cargado!!");
}

function gotPoses(results){
  console.log(results)
  if(results.length > 0){
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y-15;
  }
}

function draw() {
  image(video, 0, 0, 400, 400);
  image(fondo, 0, 0, 400, 400);
  image(nose_img, noseX, noseY , 30, 30);
  image(reno_img, noseX - 60, noseY - 180 , 150, 150);
  image(bufanda_img, noseX - 95, noseY - 75 , 230, 230);
}

function take_snapshot(){    
  save('myFilterImage.png');
}

function play(){
  musica.play();
}

