nx=0;
ny=0;
d=0;
lwx=0;
rwx=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(400,400);
    canvas=createCanvas(400,400);
    canvas.position(550,150);
    posy=ml5.poseNet(video,modalLoaded);
    posy.on("pose",gotposes);
}
function draw(){
    background("grey");
    document.getElementById("ss").innerHTML="The side of the square is "+d+"p";
    fill("blue");
    stroke("blue");
    square(nx,ny,d);
}
function modalLoaded(){
    console.log("vdbckjbnbdxzsxdgfhgjhkjhgfcddz");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nx=results[0].pose.nose.x;
        ny=results[0].pose.nose.y;
        console.log("nosex="+nx+"   nosey="+ny);
        lwx=results[0].pose.leftWrist.x;
        rwx=results[0].pose.rightWrist.x;
        d=floor(lwx-rwx);
    }
}