function getFrameSize() {
    //checks if webpage is loaded with iframe
    const frame = document.querySelector("#frame");
    let frameWidth;
    let frameHeight;
    if(window.location !== window.parent.location){
        frameWidth = windowWidth
        frameHeight = windowHeight;
    }  else {
        frameWidth = frame.offsetWidth
        frameHeight = frame.offsetHeight
    }
    
    return [frameWidth, frameHeight]
}

function iframe(){
    const frameBox = document.querySelector(".main-frame-box");
    const frame = document.querySelector("#frame");
    const iframePlace = document.querySelector("#iframePlace")
    if(window.location !== window.parent.location){
        iframePlace.appendChild(frame)
        frameBox.remove()
    }  
}

let angle = 0;
let angleV = 0.1;
let angleA = 0;
let sticks = []

function setup() {
    iframe();
    const x = getFrameSize()    

    let canvas = createCanvas(x[0], x[1]);
    canvas.parent('frame');
    angleMode(RADIANS)
    frameRate(30)
    background(30);

    fillArraySticks();
}
function draw() {
    angleV = map(mouseX, 0, width, -0.1, 0.1)
    angleV = constrain(angleV, -0.1, 0.1)

    background(40);

    sticks.forEach(element => {
        element.draw()        
    });

    angle += angleV
    angleV += angleA
}

function fillArraySticks(){    
    let length = 400;
    if(windowHeight >= windowWidth){
        length = 300
    }
    if(windowWidth === 400){
        length = 200
    }

    const margin = 50
    const maxWidth = (width/2) + length
    const minWidth = (width/2) - length
    const maxHeight = (height/2) + length
    const minHeiht = (height/2) - length

    for (let x = minWidth; x < maxWidth; x += margin) {
        for (let y = minHeiht; y < maxHeight; y += margin) {
            if(!(x === minWidth || x === maxWidth || y === minHeiht || y === maxHeight))
            sticks.push(new Stick(x, y))
        }
    }
}   

function windowResized(){
    sticks = []
    const x = getFrameSize()
    resizeCanvas(x[0], x[1])
    background(30);
    fillArraySticks();
}

