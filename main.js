leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
leftWristscore=0;
rightWristscore=0;
song1status="";
song2status="";
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotPoses);
}
function modelloaded(){
    console.log("modelloaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        leftWristscore=results[0].pose.keypoints[9].score;
        rightWristscore=results[0].pose.keypoints[10].score;
console.log(leftWristscore);
console.log(rightWristscore);
    }
}
function draw()
{
    image(video,0,0,600,500);
    fill("red");
    stroke("red");
    song1status=song1.isPlaying();
    song2status=song2.isPlaying();
    if( leftWristscore>0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop();
   if(song1status==false){
    song1.play();
    document.getElementById("song_name").innerHTML="Playing Peter Pan song";
    
   }
  
   if(rightWristscore>0.2){
    circle(rightWristX,rightWristY,20);
    song1.stop();
    if(song2status==false){
        song2.play();
        document.getElementById("song_name").innerHTML="Playing Harry Potter theme song";
    }
   }

}
}
    
    
    function isPlaying(){

    }
    function stop(){

    }


