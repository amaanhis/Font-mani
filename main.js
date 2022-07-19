difference=0;
rightWristX=0;
leftWristX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length > 0)
{
console.log(results);

leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=leftWristX - rightWristX;
console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + "difference = " + difference);
}
}
function draw() {
    background('#6c91c2');
    document.getElementById("square_sides").innerHTML = "font of the size will be = " + difference +"px";
    textSize(difference);
    fill('#ffe787');
    text('Amaan',50,400)
}