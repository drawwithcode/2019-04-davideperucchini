var mySong;
var mashtape;
var head;
var clinton;
var ricodallas;
var volume = 0;

function preload() {
  mySong = loadSound("./assets/Future.mp3");
  mashtape = loadImage("./assets/mashtape.png");
  head = loadImage("./assets/head.png");
  clinton = loadImage("./assets/clinton.png");
  ricodallas = loadImage("./assets/ricodallas.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(31, 6, 47);
  angleMode(DEGREES);
  amplitude = new p5.Amplitude();
  amplitude.setInput(mySong);
}

function mousePressed() {
  if (mySong.isPlaying()) {
    mySong.pause();
  } else {
    mySong.play();
  }
}

function draw() {



  //Draw the cover in the background
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mashtape, 0, 0, 500, 500);
  pop();

  //Draw Clinton's body over the cover
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(clinton, 0, 0, 200, 200);
  pop();

  //Draw Clinton's head and changes its size according to the volume of the song
  volume = amplitude.getLevel();
  volume = map(volume, 0, 1, 0, height);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(head, 10, -124, (57 + volume / 2), (80 + volume / 2));
  console.log("amplitude:" + amplitude.getLevel());
  console.log("var volume:" + volume);

}
