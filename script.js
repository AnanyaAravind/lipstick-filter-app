noseX=0;
noseY=0;
function preload(){
lipstick_filter= loadImage("https://i.postimg.cc/C5zCD0hh/l1.png")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log('Initialising poseNet');
}
function gotPoses(results){
    if(results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x-20;
    noseY=results[0].pose.nose.y+5;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY );
    }}
function draw(){
image(video,0,0,300,300);
image(lipstick_filter, noseX, noseY, 50,45);
}
function take_snapshot(){
    save('image.png');
}